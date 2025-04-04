import styled from 'styled-components';

const AppWrapperStyled = styled.div`
  background-image: url('bg.svg');
  background-position: right 0;
  background-repeat: no-repeat;
  background-size: min(50%, 550px) auto;
  width: 100vw;
  height: 100vh;
`;

const AppWrapper = ({ children }) => {
  return <AppWrapperStyled>{children}</AppWrapperStyled>;
};

export default AppWrapper;

AppWrapperStyled.displayName = 'AppWrapperStyled';
