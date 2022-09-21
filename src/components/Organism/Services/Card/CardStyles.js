import styled from "styled-components";
import { CustomButton } from "../../../../styled-component/styles";

export const CardColumn = styled.section`

`;

export const CardContainer = styled.div`
    border-radius: 15px;
    min-height: 768px;

    &:hover {
        box-shadow: 8px 8px 4px 4px rgba(0, 0, 0, 0.15), inset 4px 4px 4px rgba(255, 255, 255, 0.25);
    }
`;

export const CardHeader = styled.div`
    background: #F4E3E2;
    border-radius: 15px 15px 0px 0px;
    height: 168px;
`;

export const CardButton = styled(CustomButton)`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CardBody = styled.div`
    background: #FFFFFF;
    border-radius: 0px 0px 15px 15px;
`;

export const CardTitle = styled.h3`
    font-family: 'Arsenica Trial Bold';
    font-style: normal;
    font-weight: bolder;
    font-size: 2.25rem;
    line-height: 2.6rem;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #2C3748;
`;

export const CardSubTitle = styled.div`
    font-family: 'Noto Serif Display';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 27px;
    /* identical to box height */
    letter-spacing: 0.03em;
`;

export const CardService = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.03em;

    color: #000000;
`;

export const CardDeliveryTime = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.03em;

    color: #2C3748;
`;

export const CardPointItem = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.03em;

    color: #000000;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const CardPointContainer = styled.div`
    list-style-type: none; 
    padding: 0;
    margin: 0;
`;

export const CardPointText = styled.span`
    ${ props => props.variant === 'bold' ? 'font-weight: bold' : '' }
`;