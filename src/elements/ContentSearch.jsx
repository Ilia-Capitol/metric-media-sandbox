import { useState } from 'react';

// app components
import {
  Calendar,
  ChevronDown,
  Globe,
  MarkerPinIcon,
  SearchButton
} from '../components/Icons';
import Spinner from '../components/Spinner';

// zustand
import useStore from '../store';

// utils
import { mockApiCall } from '../utils/api';
import {
  ContentFullSearchBar,
  ContentFullSearchBarSelectors,
  ContentFullSearchContainer,
  ContentHeader,
  ContentSearchButtonHolder,
  ContentSelectorHolder,
  ContentSubHeader,
  FakeSearchBar
} from './styled';

const ContentSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const isFetchingResult = useStore((state) => state.isFetchingResult);
  const startFetchingResult = useStore((state) => state.startFetchingResult);
  const stopFetchingResult = useStore((state) => state.stopFetchingResult);
  const setsearchResults = useStore((state) => state.setsearchResults);
  const searchResults = useStore((state) => state.searchResults);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {isFetchingResult && <Spinner />}
      {!isFetchingResult && !searchResults && (
        <>
          <ContentHeader>Get answers from Metric Media</ContentHeader>
          <ContentSubHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ContentSubHeader>
          <ContentFullSearchContainer>
            <ContentFullSearchBar>
              <FakeSearchBar
                placeholder='Ask a question'
                disabled={!!isFetchingResult}
                value={searchTerm}
                onChange={handleInputChange}
              />
              <ContentSearchButtonHolder
                onClick={async () => {
                  if (!!searchTerm) {
                    startFetchingResult();

                    const res = await mockApiCall(searchTerm);
                    setsearchResults(res.data);

                    stopFetchingResult();
                  }
                }}
              >
                <SearchButton />
              </ContentSearchButtonHolder>
            </ContentFullSearchBar>
            <ContentFullSearchBarSelectors>
              {/* State Selector */}
              <ContentSelectorHolder>
                <MarkerPinIcon />
                <div>Choose your state</div>
                <ChevronDown />
              </ContentSelectorHolder>
              {/* Source Selector */}
              <ContentSelectorHolder>
                <Globe />
                <div>Select a source</div>
                <ChevronDown />
              </ContentSelectorHolder>
              {/* Date Range Selector */}
              <ContentSelectorHolder>
                <Calendar />
                <div>Date range</div>
                <ChevronDown />
              </ContentSelectorHolder>
            </ContentFullSearchBarSelectors>
          </ContentFullSearchContainer>
        </>
      )}
    </>
  );
};

export default ContentSearch;
