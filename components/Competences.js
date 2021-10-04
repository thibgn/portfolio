import styled from 'styled-components';
import useDarkMode from 'use-dark-mode';
import { Colors } from '../styles/ThemeConfig';

export default function Competences() {
  const theme = useDarkMode().value === true ? 'dark' : 'light';

  const skills = [
    'Création de site',
    'Marketing digital',
    'Design',
    'Création de contenus',
    'Création de NFT',
  ];

  const learnings = [
    'Web apps complexes',
    'React Native',
    'Blockchain',
    'Test Driven Dvpt',
  ];

  return (
    <SkillsWrapper theme={theme}>
      <div className='comp_section'>
        <h3>Je sais faire 👍</h3>
        {skills.map((comp, i) => (
          <span className='skill' key='i'>
            {comp}
          </span>
        ))}
      </div>
      <div className='comp_section'>
        <h3>J&apos;apprend 🧐</h3>
        {learnings.map((topic, i) => (
          <span className='skill' key='i'>
            {topic}
          </span>
        ))}
      </div>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  :padding-bottom: 40px;

  h3 {
    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
  }

  .skill {
    opacity: 0.8;
    transition: all 0.25s;
    font-size: 0.9rem;
    cursor: default;
    margin: 2px;
    border-radius: 8px;
    display: inline-block;
    padding: 6px;
    background: ${(props) =>
      props.theme == 'light' ? Colors.dark : Colors.light};
    color: ${(props) => (props.theme == 'light' ? Colors.light : Colors.dark)};

    &:hover {
      opacity: 1;
    }
  }

  .comp_section {
    padding: 24px;
    text-align: center;
    width: 50%;
    position: relative;
    @media screen and (max-width: 550px) {
      width: 80%;
      margin: 0 auto;
    }
  }

  .comp_section:nth-child(1):after {
    content: '';
    position: absolute;
    top: 30%;
    right: 0px;
    width: 2px;
    height: 50%;
    background: ${(props) =>
      props.theme == 'light' ? Colors.dark : Colors.light};
    opacity: 0.6;
    transition: all 0.25s;

    @media screen and (max-width: 550px) {
      opacity: 0;
    }
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
