import BookingForm from './BookingForm';

const seasons = [
  { number: '01', name: 'Lente', line: 'Alles begint weer.', text: 'Fris groen, vroege zon en het bos dat elke ochtend een beetje voller klinkt.', tone: 'spring' },
  { number: '02', name: 'Zomer', line: 'De deuren blijven open.', text: 'Lange avonden buiten, koel bos aan je voeten en nergens haast voor nodig.', tone: 'summer' },
  { number: '03', name: 'Herfst', line: 'Het landschap wordt goud.', text: 'Koperkleurige paden, een trui bij het ontbijt en thuiskomen in warm licht.', tone: 'autumn' },
  { number: '04', name: 'Winter', line: 'Stilte krijgt ruimte.', text: 'Heldere lucht, zilveren stammen en het prettige gevoel dat je nergens heen hoeft.', tone: 'winter' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="welkom">
        <nav className="nav" aria-label="Hoofdnavigatie">
          <a href="#welkom" aria-label="Het Berkenbos, naar boven">
            <img src="/het-berkenbos-logo.png" alt="Het Berkenbos" className="logo" />
          </a>
          <div className="navLinks">
            <a href="#verblijf">Het verblijf</a>
            <a href="#seizoenen">Vier seizoenen</a>
            <a href="#omgeving">Hauwert</a>
          </div>
          <a className="navCta" href="#reserveren">Boek je buiten</a>
        </nav>

        <div className="heroImage" aria-hidden="true" />
        <div className="heroWash" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">Hauwert · West-Friesland · Noord-Holland</p>
          <h1>Buiten voelt<br />hier als <em>thuis.</em></h1>
          <p className="heroIntro">Een barnhouse, 3.000 m² tuin en een klein berkenbos. Alles wat je nodig hebt om even nergens anders te zijn.</p>
          <div className="heroActions">
            <a className="primaryButton" href="#reserveren">Plan je verblijf <span>→</span></a>
            <a className="textLink" href="#verblijf">Ontdek het huis <span>↓</span></a>
          </div>
        </div>
        <div className="heroNote"><span className="noteLine" /><p>Een plek van<br /><strong>Selma Kool</strong></p></div>
        <div className="scrollCue" aria-hidden="true"><span>Scroll door de seizoenen</span><i /></div>
      </section>

      <a className="floatingBook" href="#reserveren"><span>Vrij?</span> check je data ↗</a>

      <section className="promiseStrip" aria-label="Waarom Het Berkenbos">
        <div className="tickerTrack">
          <span>3.000 m² buiten</span><i>✦</i><span>klein berkenbos</span><i>✦</i><span>barnhouse in Hauwert</span><i>✦</i><span>vier seizoenen</span><i>✦</i>
          <span aria-hidden="true">3.000 m² buiten</span><i aria-hidden="true">✦</i><span aria-hidden="true">klein berkenbos</span><i aria-hidden="true">✦</i><span aria-hidden="true">barnhouse in Hauwert</span><i aria-hidden="true">✦</i><span aria-hidden="true">vier seizoenen</span><i aria-hidden="true">✦</i>
        </div>
      </section>

      <section className="story sectionPad" id="verblijf">
        <div className="storyKicker reveal"><span>Het verblijf</span><b>Geen decor.<br />Een echt thuis.</b></div>
        <div className="storyBody reveal">
          <p className="lead">Sommige plekken laten je meteen langzamer lopen. Het Berkenbos is zo’n plek.</p>
          <p>Geen gelikt hotel en geen vakantiehuis uit een catalogus. Wel een eigenzinnige barnhouse aan de rand van het groen, met rustige kamers en ramen die het West-Friese landschap naar binnen halen.</p>
          <p>Selma maakte hier een verblijf dat voelt alsof het er altijd al was — eenvoudig, warm en met aandacht voor wat je nodig hebt om echt los te komen.</p>
          <a href="#reserveren" className="arrowLink">Dit wil ik ervaren <span>↗</span></a>
        </div>
        <div className="storyPhoto reveal" role="img" aria-label="Buiten genieten bij Het Berkenbos"><span>Hauwert<br />Noord-Holland</span></div>
      </section>

      <section className="detailsBand">
        <p className="detailsQuote">“Je hoeft hier niets.<br /><em>Dat is precies de bedoeling.</em>”</p>
        <div className="detailsList">
          <div><span>Slapen</span><p>Rustige nachten tussen bomen en velden.</p></div>
          <div><span>Leven</span><p>Buiten ontbijten, lezen, koken en lang natafelen.</p></div>
          <div><span>Dwalen</span><p>Van de voordeur zo de paden en het landschap in.</p></div>
        </div>
      </section>

      <section className="seasons" id="seizoenen">
        <header className="seasonsHeader sectionPad reveal">
          <div><p className="sectionNo">II · Het jaar rond</p><h2>Vier seizoenen.<br /><em>Eén goed gevoel.</em></h2></div>
          <p>Het Berkenbos verandert met het licht, de bladeren en de lucht. Scroll door een jaar en kies het moment dat bij jou past.</p>
        </header>
        <div className="seasonsPanorama" aria-label="Het landschap rond Het Berkenbos in lente, zomer, herfst en winter">
          <div className="seasonPanel springPhoto" role="img" aria-label="Lentelandschap bij Het Berkenbos"><span>Lente</span></div>
          <div className="seasonPanel summerPhoto" role="img" aria-label="Zomeravond bij Het Berkenbos"><span>Zomer</span></div>
          <div className="seasonPanel autumnPhoto" role="img" aria-label="Perenboom in de herfst bij Het Berkenbos"><span>Herfst</span></div>
          <div className="seasonPanel winterPhoto" role="img" aria-label="Besneeuwd bos bij Het Berkenbos"><span>Winter</span></div>
        </div>
        <div className="seasonCards">
          {seasons.map((season) => (
            <article className={`seasonCard ${season.tone} reveal`} key={season.name}>
              <span className="seasonNumber">{season.number}</span><p className="seasonName">{season.name}</p>
              <h3>{season.line}</h3><p>{season.text}</p><a href="#reserveren" aria-label={`Verblijf plannen in de ${season.name.toLowerCase()}`}>Kies {season.name.toLowerCase()} <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="place sectionPad" id="omgeving">
        <div className="placeImage reveal"><div className="compass">N<br /><i>✦</i></div><p>Het ritme van het bos,<br />de ruimte van West-Friesland.</p></div>
        <div className="placeCopy reveal">
          <p className="sectionNo">III · Hauwert</p><h2>Vlak bij alles.<br /><em>Ver genoeg weg.</em></h2>
          <p className="lead">Hier begint de dag met vogels en eindigt hij met het laatste licht tussen de stammen.</p>
          <p>Hauwert ligt midden in het open West-Friese land. Water, boomgaarden en eindeloze luchten maken zelfs een kleine wandeling groots — zonder dat je verblijf ooit als een tussenstop voelt.</p>
          <div className="placeNotes"><span>3.000 m² tuin</span><span>klein berkenbos</span><span>West-Friese vergezichten</span></div>
        </div>
      </section>

      <section className="host sectionPad">
        <div className="hostMonogram" aria-hidden="true">S</div>
        <div className="hostCopy reveal"><p className="sectionNo">IV · Een persoonlijk adres</p><h2>Welkom,<br /><em>ik ben Selma.</em></h2><p>Het Berkenbos is geen formule. Het is een plek waar ik zelf graag zou aankomen: mooi zonder opsmuk, verzorgd zonder afstand en rustig zonder stil te vallen.</p><p className="signature">Selma Kool</p></div>
        <div className="hostCard reveal"><span>Een kleine uitnodiging</span><p>Kom niet om alles af te vinken. Kom om wakker te worden zonder plan, een onbekend pad te nemen en pas laat te besluiten wat je gaat eten.</p></div>
      </section>

      <section className="booking" id="reserveren">
        <div className="bookingImage" aria-hidden="true" />
        <div className="bookingShade" aria-hidden="true" />
        <div className="bookingShell reveal">
          <div className="bookingContent">
            <p className="eyebrow">Jouw verblijf</p><h2>Wanneer kom<br /><em>jij tot rust?</em></h2>
            <p>Reserveer rechtstreeks bij Selma. Kies je data, vertel met wie je komt en ontvang na je aanvraag een persoonlijke bevestiging.</p>
            <a href="#veelgestelde-vragen" className="textLink">Eerst nog een vraag?</a>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="faq sectionPad" id="veelgestelde-vragen">
        <p className="sectionNo">Goed om te weten</p>
        <div className="faqGrid"><h2>Voor je<br /><em>vertrekt.</em></h2><div>
          <details><summary>Waar ligt Het Berkenbos?<span>+</span></summary><p>In Hauwert, midden in het open landschap van West-Friesland in Noord-Holland. De exacte route ontvang je bij je reservering.</p></details>
          <details><summary>Is het een blokhut?<span>+</span></summary><p>Nee. Het is een karaktervolle barnhouse met de eenvoud en warmte van een stuga, maar met een eigen architectuur en verhaal.</p></details>
          <details><summary>Hoe reserveer ik?<span>+</span></summary><p>Rechtstreeks op deze website. Kies je data en laat je gegevens achter; Selma bevestigt je aanvraag daarna persoonlijk.</p></details>
        </div></div>
      </section>

      <footer><a href="#welkom"><img src="/het-berkenbos-logo.png" alt="Het Berkenbos" /></a><p>Een bijzonder verblijf in Hauwert<br />van Selma Kool</p><div><a href="#verblijf">Het verblijf</a><a href="#seizoenen">Seizoenen</a><a href="#reserveren">Reserveren</a></div><span>© 2026 Het Berkenbos</span></footer>
    </main>
  );
}
