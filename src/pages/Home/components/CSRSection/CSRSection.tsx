import { CSRContainer, CSRTitle } from "./CSRSection.styled";
import CSRSlider from "../CSRSlider/CSRSlider";
import "@splidejs/splide/dist/css/splide.min.css";

function CSRSection() {
  const csrActivities = [
    { title: "Activity 1", description: "Description of activity 1" },
    { title: "Activity 2", description: "Description of activity 2" },
    { title: "Activity 3", description: "Description of activity 3" },
    { title: "Activity 4", description: "Description of activity 4" },
    { title: "Activity 5", description: "Description of activity 5" },
    { title: "Activity 6", description: "Description of activity 6" },
    { title: "Activity 7", description: "Description of activity 7" },
  ];

  return (
    <CSRContainer>
      <CSRTitle>Our CSR Activities</CSRTitle>
      <CSRSlider activities={csrActivities} />
    </CSRContainer>
  );
}

export default CSRSection;
