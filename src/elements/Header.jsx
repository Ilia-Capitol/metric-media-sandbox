// styled components
import {
  HeaderContainer,
  HeaderInnerWrapper,
  HeaderContent,
  Logo,
  SearchInput
} from './styled';

// zustand
import useStore from '../store';

// assets
import logo from './logo.svg';

const Header = () => {
  const searchResults = useStore((state) => state.searchResults);
  return (
    <HeaderContainer>
      <HeaderInnerWrapper $hasResults={!!searchResults}>
        <HeaderContent>
          <Logo src={logo} alt='Logo' />
          {!!searchResults && (
            <SearchInput type='text' placeholder='Ask a question' />
          )}
        </HeaderContent>
      </HeaderInnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
