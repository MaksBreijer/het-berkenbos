import { env } from 'cloudflare:workers';

export type NewReservation = {
  arrival: string;
  departure: string;
  guests: number;
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export class ReservationConflictError extends Error {}

function reservationReference() {
  const bytes = new Uint8Array(3);
  crypto.getRandomValues(bytes);
  const token = Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
  return `HB-${new Date().getUTCFullYear()}-${token}`;
}

async function ensureSchema() {
  const db = env.DB;
  await db.batch([
    db.prepare(`CREATE TABLE IF NOT EXISTS reservations (
      id TEXT PRIMARY KEY NOT NULL,
      reference TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL,
      arrival TEXT NOT NULL,
      departure TEXT NOT NULL,
      guests INTEGER NOT NULL,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      message TEXT,
      status TEXT DEFAULT 'pending' NOT NULL
    )`),
    db.prepare(`CREATE INDEX IF NOT EXISTS idx_reservations_status_dates
      ON reservations (status, arrival, departure)`),
  ]);
}

export async function createReservation(input: NewReservation) {
  await ensureSchema();

  const overlap = await env.DB.prepare(`SELECT id FROM reservations
    WHERE status IN ('pending', 'confirmed')
      AND arrival < ?1
      AND departure > ?2
    LIMIT 1`)
    .bind(input.departure, input.arrival)
    .first();

  if (overlap) {
    throw new ReservationConflictError();
  }

  const reference = reservationReference();
  await env.DB.prepare(`INSERT INTO reservations
    (id, reference, created_at, arrival, departure, guests, full_name, email, phone, message, status)
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, 'pending')`)
    .bind(
      crypto.randomUUID(),
      reference,
      new Date().toISOString(),
      input.arrival,
      input.departure,
      input.guests,
      input.fullName,
      input.email,
      input.phone,
      input.message || null,
    )
    .run();

  return reference;
}
