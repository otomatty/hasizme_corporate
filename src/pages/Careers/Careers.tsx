import {
  CareersContainer,
  JobSection,
  JobTitle,
  JobDescription,
} from "./Careers.styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Careers() {
  return (
    <>
      <Header />
      <CareersContainer>
        <h2>Careers</h2>
        <JobSection>
          <JobTitle>Construction Manager</JobTitle>
          <JobDescription>
            We are looking for an experienced Construction Manager to oversee
            our construction projects. The ideal candidate will have a strong
            background in construction management and excellent leadership
            skills.
          </JobDescription>
        </JobSection>
        <JobSection>
          <JobTitle>Project Engineer</JobTitle>
          <JobDescription>
            We are seeking a Project Engineer to join our team. The successful
            candidate will be responsible for planning, designing, and
            overseeing construction projects. A degree in engineering and
            relevant experience are required.
          </JobDescription>
        </JobSection>
        <JobSection>
          <JobTitle>Sales Representative</JobTitle>
          <JobDescription>
            We are hiring a Sales Representative to promote our construction
            materials. The ideal candidate will have a proven track record in
            sales and excellent communication skills.
          </JobDescription>
        </JobSection>
      </CareersContainer>
      <Footer />
    </>
  );
}

export default Careers;
