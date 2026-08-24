import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const reservations = sqliteTable(
  'reservations',
  {
    id: text('id').primaryKey(),
    reference: text('reference').notNull().unique(),
    createdAt: text('created_at').notNull(),
    arrival: text('arrival').notNull(),
    departure: text('departure').notNull(),
    guests: integer('guests').notNull(),
    fullName: text('full_name').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    message: text('message'),
    status: text('status').notNull().default('pending'),
  },
  (table) => [
    index('idx_reservations_status_dates').on(
      table.status,
      table.arrival,
      table.departure,
    ),
  ],
);
