import React from 'react';
import '../styles/Projecten.css';
import AnimatedSection from '../components/AnimatedSection';
import { link } from 'framer-motion/client';

const projecten = [
  {
    titel: "Dajo's Extreme Wordle of DEW (2024)",
    beschrijving: "Een creatieve en sadistische variant op Wordle waarbij de standaard (azerty) layout van je toetsenbord veranderd naar de zelf samengestelde 'merckx' layout. Gemaakt met Python en pygame.",
  },
  {
    titel: "Pac-Man (2024)",
    beschrijving: "Een recreatie van de klassieke Pac-Man game. Gemaakt met Python en Pygame.",
  },
  {
    titel: "Webapp feest van Don Bosco 2de graad (2024 - 2025)",
    beschrijving: "Klasproject: webapplicatie ontwikkeld voor het feest van Don Bosco 2de graad. De webapp bestond uit 3 delen. Het doel was om de leerkrachten punten te laten geven aan leerlingen die een spel wonnen (Leerkrachten app deel). De leerlingen konden hun punten dan zien op een scorebord en inwisselen voor eten & drinken (leerlingen app deel). Dit deden ze bij de bar waar leerkrachten stonden(bar app). Spijtig genoeg hebben we de deadline niet gehaald, wegens enkele problemen. Gemaakt met React.js, CSS en Node.js.",
  },
  {
    titel: "IoT LED-project (2025)",
    beschrijving: "Een Raspberry Pi verbonden met een HiveMQ MQTT cloud server om een LED van overal ter wereld aan/uit te zetten via een MQTT app. Gemaakt met Python, Raspberry Pi en de HiveMQ MQTT cloud server. Opdracht van meneer Brutsaert.",
  },
  {
    titel: "Website EduStrike opendeurdag (2025)",
    beschrijving: "De algemene site die gebruikt werd om het spel te introduceren op de opendeurdag. Geeft een overzicht van de game, de game mechanics en storytelling. Gemaakt met React.js en CSS.",
  },
  {
    titel: "EduStrike Three.js Prototype (2025)",
    beschrijving: "Een experimentele 3D-versie van de EduStrike-website met Three.js. Idee was om een kamer na te maken waar mensen konden op rond klikken om de game te leren kennen. Gemaakt met React.js, React-Three-Fiber en CSS. Ik heb dit project jammer genoeg stopgezet wegens tijdgebrek. Mijn inspiratie kun je vinden als voorbeeld via de link.",
  },
  {
    titel: "EduStrike technisch portfolio (2025)",
    beschrijving: 'De site waarin je je nu bevindt — dient als walkthrough en technische documentatie voor de game. Gemaakt met React.js, framer-motion en CSS.',
    link: <a href="https://www.joanramosrefusta.com" target="_blank" rel="noopener noreferrer">Inspiratie Three.js prototype</a>,
  },
  {
    titel: "Russian Roulette (2025)",
    beschrijving: "Een donker-humoristische game met animaties en sound effects en systeembestanden (sys32) die “verwijderd” worden bij verlies. Gemaakt met Python en Pygame.",
  },
  {
    titel: "PC Builder Website Concept (2025 en verder?)",
    beschrijving: "Een persoonlijke site gericht op het bouwen van gaming-PC’s, inclusief tools zoals een 'Build My Rig', FPS calculator en Price Tracker & Deal Notifier. In opstartfase. Zal gemaakt worden met Next.js, Redux, TailwindCSS, Recharts, Supabase Auth, Node.js + Express, PostgreSQL (via Supabase), Cheerio, Pusher en Stripe.",
  },
];

const Projecten = () => {
  return (
    <div className="projecten-page">
      <h2>Voorbije Projecten</h2>
      <p>
        Hier vind je een overzicht van mijn voorbije projecten, variërend van kleine games tot grotere webapplicaties. Elk project heeft zijn eigen unieke uitdagingen en leermomenten.
      </p>
      <AnimatedSection>
      <div className="projecten-lijst">
        {projecten.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.titel}</h3>
            <p>{project.beschrijving}</p>
            <p>{project.link}</p>
          </div>
        ))}
      </div>
      </AnimatedSection>
    </div>
  );
};

export default Projecten;
