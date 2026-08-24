export type ReservationState =
  | { kind: 'idle' }
  | { kind: 'success'; reference: string }
  | { kind: 'error'; message: string };
