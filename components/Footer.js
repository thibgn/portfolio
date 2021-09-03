import styled from 'styled-components';

const Footer = styled.div`
  margin-top: 80px;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;

  & > * > span {
    color: red;
  }

  @media screen and (max-width: 425px) {
    font-size: 0.75rem;

    div {
      width: 40%;
    }
  }
`;

export default Footer;
