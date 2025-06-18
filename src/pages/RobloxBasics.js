import React from 'react';
import '../styles/RobloxBasics.css';
import AnimatedSection from '../components/AnimatedSection';

const onderdelen = [
  {
    titel: "Script",
    uitleg:
      "Een normaal Script draait op de server en voert logica uit die voor alle spelers geldt, zoals teamverdeling of het starten van een ronde.",
  },
  {
    titel: "LocalScript",
    uitleg:
      "Een script dat enkel draait op de computer van een specifieke speler. Wordt gebruikt voor user interface, camera-instellingen en input van toetsenbord of muis.",
  },
  {
    titel: "ModuleScript",
    uitleg:
      "Een script dat functies bevat die herbruikbaar zijn in andere scripts. Helpt bij het organiseren van code en voorkomt herhaling.",
  },
  {
    titel: "ScreenGui",
    uitleg:
      "Een container voor alle GUI-elementen (user interface), zoals knoppen en tekst. Wordt toegevoegd aan de PlayerGui van een speler.",
  },
  {
    titel: "Frame",
    uitleg:
      "Een rechthoekig element binnen een ScreenGui dat als container dient voor andere elementen. Denk aan een venster of menu-box.",
  },
  {
    titel: "TextLabel",
    uitleg:
      "Een GUI-element dat tekst toont aan de speler. Wordt gebruikt voor titels, meldingen, of instructies op het scherm.",
  },
  {
    titel: "TextButton",
    uitleg:
      "Lijkt op een TextLabel, maar is klikbaar. Wordt gebruikt voor menu’s en knoppen waarmee de speler acties kan uitvoeren.",
  },
  {
    titel: "Model",
    uitleg:
      "Een verzameling van onderdelen (zoals Parts of Meshes) die samen een object vormen, zoals een gebouw, personage of wapen.",
  },
];

const RobloxBasics = () => {
  return (
    <div className="roblox-basics-page">
      <h2>Basisbegrippen in Roblox Studio</h2>
      <p className="intro-text">
        Hieronder vind je een overzicht van de belangrijkste elementen die je tegenkomt tijdens het werken in Roblox Studio. Dit is een goede start om de basis van Roblox Studio te begrijpen.
      </p>
      <div className="basic-list">
        {onderdelen.map((item, index) => (
          <AnimatedSection key={index}>
            <div className="basic-card">
              <h3>{item.titel}</h3>
              <p>{item.uitleg}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default RobloxBasics;
