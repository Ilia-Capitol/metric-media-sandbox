// zustand
import useStore from '../store';

// utils
import {
  ContentHeader,
  SummaryContentSubheader,
  SummaryContentWrapper,
  SummaryHeaderContainer,
  SummaryHeaderLeftBlock,
  SummaryHeaderStars,
  SummaryHeaderTitle,
  SummaryWrapper
} from './styled';

// assets
import sources from './sources.png';
import stars from './stars.svg';
import poweredBy from './poweredBy.svg';

const ContentSummary = () => {
  const searchResults = useStore((state) => state.searchResults);

  if (!searchResults) return null;

  return (
    <>
      <ContentHeader>"{searchResults}"</ContentHeader>
      <SummaryWrapper>
        <SummaryHeaderContainer>
          <SummaryHeaderLeftBlock>
            <SummaryHeaderStars>
              <img src={stars} width={20} height={20} alt='' />
            </SummaryHeaderStars>
            <SummaryHeaderTitle>AI summary</SummaryHeaderTitle>
          </SummaryHeaderLeftBlock>
          <img src={poweredBy} alt='Powered by Capitol AI' height={20} />
        </SummaryHeaderContainer>
        <SummaryContentWrapper>
          <div>
            Portland, Oregon, is undertaking several initiatives to enhance 82nd
            Avenue, aiming to improve safety, transit efficiency, and community
            engagement along this vital corridor.
          </div>
          <SummaryContentSubheader>
            Ownership Transfer and Safety Improvements
          </SummaryContentSubheader>
          <div>
            In April 2022, the Portland Bureau of Transportation (PBOT)
            officially assumed control of 82nd Avenue from the Oregon Department
            of Transportation (ODOT). This transition allows for a more
            localized approach to addressing the street's challenges,
            particularly its safety concerns. Notably, the intersection of 82nd
            Avenue and Glisan Street has been identified as Portland's most
            hazardous for pedestrians. To address such issues, PBOT has
            initiated the "82nd Avenue Critical Fixes" project, which includes:
          </div>
          <ul>
            <li>Repaving a 2.5-mile segment of NE/SE 82nd Avenue.</li>
            <li>Upgrading curb ramps to meet current accessibility standards.</li>
            <li>Enhancing crossings and signals to improve pedestrian safety.</li>
            <li>Implementing transit improvements, such as dedicated bus lanes.</li>
            <li>Adding median islands in select locations to enhance pedestrian refuge.</li>
            <li>Planting trees to improve the streetscape and air quality.</li>
          </ul>
          <div>These improvements are scheduled for completion between 2025 and 2026.</div>
          <img src={sources} alt="" height={32} />
        </SummaryContentWrapper>
      </SummaryWrapper>
    </>
  );
};

export default ContentSummary;
