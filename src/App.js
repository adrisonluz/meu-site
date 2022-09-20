import React from 'react';

import './App.css';
import Menu from './components/layout/menu'

import banner from './assets/img/banner.jpg'
import foto from './assets/img/foto.jpg'

function App() {  
  return (
    <div className="App">
      <Menu />
      
      <main>
        <section id="banner" className="bggray">
          <img src={banner} />
        </section>

        <section id="sobre" className="bgwhite">
          <div className='bloco-titulo'>
            <h1>Adrison Luz</h1>
            <p>por Adrison Luz</p>
          </div>

          <div className='bloco-conteudo'>
            <div className='w50'>
              <img src={foto} />
            </div>

            <div className='w50 wright'>
              <div className='subbloco-titulo'>
                <h2>Sobre mim</h2>
                <p>Se auto descrever é sempre difícil, mas vamos lá!</p>
              </div>

              <div className='subbloco-conteudo'>
                <p>Quando um profissional é muito bom no que faz, nós chamamos ele de "especialista". Visualmente falando, seria como a letra "I", pois possui um profundo conhecimeto dentro de sua área.</p>
                <p>Eu sou um pouco diferente, além de possuir um profundo conhecimento dentro de minha área, possuo um amplo conhecimento em diversas outras áreas e tecnologias dentro do universo da TI.</p>
                <p>Eu sou o que chamamos de "Profissional T-Shaped", ou seja, especialista (sentido vertical) e generalista (sentido horizontal), formando assim a figura de um "T" ao invés de um "I".</p>
                <p>Minha área de atuação é a de produtos, atuando principalmente como P.O - Product Owner e/ou Scrum Master, mas possuo um passado muito importante como desenvolvedor web fullstack que me permite entender e me comunicar melhor com a equipe de desenvolvimento, visto que eu já senti na pele as suas dores.</p>
                <p>Sou o tipo de pessoa que "defende os seus", coloco os interesses dos meus clientes e da minha equipe sempre à frente. Prezo muito para que eles estejam sempre felizes e procuro criar um relacionamento de confiança mútua.</p>
              </div>
            </div>
          </div>

          <div className='clearfix'></div>
        </section>

        <section id="empatia" className="bggray">
          Empatia
        </section>

        <section id="habilidades" className="bgwhite">
          Habilidades
        </section>

        <section id="experiencia" className="bggray">
          Experiência Profissional
        </section>

        <section id="contato" className="bgwhite">
          Contato
        </section>
      </main>

      <footer>
        <p>2022 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
