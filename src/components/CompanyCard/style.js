import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 80%;
    padding: 20px;
    box-sizing: border-box;
    min-height: 200px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(12,0,51,0.1);
    display: flex;
    transition: 0.5s;
    flex-direction: column;

    :hover {
        transform: scale(1.02);
    }
`

export const CompanyInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const CompanyText = styled.div`
    width: 50%
    font-family:'微軟正黑體';
    white-space: pre;
`

export const CompanyLogo = styled.img`
    width: 130px;
    height: 130px;
`

export const TotalScoreContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TotalScoreImg = styled.div`

`
export const TotalScoreInfo = styled.div`
    margin-top: 15px;
    font-family: '微軟正黑體';
    font-weight: 600;
`
export const StatusIcon = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.bgc };
`