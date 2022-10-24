import React from 'react';

import './App.css';
import Menu from './components/layout/menu'

import banner from './assets/img/banner.jpg'
import foto from './assets/img/foto.jpg'
import retrato from './assets/img/retrato.png'

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
          <div className='bloco-titulo'>
            <h2>Mapa de empatia</h2>
            <p>Gostaria de utilizar deste recurso onde desenhamos o perfil de uma persona, cliente ou público-alvo para tentar explicar um pouco a minha personalidade, sentimentos e meneira de pensar.</p>
          </div>

          <div className='bloco-conteudo'>
            <div id="container-empatia">
              <div className='bloco-empatia'>
                <h3>o que eu <span>Penso e Sinto</span></h3>
                <p>Preciso aperfeiçoar minhas habilidades profissionais, principalmente o inglês.</p>
                <p>Penso, observo, analiso e sinto o mundo e pessoas ao meu redor.</p>
                <p>Pessoas antes de qualquer coisa, incluindo colegas, liderados, clientes e usuários.</p>
                <p>Curto e incentivo a lideraça horizontal onde o pensamento e decisões coletivas devem ser icentivados.</p>
              </div>

              <div className='bloco-empatia tright'>
                <h3>o que eu <span>Vejo</span></h3>
                <p>Família, mais caseiro.</p>
                <p>Músico, o violão está sempre ao alcance da mão.</p>
                <p>Pets, sempre há um gato ou cachorro próximo.</p>
                <p>Olho videos de humor, games, tecnologia e música.</p>
                <p>Profissionalmente: videos de Scrum e agilidade em geral.</p>
              </div>

              <div className='bloco-empatia'>
                <h3>o que eu <span>Escuto</span></h3>
                  <p>Minha esposa é a principal influência em minhas decisões.</p>
                  <p>Liderança religiosa e profissional.</p>
                  <p>Busco conhecimento principalmente no Youtube e Google.</p>
                  <p>Pessoas em geral, acredito que todo mundo tem algo à ensinar.</p>
                  <p>Busco crescimento espiritual em ceminários, palestras e sermões.</p>
              </div>
              
              <div className='bloco-empatia tright'>
                <h3>o que eu <span>Falo e Faço</span></h3>
                  <p>Estou sempre de bom humor.</p>
                  <p>Organizado, criativo, resiliente e adaptavel.</p>
                  <p>Me divirto com música, games, filmes e séries.</p>
                  <p>Sou autodidata, muita facilidade em aprender e estou sempre atrás de coisas novas.</p>
                  <p>Gosto de arriscar e improvisar.</p>
                  <p>Busco ajudar à quem precisa, sempre envolvido em projetos sociais na comunidade.</p>
              </div>

              <div className='bloco-empatia'>
                <h3>quais são minhas <span>Dores</span></h3>
                  <p>Nem sempre tenho espaço para criar e colocar ideias em prática.</p>
                  <p>Falta recursos e tempo para fazer tudo o que eu gostaria de fazer.</p>
              </div>
              
              <div className='bloco-empatia tright'>
                <h3>quais são meus <span>Objetivos</span></h3>
                  <p>Quero deixar um legado, ajudar pessoas, não ser "só mais um na multidão".</p>
                  <p>Quero trabalhar por amor, não depender do trabalho para sobreviver.</p>
                  <p>Conhecer outros países e outras culturas.</p>
              </div>

              <div className='empatia-destaque'>
                <img src={retrato} title='' alt='' />
              </div>

              <div className='clearfix'></div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="bgwhite">
          Habilidades
          <div className='bloco-titulo'></div>
          <div className='bloco-conteudo'></div>
        </section>

        <section id="experiencia" className="bggray">
          Experiência Profissional
          <div className='bloco-titulo'></div>
          <div className='bloco-conteudo'></div>
        </section>

        <section id="contato" className="bgwhite">
          Contato
          <div className='bloco-titulo'></div>
          <div className='bloco-conteudo'></div>
        </section>
      </main>

      <footer>
        <p>2022 - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
