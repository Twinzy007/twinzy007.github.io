import React from 'react';
import '../styles/Home.css';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <div className="home-page">
      <AnimatedSection>
        <section className="intro">
          <h2>Welkom op de EduStrike Technische Portfolio</h2>
          <p>
            Deze website dient als technische walkthrough van het EduStrike-project, een
            tactische team-based game ontwikkeld in Roblox Studio. Hier vind je een overzicht van het ontwikkelproces, de game mechanics, basisuitleg Roblox Studio en eerdere projecten.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="game-overview">
          <h2>Wat is EduStrike?</h2>
          <p>
            EduStrike is een team-based first-person shooter waarin je speelt als verschillende leerkrachten op onze school. Twee rivaliserende kampen – de Traditionalisten en de Hervormers – strijden om controle over de school.
          </p>
          <p>
            De game is ontwikkeld in Roblox Studio met het oog op game mechanics, game design en een vleugje storytelling.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="game-structure">
          <h2>Hoe werkt het spel?</h2>
          <ul>
            <li><strong>Spelers worden verdeeld in 2 teams:</strong> Traditionalisten, zij verdedigen hun controle over de school, terwijl de Hervormers controle over de school proberen te krijgen.</li>
            <li><strong>Leerkrachten als speelbare personages:</strong>Kies uit meneer Vandesompele, Noordanus, Brutsaert en Hertens.</li>
            <li><strong>Objective-Based Gameplay:</strong>Doe mee aan strategische rondes waarin teams doelen moeten voltooien, zoals het uploaden (aanvallers) of onschadelijk maken (verdedigers) van een virus op de laptop op een van de twee objectives op de map. Je kunt ook winnen door het hele vijandelijke team uit te schakelen.</li>
            <li><strong>Paintball Combat:</strong> Kies uit een arsenaal van laser wapens, van krachtige snipers tot snelvurende blasters.</li>
            <li><strong>School map:</strong>Vecht door een recreatie van delen van Don Bosco SDW en gebruik gangen, klaslokalen en open ruimtes in je voordeel.</li>
            <li><strong>Multiplayer focus:</strong>Online spelen met teamcoördinatie via tekstchat of voicechat voor communicatie.</li>
          </ul>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;