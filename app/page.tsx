import Image from 'next/image';
import BookingForm from './BookingForm';
import ScrollProgress from './ScrollProgress';
import SeasonJourney from './SeasonJourney';

const experiences = [
  { number: '01', eyebrow: 'Aankomen', title: 'Laat de dag maar los.', text: 'Zodra je het erf opdraait, verdwijnt het tempo. Eerst de lucht. Dan de bomen. Dan pas het huis.', image: '/instagram-landschap.jpg', alt: 'Het open landschap rond Het Berkenbos' },
  { number: '02', eyebrow: 'Buiten leven', title: '3.000 m² om nergens heen te hoeven.', text: 'Ontbijten in de tuin, lezen tussen de berken en blijven zitten tot het licht achter de velden zakt.', image: '/instagram-buitenleven.jpg', alt: 'Buitenleven in de tuin van Het Berkenbos' },
  { number: '03', eyebrow: 'Nacht', title: 'Stilte die je bijna kunt horen.', text: 'Geen hotelgang. Geen drukte. Alleen een rustige barnhouse, bomen voor het raam en een bed waar de ochtend mag wachten.', image: '/instagram-hero.jpg', alt: 'Avondlicht bij Het Berkenbos' },
];

export default function Home() {
  return (
    <main className="onePager">
      <ScrollProgress />
      <nav className="nav" aria-label="Hoofdnavigatie">
        <a href="#welkom" aria-label="Het Berkenbos, naar boven"><Image src="/het-berkenbos-logo.png" alt="Het Berkenbos" width={180} height={78} className="logo" priority /></a>
        <div className="navLinks"><a href="#verblijf">Ervaar</a><a href="#workshops">Workshops</a><a href="#seizoenen">Seizoenen</a></div>
        <a className="navCta" href="#reserveren">Reserveer <span>↗</span></a>
      </nav>

      <section className="hero" id="welkom">
        <Image src="/instagram-hero.jpg" alt="Zonsondergang bij Het Berkenbos in Hauwert" fill sizes="100vw" className="heroImage" priority />
        <div className="heroWash" /><div className="heroIndex"><span>52.72° N</span><span>05.10° E</span></div>
        <div className="heroContent">
          <p>Een buitenverblijf van Selma Kool · Hauwert</p><h1>Het<br /><em>Berkenbos.</em></h1>
          <div className="heroBottom"><span>Een barnhouse, 3.000 m² tuin<br />en een klein berkenbos.</span><a href="#verblijf">Volg het pad <b>↓</b></a></div>
        </div>
      </section>

      <section className="manifesto" id="verblijf">
        <div className="manifestoSticky">
          <p className="chapterLabel">I · Het gevoel</p><div className="manifestoWord" aria-hidden="true">NIETS</div>
          <h2>Je hoeft hier<br /><em>helemaal niets.</em></h2>
          <p className="manifestoText">En precies daardoor ontstaat er ruimte voor alles wat thuis steeds wordt uitgesteld.</p>
          <div className="manifestoFacts"><span>3.000 m² buiten</span><span>Een klein berkenbos</span><span>Een eigenzinnige barnhouse</span></div>
        </div>
      </section>

      <section className="experienceReel" aria-label="Een verblijf bij Het Berkenbos">
        {experiences.map((experience) => (
          <article className="experienceScene" key={experience.number}>
            <Image src={experience.image} alt={experience.alt} fill sizes="100vw" /><div className="sceneVeil" />
            <div className="sceneNumber">{experience.number}<span>/ 03</span></div>
            <div className="sceneCopy"><p>{experience.eyebrow}</p><h2>{experience.title}</h2><div><span>{experience.text}</span><a href="#reserveren">Ik wil dit <b>↗</b></a></div></div>
          </article>
        ))}
      </section>

      <section className="workshops" id="workshops">
        <div className="workshopImage"><Image src="/instagram-buitenleven.jpg" alt="Samen buiten bij Het Berkenbos" fill sizes="(max-width: 780px) 100vw, 50vw" /></div>
        <div className="workshopCopy">
          <div className="workshopWord" aria-hidden="true">SAMEN</div>
          <p>Workshops · Op aanvraag</p>
          <h2>Ruimte om<br /><em>samen te maken.</em></h2>
          <span>Het Berkenbos is ook beschikbaar voor kleinschalige workshops. Een rustige plek voor groepen die willen creëren, verdiepen of samen werken — binnen én buiten.</span>
          <div className="workshopFacts"><b>Kleine groepen</b><b>Programma op maat</b><b>Bespreekbaar met Selma</b></div>
          <a href="#reserveren">Vraag naar de mogelijkheden <b>→</b></a>
        </div>
      </section>

      <SeasonJourney />

      <section className="hauwert" id="omgeving">
        <Image src="/instagram-landschap.jpg" alt="Het West-Friese landschap bij Hauwert" fill sizes="100vw" /><div className="hauwertVeil" />
        <div className="hauwertCoordinates"><span>HAUWERT</span><b>52.72° N<br />05.10° E</b></div>
        <div className="hauwertCopy"><p>III · De plek</p><h2>Vlak bij alles.<br /><em>Ver genoeg weg.</em></h2><span>Water, boomgaarden en eindeloze luchten maken zelfs een kleine wandeling groots.</span></div>
      </section>

      <section className="host" id="selma">
        <div className="hostLetter" aria-hidden="true">S</div>
        <div className="hostPortrait"><Image src="/instagram-buitenleven.jpg" alt="De persoonlijke sfeer van Het Berkenbos" fill sizes="(max-width: 780px) 100vw, 42vw" /></div>
        <div className="hostCopy"><p>IV · Een woord van Selma</p><h2>Welkom,<br /><em>ik ben Selma.</em></h2><blockquote>“Ik maakte een plek waar ik zelf graag zou aankomen: mooi zonder opsmuk, verzorgd zonder afstand.”</blockquote><span>Selma Kool · eigenaresse</span></div>
      </section>

      <section className="booking" id="reserveren">
        <Image src="/instagram-hero.jpg" alt="Avond bij Het Berkenbos" fill sizes="100vw" className="bookingImage" /><div className="bookingShade" />
        <div className="bookingShell"><div className="bookingContent"><p>V · Jouw verblijf</p><h2>Wanneer kom<br /><em>jij tot rust?</em></h2><span>Reserveer rechtstreeks bij Selma. Geen omweg, geen boekingsplatform.</span></div><BookingForm /></div>
      </section>

      <section className="faq" id="veelgestelde-vragen">
        <p>Goed om te weten</p><h2>Voor je<br /><em>vertrekt.</em></h2>
        <div><details><summary>Waar ligt Het Berkenbos?<span>+</span></summary><p>In Hauwert, midden in het open landschap van West-Friesland in Noord-Holland. De exacte route ontvang je bij je reservering.</p></details><details><summary>Kan ik hier een workshop organiseren?<span>+</span></summary><p>Ja, Het Berkenbos biedt ruimte voor kleinschalige workshops op aanvraag. Vertel Selma via het reserveringsformulier wat je voor ogen hebt.</p></details><details><summary>Is het een blokhut?<span>+</span></summary><p>Nee. Het is een karaktervolle barnhouse met de eenvoud en warmte van een stuga, maar met een eigen architectuur.</p></details><details><summary>Hoe reserveer ik?<span>+</span></summary><p>Rechtstreeks op deze website. Kies je data en laat je gegevens achter; Selma bevestigt je aanvraag persoonlijk.</p></details></div>
      </section>

      <footer><Image src="/het-berkenbos-logo.png" alt="Het Berkenbos" width={190} height={82} /><p>Een bijzonder buitenverblijf<br />in Hauwert van Selma Kool.</p><div><a href="#welkom">Naar boven ↑</a><a href="#reserveren">Reserveer je verblijf ↗</a></div><span>© 2026 Het Berkenbos</span></footer>
    </main>
  );
}
