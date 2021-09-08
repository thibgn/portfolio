import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Colors } from '../styles/ThemeConfig';

export default function Drumbox() {
  const theme = useDarkMode().value === true ? 'dark' : 'light';

  if (typeof window !== 'undefined') {
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

  return (
    <Drums theme={theme}>
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
  );
}

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
    margin: 16px 16px;
    border: 1px solid grey;
    height: 100px;
    width: 100px;
    display: flex;
    flex-direction: column;
    color: ${(props) => (props.theme == 'dark' ? Colors.light : Colors.dark)};
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    transition: transform 0.05s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .sound {
    margin-top: 1em;
    color: ${(props) =>
      props.theme == 'dark' ? Colors.primary : Colors.accent};
    font-size: 0.7em;
  }

  .playing {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px 4px
      ${(props) => (props.theme == 'dark' ? Colors.primary : Colors.accent)};
  }
`;
