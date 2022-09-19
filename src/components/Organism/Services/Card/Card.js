import { CardColumn, CardButton, CardHeader, CardBody, CardDeliveryTime, CardSubTitle, CardTitle, CardPointItem, CardPointContainer, CardPointText, CardContainer } from "./CardStyles";
import { BsCheck } from 'react-icons/bs';
import { MdOutlineWatchLater } from 'react-icons/md'; 

const Card = (props) => {
    return (
        <CardColumn className="col-md-4 mt-4">
            <CardContainer className="card">
                <CardHeader className="d-flex justify-content-center align-items-center"> 
                    <div>
                        <CardSubTitle className="d-flex justify-content-center align-self-center">Paquete</CardSubTitle>
                        <CardTitle className="d-flex justify-content-center align-self-center">{ props.title }</CardTitle>
                    </div>
                </CardHeader>
                <CardBody className="card-body d-flex flex-column flex-wrap p-3">
                    <CardPointContainer style={{ flex: "1 auto 1" }}>
                        {
                            props.points?.map(point => {
                                return (
                                    <CardPointItem className="pt-2">
                                        <div>
                                            <BsCheck size={ 20 }/>
                                        </div>
                                        <p className="mx-1">
                                            { 
                                                point.map(subpoint => <CardPointText id={ subpoint.id } variant={ subpoint.style }>{ subpoint.text }</CardPointText>) 
                                            }
                                        </p>
                                    </CardPointItem>
                                );
                            })
                        }
                    </CardPointContainer>
                    <CardDeliveryTime style={{ flex: "1 auto 1", flexGrow: 1 }} className="row"> 
                        <div className="align-self-end d-flex flex-row">
                            <div>
                                <MdOutlineWatchLater size={ 20 } />
                            </div>
                            <span className="mx-1">{ props.deliveryTime }</span>
                        </div>
                    </CardDeliveryTime>
                    <CardButton style={{ flex: "1 auto 1" }}>
                        CONSULTAR
                    </CardButton>
                </CardBody>
            </CardContainer>
        </CardColumn>
    );
};

export default Card;