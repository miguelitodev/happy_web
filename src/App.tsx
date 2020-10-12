import React from 'react';

import './styles/GlobalStyles.css';
import './styles/pages/landing.css';

import logoImg from './images/Logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>
            Visite orfanatos e mude o dia de muitas crianças
          </p>
        </main>
        <div className="location">
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>
      </div>
    </div>
  );
}

export default App;
