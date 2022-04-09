import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background: url('https://maticfomo.io/background.bedd1bd0d09f79526fab..svg');
    height: 100%;
    min-height: 1500px;
    width: 100%;
`
const DIV = styled.div<{
    width?: string    
    padding?: string
    margin?: string
}>`
    width: ${({width}) => width??'100%'};
    padding: ${({padding}) => padding??'0'};
`

const TITLE = styled.h2<{
    fontSize?: string
}>`
    color: white;    
    font-size: ${({fontSize}) => fontSize??'20px'};
`

const DESCRIPTION = styled.p`
    font-size: 18px;
    color: white;
    letter-spacing: 1px;
    line-height: 35px;
`

const StatisticsForm = styled.div`
    width: 80%;
    padding: 10px;
    background-color: #25113e;
    border-radius: 10px;
    height: 100%;
    text-align: center;
    // display: flex;
    // justify-content: center;
`

const Dashboard = () => {

    

    return (
        <Container>
            <div className="explain-section">
                <DIV width="65%" padding="0 50px 0 80px">
                    <TITLE fontSize="25px">
                        The SolV2 smart-contract provides the opportunity to invest any amount of Sol (from 5 Sol) in the contract.
                    </TITLE>
                    <DESCRIPTION>
                        Get 112% to 564% return on investment in 14 to 28 days （from 8% to 20% daily） <br/>

                        Min. deposit: 5 MATIC and no max. limit.<br/>

                        Important notes:<br/>

                        1. Basic interest rate (only for new deposits): +0.5% every 24 hours<br/>

                        2. If users don't make a withdrawal everyday, will get extra bonus - hold bonus.<br/> Hold-bonus increase by 0.1% per day, Max. is 1.5%. if users withdraw, Hold-bonus will reset to 0<br/>

                        3. Users can share referral links to earn bonus(at least 1 deposit to active the link), Referral bonuses will be automatically sent to the wallet.<br/>
                    </DESCRIPTION>
                </DIV>
                <DIV width="35%">
                    <StatisticsForm>
                        <TITLE fontSize="30px">
                            Statistics
                        <hr className="static-hr" />         
                        </TITLE>               
                    </StatisticsForm>
                </DIV>
            </div>
        </Container>
    )
}

export default Dashboard;