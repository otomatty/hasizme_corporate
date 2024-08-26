import { PageContainer } from "./CompanyProfile.styled";
import CompanyOverviewSection from "./components/CompanyOverviewSection/CompanyOverviewSection";
import BusinessContentSection from "./components/BusinessContentSection/BusinessContentSection";
import ExecutivesSection from "./components/ExecutivesSection/ExecutivesSection";

const CompanyProfile = () => {
  return (
    <PageContainer>
      <CompanyOverviewSection />
      <BusinessContentSection />
      <ExecutivesSection />
    </PageContainer>
  );
};

export default CompanyProfile;
