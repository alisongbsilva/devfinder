import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

// JSX (Javascript + XML)

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade)

function App() {
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28989649?s=460&u=b4126deb2c368583a4e485dd1e12b1647bcaf4d6&v=4" alt="Alison Silva" />
              <div className="user-info">
                <strong>Alison Silva</strong>
                <span>ReactJS, React Native, Node.js, PHP</span>
              </div>
            </header>
            <p> Graduando em Sistemas de Informação no Centro Universitário Projeção, com conhecimentos em em desenvolvimento web, PHP, MySQL e Java com experiência em trabalho em equipe e uso de Git para versionamento de software. Interesse em desenvolvimento de software e páginas para web e mobile em geral. </p>
            <a href="https://github.com/alisongbsilva">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28989649?s=460&u=b4126deb2c368583a4e485dd1e12b1647bcaf4d6&v=4" alt="Alison Silva" />
              <div className="user-info">
                <strong>Alison Silva</strong>
                <span>ReactJS, React Native, Node.js, PHP</span>
              </div>
            </header>
            <p> Graduando em Sistemas de Informação no Centro Universitário Projeção, com conhecimentos em em desenvolvimento web, PHP, MySQL e Java com experiência em trabalho em equipe e uso de Git para versionamento de software. Interesse em desenvolvimento de software e páginas para web e mobile em geral. </p>
            <a href="https://github.com/alisongbsilva">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28989649?s=460&u=b4126deb2c368583a4e485dd1e12b1647bcaf4d6&v=4" alt="Alison Silva" />
              <div className="user-info">
                <strong>Alison Silva</strong>
                <span>ReactJS, React Native, Node.js, PHP</span>
              </div>
            </header>
            <p> Graduando em Sistemas de Informação no Centro Universitário Projeção, com conhecimentos em em desenvolvimento web, PHP, MySQL e Java com experiência em trabalho em equipe e uso de Git para versionamento de software. Interesse em desenvolvimento de software e páginas para web e mobile em geral. </p>
            <a href="https://github.com/alisongbsilva">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28989649?s=460&u=b4126deb2c368583a4e485dd1e12b1647bcaf4d6&v=4" alt="Alison Silva" />
              <div className="user-info">
                <strong>Alison Silva</strong>
                <span>ReactJS, React Native, Node.js, PHP</span>
              </div>
            </header>
            <p> Graduando em Sistemas de Informação no Centro Universitário Projeção, com conhecimentos em em desenvolvimento web, PHP, MySQL e Java com experiência em trabalho em equipe e uso de Git para versionamento de software. Interesse em desenvolvimento de software e páginas para web e mobile em geral. </p>
            <a href="https://github.com/alisongbsilva">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/28989649?s=460&u=b4126deb2c368583a4e485dd1e12b1647bcaf4d6&v=4" alt="Alison Silva" />
              <div className="user-info">
                <strong>Alison Silva</strong>
                <span>ReactJS, React Native, Node.js, PHP</span>
              </div>
            </header>
            <p> Graduando em Sistemas de Informação no Centro Universitário Projeção, com conhecimentos em em desenvolvimento web, PHP, MySQL e Java com experiência em trabalho em equipe e uso de Git para versionamento de software. Interesse em desenvolvimento de software e páginas para web e mobile em geral. </p>
            <a href="https://github.com/alisongbsilva">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );

}

export default App;
