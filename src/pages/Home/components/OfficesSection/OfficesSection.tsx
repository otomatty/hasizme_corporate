import {
  OfficesContainer,
  OfficesTitle,
  OfficesMap,
} from "./OfficesSection.styled";

function OfficesSection() {
  return (
    <OfficesContainer>
      <OfficesTitle>Our Offices</OfficesTitle>
      <OfficesMap>
        {/* Google Maps APIを使用して事務所の位置を表示 */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f9f3b1d1b!2sGoogle!5e0!3m2!1sen!2sau!4v1611816751234!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen={true}
          loading="lazy"
        ></iframe>
      </OfficesMap>
    </OfficesContainer>
  );
}

export default OfficesSection;
