import { Colors } from '../styles/ThemeConfig';
import styled from 'styled-components';
import CvSection from '../components/CvSection';
import useDarkMode from 'use-dark-mode';
import { content } from '../content/index';
import TagList from './TagList';

const tools = [
  { name: 'HTML', color: 'primary' },
  { name: 'CSS', color: 'accent' },
  { name: 'JS', color: 'yellow' },
  { name: 'React', color: 'blue' },
  { name: 'Python', color: 'green' },
  { name: 'Ruby', color: 'red' },
  { name: 'Next.js', color: 'orange' },
  { name: 'NodeJS', color: 'secondary' },
  { name: 'Tailwind', color: 'purple' },
  { name: 'SCSS', color: 'gray' },
  { name: 'git', color: 'darkgreen' },
  { name: 'styled-components', color: 'pink' },
  { name: 'SQL', color: 'primary' },
  { name: 'NoSQL', color: 'darkorange' },
  { name: 'Figma', color: 'lightgray' },
  { name: 'Google Analytics', color: 'orange' },
  { name: 'Photoshop', color: 'accent' },
];

export default function Curriculum() {
  const locale = 'fr';
  const translated = locale == 'fr' ? content.fr : content.en;
  const theme = useDarkMode().value === true ? 'dark' : 'light';

  return (
    <Resume>
      <CvSection theme={theme} id='toolbox'>
        <div className='category'>Boîte à outils</div>
        <div className='desc'>
          <TagList tags={tools} />
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
          <div className='xp_details'>
            Design de nouvelles features, rédaction d’user stories, refonte des
            emails transactionnels
          </div>
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
          <div className='xp_details'>
            Création & déploiement des stratégies SEO & CRM dans 8 pays,
            scénarios automatisés, implémentation d&apos;un RCU et d&apos;un
            NPS, suivi de KPIs, service client, community management
          </div>
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
          <p>{translated.hobbies}</p>
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

  #toolbox {
    @media screen and (max-width: 425px) {
      display: none;
    }
  }

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

  .xp_details {
    opacity: 0.8;
    font-size: 0.85rem;
    margin-top: 8px;
    @media screen and (max-width: 425px) {
      display: none;
    }
  }

  .category {
    font-size: 1.2rem;
    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
      line-height: 1rem;
    }
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
