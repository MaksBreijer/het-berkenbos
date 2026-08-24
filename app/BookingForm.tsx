'use client';

import { useActionState } from 'react';
import { submitReservation } from './actions';
import type { ReservationState } from './reservation-types';

const initialState: ReservationState = { kind: 'idle' };

export default function BookingForm() {
  const [state, formAction, pending] = useActionState(submitReservation, initialState);
  const today = new Date().toISOString().slice(0, 10);

  if (state.kind === 'success') {
    return (
      <div className="bookingSuccess" role="status">
        <span>Aanvraag ontvangen</span>
        <h3>Je buitenmoment<br />staat genoteerd.</h3>
        <p>Selma bevestigt je verblijf persoonlijk via e-mail of telefoon.</p>
        <div><small>Reserveringsnummer</small><strong>{state.reference}</strong></div>
      </div>
    );
  }

  return (
    <form className="bookingForm" action={formAction}>
      <div className="formIntro"><span>Reserveringsaanvraag</span><p>Kies jouw moment in Het Berkenbos.</p></div>
      <div className="formGrid">
        <label><span>Aankomst</span><input type="date" name="arrival" min={today} required /></label>
        <label><span>Vertrek</span><input type="date" name="departure" min={today} required /></label>
        <label><span>Gasten</span><input type="number" name="guests" min="1" max="10" defaultValue="2" required /></label>
        <label><span>Naam</span><input type="text" name="fullName" autoComplete="name" placeholder="Voor- en achternaam" maxLength={100} required /></label>
        <label><span>E-mail</span><input type="email" name="email" autoComplete="email" placeholder="jij@voorbeeld.nl" maxLength={160} required /></label>
        <label><span>Telefoon</span><input type="tel" name="phone" autoComplete="tel" placeholder="06 12 34 56 78" maxLength={40} required /></label>
        <label className="wide"><span>Iets dat Selma mag weten?</span><textarea name="message" rows={3} maxLength={1000} placeholder="Bijvoorbeeld een bijzonder moment of vraag" /></label>
      </div>
      <label className="honeypot" aria-hidden="true">Bedrijf<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent"><input type="checkbox" name="consent" required /><span>Selma mag mijn gegevens gebruiken om deze aanvraag te bevestigen.</span></label>
      {state.kind === 'error' && <p className="formError" role="alert">{state.message}</p>}
      <button className="formSubmit" type="submit" disabled={pending}>
        {pending ? 'Even vastleggen…' : 'Vraag mijn verblijf aan'} <span>→</span>
      </button>
      <small>Nog geen betaling · Selma bevestigt persoonlijk</small>
    </form>
  );
}
