'use server';

import { createReservation, ReservationConflictError } from '@/db/reservations';
import type { ReservationState } from './reservation-types';

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function submitReservation(
  _previousState: ReservationState,
  formData: FormData,
): Promise<ReservationState> {
  if (clean(formData.get('company'), 100)) {
    return { kind: 'success', reference: 'HB-ONTVANGEN' };
  }

  const arrival = clean(formData.get('arrival'), 10);
  const departure = clean(formData.get('departure'), 10);
  const fullName = clean(formData.get('fullName'), 100);
  const email = clean(formData.get('email'), 160).toLowerCase();
  const phone = clean(formData.get('phone'), 40);
  const message = clean(formData.get('message'), 1000);
  const guests = Number(formData.get('guests'));
  const today = new Date().toISOString().slice(0, 10);

  if (!datePattern.test(arrival) || !datePattern.test(departure) || arrival < today || departure <= arrival) {
    return { kind: 'error', message: 'Kies geldige aankomst- en vertrekdata.' };
  }

  const stayLength = (Date.parse(`${departure}T00:00:00Z`) - Date.parse(`${arrival}T00:00:00Z`)) / 86_400_000;
  if (stayLength > 31 || !Number.isInteger(guests) || guests < 1 || guests > 10) {
    return { kind: 'error', message: 'Controleer de verblijfsduur en het aantal gasten.' };
  }

  if (fullName.length < 2 || !emailPattern.test(email) || phone.length < 6 || formData.get('consent') !== 'on') {
    return { kind: 'error', message: 'Vul je contactgegevens volledig in en geef toestemming.' };
  }

  try {
    const reference = await createReservation({ arrival, departure, guests, fullName, email, phone, message });
    return { kind: 'success', reference };
  } catch (error) {
    if (error instanceof ReservationConflictError) {
      return { kind: 'error', message: 'Deze data zijn net door iemand anders aangevraagd. Kies andere data of neem contact op met Selma.' };
    }
    return { kind: 'error', message: 'De aanvraag kon niet worden opgeslagen. Probeer het straks nog eens.' };
  }
}
