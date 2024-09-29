import { styled } from 'solid-styled-components';

export const ServiceDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

export const HeroContainer = styled.div<{ hasImage: boolean }>`
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  background-color: ${(props) => (props.hasImage ? 'transparent' : '#f0f0f0')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroFilter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const HeroTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  text-align: center;
  z-index: 1;
`;

export const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
`;

export const MainContent = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

export const Sidebar = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
`;

export const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
`;

export const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export const ProductItem = styled.li`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  text-align: center;
`;

export const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #4caf50;
  }
`;

export const ContactInfo = styled.p`
  background-color: #e8f5e9;
  border-radius: 4px;
  padding: 1rem;
  margin-top: 1rem;
`;

export const BlogLink = styled.a`
  display: inline-block;
  background-color: #2196f3;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

export const OtherServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

export const OtherServicesItem = styled.li`
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 0.5rem 1rem;

  a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #2196f3;
    }
  }
`;
