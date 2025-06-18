import React from 'react';
import '../styles/Overzicht.css';
import AnimatedSection from '../components/AnimatedSection';

const tijdlijn = [
  {
    maand: "September",
    activiteit: "Brainstorm en conceptontwikkeling — basisideeën rond gameplay, setting (leerkrachten, school) en storyline worden gevormd.",
  },
  {
    maand: "Oktober",
    activiteit: "Wissel van Unreal Engine naar Roblox Studio. Start met leren van Lua (Roblox scriptingtaal) + verkennen van Roblox Studio. Experimenteren met modellen, UI en de omgevingstools.",
  },
  {
    maand: "November",
    activiteit: "Testprojecten opzetten: experimenteren met LocalScripts, GUIs, basic movement en interactions. Eerste pogingen tot 'shooting' mechanics.",
  },
  {
    maand: "December",
    activiteit: "UI-ontwerp in detail uitgewerkt (teamselectie, characterselectie, gunselectie). Eerste sketches voor map en teams uitgebouwd.",
  },
  {
    maand: "Januari",
    activiteit: "Begin scriptontwikkeling: TeamManager, RoundManager en CharacterSelector worden opgezet. Werking van de game in rondes wordt getest.",
  },
  {
    maand: "Februari",
    activiteit: "GunSelector + GunManager toegevoegd. Eerste tests met wapens. Start van BlasterController ontwikkeling (recoil, reload, firing).",
  },
  {
    maand: "Maart",
    activiteit: " VirusSystem wordt uitgebreid met defuse/upload timing en wincondities. Bouwen van algemene EduStrike site (opendeurdag site).",
  },
  {
    maand: "April",
    activiteit: "Polijsten van gameplay loop. Animaties, UI feedback en winrondes correct maken. Testen met meerdere spelers via Roblox Studio.",
  },
  {
    maand: "Mei",
    activiteit: "Afwerken van details, bugfixes, finetuning. TutorialScript wordt opgebouwd. Start bouwen van deze technische portfolio.",
  },
  {
    maand: "Juni",
    activiteit: "Finale afwerking, testen, presentatie voorbereiden. Alle scripts gedocumenteerd, portfolio afgerond en alles klaar voor demo.",
  },
];

const Overzicht = () => {
  return (
    <div className="overzicht-page">
      <h2>Projectoverzicht: van concept tot presentatie</h2>
      <p className="intro-text">
        Hieronder zie je een maandelijkse tijdlijn van het EduStrike-project. Elk blok toont wat er die maand werd bereikt of uitgewerkt.
      </p>
      <div className="tijdlijn">
        {tijdlijn.map((item, index) => (
          <AnimatedSection key={index}>
            <div className="tijdlijn-item">
              <div className="maand">{item.maand}</div>
              <div className="activiteit">{item.activiteit}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Overzicht;
