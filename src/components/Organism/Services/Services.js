import LIST_PACKAGES from "./PackagesData";
import { TitleSection } from "../../../styled-component/styles";
import Card from "./Card/Card";
import {
  CustomParagraph,
  CustomAdviceParagraph,
  ServicesContainer,
} from "./ServicesStyle";
import { MdOutlineLocalAtm } from "react-icons/md";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <article className="container">
        <TitleSection>SERVICIOS</TitleSection>
        <div className="row" style={{ width: "100%", margin: 0 }}>
          {LIST_PACKAGES.map((item, index) => (
            <Card key={index} id={item.id} className="col-md-4" {...item} />
          ))}
        </div>
        <CustomAdviceParagraph className="mt-4">
          *Por cada reel adicional se cobra un monto extra.
        </CustomAdviceParagraph>
        <CustomParagraph className="d-flex flex-row">
          <MdOutlineLocalAtm size={30} />
          <span className="mx-1">
            Al contratar el servicio se abona el paquete solicitado mediante
            transferencia bancaria.
          </span>
        </CustomParagraph>
      </article>
    </ServicesContainer>
  );
};

export default Services;
