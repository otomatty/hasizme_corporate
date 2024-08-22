import {
  NewsContainer,
  NewsSection,
  NewsTitle,
  NewsContent,
} from "./News.styled";

function News() {
  return (
    <NewsContainer>
      <NewsSection>
        <NewsTitle>Latest News</NewsTitle>
        <NewsContent>
          Stay updated with the latest news and announcements from our company.
          We are committed to keeping you informed about our latest projects and
          developments.
        </NewsContent>
      </NewsSection>
      <NewsSection>
        <NewsTitle>Press Releases</NewsTitle>
        <NewsContent>
          Read our latest press releases to learn more about our company's
          achievements and milestones. We are proud to share our success stories
          with you.
        </NewsContent>
      </NewsSection>
      <NewsSection>
        <NewsTitle>Industry News</NewsTitle>
        <NewsContent>
          Keep up with the latest trends and updates in the construction
          materials industry. We provide insights and analysis to help you stay
          ahead of the curve.
        </NewsContent>
      </NewsSection>
    </NewsContainer>
  );
}

export default News;
