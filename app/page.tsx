"use client"
import Infos from './components/Info'
import Cours from './components/Cours'
import Newsletter from './components/Newsletter'
import './index.css';

const App = () => {
  return (
    <section id="content">
      <Infos/>
      <Cours />
      <Newsletter />
    </section>
  );
};

export default App;