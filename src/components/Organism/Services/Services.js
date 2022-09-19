import LIST_PACKAGES from "./PackagesData";
import { TitleSection } from "../../../styled-component/styles";
import Card from "./Card/Card";
import { CustomParagraph, CustomAdviceParagraph, ServicesContainer } from "./ServicesStyle";
import { MdOutlineLocalAtm } from "react-icons/md";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <TitleSection>Servicios</TitleSection>
            <div className="row">
                { 
                    LIST_PACKAGES.map(item => <Card id={ item.id } className="col-4" { ...item }/>)
                }
            </div>
            <CustomAdviceParagraph className="mt-4">*Por cada reel adicional se cobra un monto extra.</CustomAdviceParagraph>
            <CustomParagraph className="d-flex flex-row">
                <MdOutlineLocalAtm size={ 30 }/>
                <span className="mx-1">Al contratar el servicio se abona el paquete solicitado mediante transferencia bancaria.</span>
            </CustomParagraph>
        </ServicesContainer>
    );
};

export default Services;