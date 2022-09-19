import styled from "styled-components";

export const CardColumn = styled.section`

`;

export const CardContainer = styled.div`
    border-radius: 15px;
    min-height: 768px;
`;

export const CardHeader = styled.div`
    background: #F4E3E2;
    border-radius: 15px 15px 0px 0px;
    height: 168px;
`;

export const CardButton = styled.button`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #2C3748;
    border-radius: 15px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-transform: uppercase;

    color: #F4E3E2;
`;

export const CardBody = styled.div`
    background: #FFFFFF;
    border-radius: 0px 0px 15px 15px;
`;

export const CardTitle = styled.h3`
    font-family: 'Arsenica Trial';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
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