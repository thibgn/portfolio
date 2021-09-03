import { Colors, Fonts } from '../styles/ThemeConfig';
import styled from 'styled-components';

const CvSection = styled.div`
  margin: 80px 0;
  display: flex;
  align-items: center;
  position: relative;

  & > .title {
    margin: 0 auto;
    margin-top: 60px;
    padding-bottom: 10px;
    background: ${(props) =>
      props.theme === 'dark' ? Colors.dark : Colors.light};
    transition: all 0.5s linear;
    z-index: 10;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: ${Fonts.titles};
    @media screen and (max-width: 425px) {
      font-size: 1.2em;
    }
  }
  }

  & > .category {
    width: 50%;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: right;
    padding-right: 40px;
    @media screen and (max-width: 425px) {
      font-size: 1.1em;
    }
  }

  & > .desc {
    width: 50%;
    font-size: 1.05rem;
    padding-left: 40px;

    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
    }

    & > p {
      line-height: 0.6rem;
      @media screen and (max-width: 425px) {
        line-height: 1.05rem;
      }
    }

    &:before {
      content: '';
      position: absolute;
      background: ${(props) =>
        props.theme === 'dark' ? Colors.light : Colors.dark};
      padding: 10px;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      margin-top: -14px;
      margin-left: -14px;
      border: 4px solid
        ${(props) => (props.theme === 'dark' ? Colors.dark : Colors.light)};
      z-index: 10;
      transition: all 0.5s linear;
    }
  }
`;

export default CvSection;
