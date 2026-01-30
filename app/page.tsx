"use client"
import Infos from './components/Info'
import Cours from './components/Cours'
import Newsletter from './components/Newsletter'
import './index.css';

const App = () => {
  return (
    <section id="content">
      <img src="./logo.png" alt="Logo de 2ie" />
      <h1 id="title">Fiche Etudiant</h1>
      <Infos/>
      <h1>Cours</h1>
      <Cours />
      <Newsletter />
    </section>
  );
};

export default App;