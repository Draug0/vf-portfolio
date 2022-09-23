import {
  CardColumn,
  CardButton,
  CardHeader,
  CardBody,
  CardDeliveryTime,
  CardSubTitle,
  CardTitle,
  CardPointItem,
  CardPointContainer,
  CardPointText,
  CardContainer,
} from "./CardStyles";
import { BsCheck } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";

const Card = (props) => {
  return (
    <CardColumn className="col-md-4 mt-4">
      <CardContainer className="card">
        <CardHeader className="d-flex justify-content-center align-items-center">
          <div>
            <CardSubTitle className="d-flex justify-content-center align-self-center">
              Paquete
            </CardSubTitle>
            <CardTitle className="d-flex justify-content-center align-self-center">
              {props.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardBody className="card-body d-flex flex-column flex-wrap p-3">
          <CardPointContainer style={{ flex: "1 auto 1" }}>
            {props.points?.map((point, index) => {
              return (
                <CardPointItem key={index} className="pt-2">
                  <span>
                    <BsCheck 
                        className="iconHover" 
                        size={20} 
                    />
                  </span>
                  <p className="mx-1">
                    {point.map((subpoint, index) => (
                      <CardPointText
                        key={index}
                        id={subpoint.id}
                        variant={subpoint.style}
                      >
                        {subpoint.text}
                      </CardPointText>
                    ))}
                  </p>
                </CardPointItem>
              );
            })}
          </CardPointContainer>
          <CardDeliveryTime
            style={{ flex: "1 auto 1", flexGrow: 1 }}
            className="row"
          >
            <span className="align-self-end d-flex flex-row">
              <span className="d-flex align-items-center">
                <span>
                  <MdOutlineWatchLater 
                      className="iconHover"
                      size={20} />
                </span>
                <span className="mx-1">{props.deliveryTime}</span>
              </span>
            </span>
          </CardDeliveryTime>
          <CardButton style={{ flex: "1 auto 1" }} href="#contactme">
            CONSULTAR
          </CardButton>
        </CardBody>
      </CardContainer>
    </CardColumn>
  );
};

export default Card;
