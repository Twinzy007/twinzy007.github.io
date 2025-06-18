import React from 'react';
import '../styles/GameMechanics.css';
import AnimatedSection from '../components/AnimatedSection';

const mechanics = [
  {
    titel: "VirusSystem",
    beschrijving:
      "Beheert het core gameplay-systeem: uploaden (attackers) en defusen (defenders) van een 'virus' op één van de laptops. Vergelijkbaar met het klassieke 'Search & Destroy' uit andere shooters.",
  },
  {
    titel: "CharacterManager",
    beschrijving:
      "Stelt spelers in staat om bij het begin van het spel een personage (leerkracht) te kiezen. Het script koppelt deze keuze aan het juiste model (uiterlijk).",
  },
  {
    titel: "RoundManager & RoundTimerUI",
    beschrijving:
      "Verantwoordelijk voor het opsplitsen van de game in rondes van 3 minuten. De UI toont een countdown en start/pauze tussenrondes. Zorgt voor winst/verliescondities, houdt bij wie er wint en wanneer het spel stopt na 1 team 5 rondes wint.",
  },
  {
    titel: "TeamManager",
    beschrijving:
      "Zorgt ervoor dat spelers worden toegewezen aan de juiste teams (max. 4 vs 4). Wordt aangeroepen als eerste bij het begin van een nieuwe game.",
  },
  {
    titel: "GunSelector & GunManager",
    beschrijving:
      "GunSelector toont een selectie-UI aan het begin van elke ronde. GunManager geeft de correcte gun aan de speler op basis van hun keuze, inclusief skin (model) en eigenschappen.",
  },
  {
    titel: "TutorialScript",
    beschrijving:
      "Stuurt de speler door een interactieve tutorial. Controleert voortgang en activeert uitleg-stappen op basis van uitgevoerde acties.",
  },
  {
    titel: "BlasterController",
    beschrijving:
      "De kern van het wapen-systeem. Regelt hoe schieten werkt, inclusief terugslag (recoil), herladen, animaties en geluid. Werkt met verschillende types wapens.",
  },
];

const GameMechanics = () => {
  return (
    <div className="mechanics-page">
      <h2>Game Mechanics</h2>
      <p>
        Hier vind je een overzicht van de belangrijkste game mechanics die zijn geïmplementeerd in EduStrike. Deze scripts vormen de kern van de gameplay en zorgen voor een dynamische en interactieve spelervaring. Let op: dit zijn niet alle scripts.
      </p>
      <div className="mechanics-list">
        {mechanics.map((item, index) => (
          <AnimatedSection key={index}>
            <div className="mechanic-card">
              <h3>{item.titel}</h3>
              <p>{item.beschrijving}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default GameMechanics;
