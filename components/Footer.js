import styled from 'styled-components';

const Footer = styled.div`
  margin-top: 80px;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;

  & > * > span {
    color: red;
  }
`;

export default Footer;