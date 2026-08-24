'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const seasons = [
  { number: '01', name: 'Lente', line: 'Alles begint weer.', text: 'Fris groen, vroege zon en het berkenbos dat elke ochtend een beetje voller klinkt.', image: '/instagram-lente.jpg', position: 'center' },
  { number: '02', name: 'Zomer', line: 'De deuren blijven open.', text: 'Lange avonden buiten, koel gras aan je voeten en nergens haast voor nodig.', image: '/instagram-zomer.jpg', position: 'center' },
  { number: '03', name: 'Herfst', line: 'Het landschap wordt goud.', text: 'Koperkleurige paden, een trui bij het ontbijt en thuiskomen in warm licht.', image: '/instagram-herfst.jpg', position: 'center' },
  { number: '04', name: 'Winter', line: 'Stilte krijgt ruimte.', text: 'Heldere lucht, zilveren stammen en het prettige gevoel dat je nergens heen hoeft.', image: '/instagram-winter.jpg', position: 'center' },
];

export default function SeasonJourney() {
  const [active, setActive] = useState(0);
  const steps = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const index = Number((visible.target as HTMLElement).dataset.index);
      if (Number.isInteger(index)) setActive(index);
    }, { rootMargin: '-35% 0px -35% 0px', threshold: [0, .25, .5, .75, 1] });
    const elements = steps.current;
    elements.forEach((element) => element && observer.observe(element));
    return () => elements.forEach((element) => element && observer.unobserve(element));
  }, []);

  return (
    <section className="seasonJourney" id="seizoenen" aria-label="Het Berkenbos door de vier seizoenen">
      <div className="seasonSticky">
        <div className="seasonImages">
          {seasons.map((season, index) => (
            <Image key={season.name} src={season.image} alt={`${season.name} in het landschap rond Het Berkenbos`} fill sizes="100vw" className={index === active ? 'active' : ''} style={{ objectPosition: season.position }} />
          ))}
        </div>
        <div className="seasonVeil" />
        <div className="seasonFixedCopy"><p>I · Het jaar rond</p><h2>Vier seizoenen.<br /><em>Eén plek.</em></h2></div>
        <div className="seasonCounter" aria-live="polite"><strong>{seasons[active].number}</strong><span>/ 04</span></div>
      </div>
      <div className="seasonSteps">
        {seasons.map((season, index) => (
          <article key={season.name} ref={(element) => { steps.current[index] = element; }} data-index={index} className={index === active ? 'active' : ''}>
            <span>{season.number} · {season.name}</span><h3>{season.line}</h3><p>{season.text}</p><a href="#reserveren">Kies {season.name.toLowerCase()} <b>→</b></a>
          </article>
        ))}
      </div>
    </section>
  );
}
