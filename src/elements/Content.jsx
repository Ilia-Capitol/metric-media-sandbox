// app components
import ContentSummary from './ContentSummary';
import ContentSearch from './ContentSearch';

// styled components
import { ContentContainer, ContentWrapper } from './styled';

// zustand
import useStore from '../store';

const Content = () => {
  const searchResults = useStore((state) => state.searchResults);

  const ContentData = !!searchResults ? ContentSummary : ContentSearch;

  return (
    <ContentWrapper>
      <ContentContainer $hasResults={!!searchResults}>
        <ContentData />
      </ContentContainer>
    </ContentWrapper>
  );
};

export default Content;
