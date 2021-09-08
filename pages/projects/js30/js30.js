import { useState } from 'react';
import styled from 'styled-components';

export default function Js30() {
  const [demo, setDemo] = useState('drumbox');
  const [loading, setLoading] = useState(false);
  const drumbox = demo == 'drumbox';
  const dessin = demo == 'dessin';
  const video = demo == 'video';
  const konami = demo == 'konami';

  const handleChange = (e) => {
    setLoading(true);
    document.querySelector(`#${demo}`).classList.remove('active');
    setDemo(e.target.innerHTML);
    e.target.classList.add('active');
    setLoading(false);
  };
  return (
    <>
      <Selecteur>
        <span className='active' onClick={(e) => handleChange(e)} id='drumbox'>
          drumbox
        </span>
        <span onClick={(e) => handleChange(e)} id='dessin'>
          dessin
        </span>
        <span onClick={(e) => handleChange(e)} id='video'>
          video
        </span>
        <span onClick={(e) => handleChange(e)} id='konami'>
          konami
        </span>
      </Selecteur>
      {loading && <p>loading...</p>}
      {drumbox && (
        <Drums>
          <div data-key='81' className='key'>
            <kbd>Q</kbd>
            <span className='sound'>Kick</span>
          </div>
          <div data-key='83' className='key'>
            <kbd>S</kbd>
            <span className='sound'>Snare</span>
          </div>
          <div data-key='68' className='key'>
            <kbd>D</kbd>
            <span className='sound'>Clap</span>
          </div>
          <div data-key='70' className='key'>
            <kbd>F</kbd>
            <span className='sound'>Open Hat</span>
          </div>
          <div data-key='74' className='key'>
            <kbd>J</kbd>
            <span className='sound'>Closed Hat</span>
          </div>
          <div data-key='75' className='key'>
            <kbd>K</kbd>
            <span className='sound'>Chord #1</span>
          </div>
          <div data-key='76' className='key'>
            <kbd>L</kbd>
            <span className='sound'>Chord #2</span>
          </div>
          <div data-key='77' className='key'>
            <kbd>M</kbd>
            <span className='sound'>Guitar</span>
          </div>

          <audio
            data-key='81'
            src='https://js30-black.vercel.app/1%20-%20drumkit/assets/KICK BOOM.wav'
          ></audio>
          <audio
            data-key='83'
            src='https://js30-black.vercel.app/1%20-%20drumkit/assets/SNARE BREAK LL.wav'
          ></audio>
          <audio
            data-key='68'
            src='https://js30-black.vercel.app/1%20-%20drumkit/assets/CLAP KEYS.wav'
          ></audio>
          <audio
            data-key='70'
            src='https://js30-black.vercel.app/1%20-%20drumkit/assets/OPEN HAT ISLAND.wav'
          ></audio>
          <audio
            data-key='74'
            src='https://js30-black.vercel.app/1%20-%20drumkit/assets/HAT ISLAND 1.wav'
          ></audio>
          <audio
            data-key='75'
            src='https://js30-black.vercel.app/1%20-%20drumkit/assets/ANIME CHOP 44.wav'
          ></audio>
          <audio
            data-key='76'
            src='https://js30-black.vercel.app/1%20-%20drumkit/assets/ANIME CHOP 43.wav'
          ></audio>
          <audio
            data-key='77'
            src='https://js30-black.vercel.app/1%20-%20drumkit/assets/Sufjan Stevens - Futile Devices 1.wav'
          ></audio>
        </Drums>
      )}
      {dessin && (
        <Draw className={dessin ? 'visible' : 'hidden'}>
          <canvas id='draw'></canvas>
          <div className='toolbar'>
            <div className='gradient'></div>
            <input type='color' className='colorpicker active' />
            <div className='brushInc'>➕</div>
            <div className='brushDes'>➖</div>
            <div className='blend'>🎇</div>
            <div className='clear'>❌</div>
          </div>
        </Draw>
      )}
      {video && <p>video is on</p>}
      {konami && <p>konami is on</p>}
    </>
  );
}

const Selecteur = styled.div`
  margin: 60px 0;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .active {
    background: linear-gradient(
      90deg,
      rgba(255, 51, 102, 1) 0%,
      rgba(32, 164, 243, 1) 35%,
      rgba(46, 196, 182, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2em;
  }
`;

const Drums = styled.div`
  margin: 40px auto;
  display: flex;
  align-items: start;
  justify-content: center;
  overflow: hidden;
  user-select: none;
  flex-wrap: wrap;

  .sound {
    z-index: -1;
  }

  .key {
    display: block;
    cursor: pointer;
    margin: 8px 8px;
    border: 1px solid grey;
    height: 75px;
    width: 75px;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    transition: transform 0.05s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .sound {
    margin-top: 1em;
    color: #34ff34;
    font-size: 0.7em;
  }

  .playing {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 4px #34ff34;
  }
`;

if (typeof window !== 'undefined') {
  // DRUMBOX
  window.addEventListener('keydown', (e) => {
    const keys = document.querySelectorAll('.key');
    playSound(e.keyCode);
    keys.forEach((key) =>
      key.addEventListener('transitionend', removeTransition)
    );
  });
  window.addEventListener('click', (e) => {
    const keys = document.querySelectorAll('.key');
    playSound(e.path[0].dataset.key);
    keys.forEach((key) =>
      key.addEventListener('transitionend', removeTransition)
    );
  });
}

function playSound(k) {
  const key = document.querySelector(`.key[data-key="${k}"]`);
  const audio = document.querySelector(`audio[data-key="${k}"]`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
