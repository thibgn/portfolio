import { Colors } from '../styles/ThemeConfig';
import styled from 'styled-components';
import CvSection from '../components/CvSection';
import useDarkMode from 'use-dark-mode';

export default function Curriculum() {
  const theme = useDarkMode().value === true ? 'dark' : 'light';

  return (
    <Resume>
      <CvSection theme={theme}>
        <div className='category'>Core Kit</div>
        <div className='desc'>
          <p>Front end</p>
          <p>Back end</p>
          <p>Design</p>
          <p>Acquisition</p>
        </div>
      </CvSection>
      <CvSection theme={theme}>
        <div className='category'>
          <span>Soft skills</span>
        </div>
        <div className='desc'>
          <p>Creativity</p>
          <p>Problem solving</p>
          <p>Loyalty</p>
        </div>
      </CvSection>
      <CvSection theme={theme}>
        <h2 className='title'>EXPERIENCES 💻</h2>
      </CvSection>
      <CvSection theme={theme}>
        <div className='category'>2018 - 2019</div>
        <div className='desc'>
          <span>
            Product Owner{' '}
            <a
              className='underlined underlined--offset'
              href='https://www.onepark.fr'
            >
              @Onepark
            </a>
          </span>
        </div>
      </CvSection>
      <CvSection theme={theme}>
        <div className='category'>2014 - 2018</div>
        <div className='desc'>
          <span>
            Digital Marketing{' '}
            <a
              className='underlined underlined--offset'
              href='https://www.onepark.fr'
            >
              @Onepark
            </a>
          </span>
        </div>
      </CvSection>
      <CvSection theme={theme}>
        <h2 className='title'>EDUCATION 🎓</h2>
      </CvSection>
      <CvSection theme={theme}>
        <div className='category'>2020</div>
        <div className='desc'>
          <span>
            <a
              className='underlined underlined--offset'
              href='https://www.lewagon.com/marseille'
            >
              Le Wagon
            </a>
            &nbsp;coding bootcamp
          </span>
        </div>
      </CvSection>
      <CvSection theme={theme}>
        <div className='category'>2011 - 2013</div>
        <div className='desc'>
          <span>Master in Digital Communications</span>
        </div>
      </CvSection>
      <CvSection theme={theme}>
        <div className='category'>2008 - 2011</div>
        <div className='desc'>
          <span>Licence in Computer Networking</span>
        </div>
      </CvSection>
      <CvSection theme={theme}>
        <h2 className='title'>HOBBIES 🎨</h2>
      </CvSection>
      <CvSection>
        <Hobbies theme={theme}>
          <p>
            Crypto, Basketball, Climbing, Outdoors, Chess, Yoga, Meditation,
            Ski, Drawing
          </p>
        </Hobbies>
      </CvSection>
    </Resume>
  );
}

const Resume = styled.div`
  margin: 40px 0;
  padding-top: 40px;
  margin-bottom: 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: rgb(255, 51, 102);
    background: linear-gradient(
      180deg,
      rgba(255, 51, 102, 1) 0%,
      rgba(32, 164, 243, 1) 35%,
      rgba(46, 196, 182, 1) 100%
    );
    height: 100%;
    width: 4px;
    margin-left: -2px;
    left: 50%;
    top: 0;
    z-index: 1;
  }
`;

const Hobbies = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: center;
  padding: 10px 20px;
  width: 50%;
  line-height: 1.5rem;
  border: 2px solid
    ${(props) => (props.theme === 'dark' ? Colors.light : Colors.dark)};
  border-radius: 80px;
  background: ${(props) =>
    props.theme === 'dark' ? Colors.dark : Colors.light};
  z-index: 10;

  @media screen and (max-width: 425px) {
    font-size: 0.7rem;
    line-height: 1rem;
  }
`;
