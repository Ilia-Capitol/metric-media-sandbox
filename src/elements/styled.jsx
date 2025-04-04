import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 60px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ $hasResults }) => ($hasResults ? '842px' : '712px')};
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  color: #242329;
  font-size: 47px;
  font-style: normal;
  font-weight: 700;
  line-height: 55px;
  letter-spacing: -1.88px;
  text-align: center;
`;

export const ContentSubHeader = styled.div`
  color: rgba(36, 35, 41, 0.8);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  display: flex;
  padding-top: 10px;
`;

export const ContentFullSearchContainer = styled.div`
  display: flex;
  width: 720px;
  height: 192px;
  max-width: 720px;
  padding: 4px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 16px;
  background-color: #f2f2f2;
  margin-top: 36px;
`;

export const ContentFullSearchBar = styled.div`
  max-height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid rgba(36, 35, 41, 0.16);
  background-color: #fff;
  padding: 16px;
  position: relative;
`;

export const ContentSearchButtonHolder = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`;

export const ContentFullSearchBarSelectors = styled.div`
  display: flex;
  padding: 8px 8px 8px 12px;
  justify-content: flex-start;
  align-items: baseline;
  align-self: stretch;
  height: 40px;
`;

export const ContentSelectorHolder = styled.div`
  display: flex;
  height: 32px;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

export const FakeSearchBar = styled.textarea`
  width: 100%;
  height: 136px;
  font-size: 15px;
  color: rgba(36, 35, 41, 0.48);
  border: none;
  outline: none;
  resize: none;

  &:disabled {
    background-color: #fff;
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 128px;
`;

export const HeaderInnerWrapper = styled.div`
  border-bottom: ${({ $hasResults }) =>
    $hasResults ? '1px solid rgba(36, 35, 41, 0.16)' : 'none'};
  width: 100%;
  padding: 48px 0;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const Logo = styled.img`
  position: absolute;
  left: 0;
`;

export const SearchInput = styled.input`
  height: 55px;
  width: 50%;
  max-width: 600px;
  padding: 8px;
  border-radius: 12px;
  border: 2px solid rgba(36, 35, 41, 0.16);
  background-color: #fff;
  padding: 16px;

  &::placeholder {
    color: rgba(36, 35, 41, 0.48);
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  width: 842px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid rgba(36, 35, 41, 0.16);
  background-color: #fff;
  margin-top: 40px;
`;

export const SummaryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  align-items: center;
`;

export const SummaryHeaderLeftBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

export const SummaryHeaderStars = styled.div`
  display: flex;
  border-radius: 100px;
  background: #a8ce85;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

export const SummaryHeaderTitle = styled.div`
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: -0.38px;
`;

export const SummaryContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;

  & li {
    margin-left: 15px;
  }
`;

export const SummaryContentSubheader = styled.div`
  color: #242329;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
`;

ContentWrapper.displayName = 'ContentWrapper';
ContentContainer.displayName = 'ContentContainer';
ContentHeader.displayName = 'ContentHeader';
ContentHeader.displayName = 'ContentHeader';
ContentSubHeader.displayName = 'ContentSubHeader';
ContentFullSearchContainer.displayName = 'ContentFullSearchContainer';
ContentFullSearchBar.displayName = 'ContentFullSearchBar';
ContentSearchButtonHolder.displayName = 'ContentSearchButtonHolder';
ContentFullSearchBarSelectors.displayName = 'ContentFullSearchBarSelectors';
ContentSelectorHolder.displayName = 'ContentSelectorHolder';
FakeSearchBar.displayName = 'FakeSearchBar';
HeaderContainer.displayName = 'HeaderContainer';
HeaderInnerWrapper.displayName = 'HeaderInnerWrapper';
HeaderContent.displayName = 'HeaderContent';
SummaryWrapper.displayName = 'SummaryWrapper';
SummaryHeaderContainer.displayName = 'SummaryHeaderContainer';
SummaryHeaderLeftBlock.displayName = 'SummaryHeaderLeftBlock';
SummaryHeaderStars.displayName = 'SummaryHeaderStars';
SummaryHeaderTitle.displayName = 'SummaryHeaderTitle';
SummaryContentWrapper.displayName = 'SummaryContentWrapper';
SummaryContentSubheader.displayName = 'SummaryContentSubheader';
