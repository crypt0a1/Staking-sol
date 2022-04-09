import React from "react";
import styled from "styled-components";
import StakingForm from "../../components/stakingForm";

const Container = styled.div`
    background: url('https://maticfomo.io/background.bedd1bd0d09f79526fab..svg');
    height: 100%;
    min-height: 1900px;
    width: 100%;
    padding-top: 100px;    
`
const DIV = styled.div<{
    width?: string    
    padding?: string
    margin?: string
    display?: string
    alignItem?: string
    justifyContent?: string
}>`
    width: ${({width}) => width};
    padding: ${({padding}) => padding??'0'};
    display: ${({display}) => display??'block'};
    align-items: ${({alignItem}) => alignItem??''};
    justify-content: ${({justifyContent}) => justifyContent??'left'};
    margin: ${({margin}) => margin??'0'};
`                           
const Button = styled.button<{
    width?: string
    border?: string
    borderRadius?: string
    padding?: string
    theme?: string
    backgroundColor?: string
}>`
    width: ${({width}) => width??'100%'};  
    padding: 5px;
    padding-inline: 10px !important;
    margin: 5px;    
    flex: 1;
    transform: skewX(330deg);
    background-color: orchid;
    border-radius: 3px;
    border: 0px;
    cursor: pointer;
    min-width: 130px;
    &:hover {
        transition: all .2s ease-in-out;
        background-color: #974293;
    }
`

const Text = styled.div<{
    fontSize?: string
    fontColor?: string
    fontFamily?: string
    lineHeight?: string
    angle?: string
}>`
    transform: 0;
    font-family: ${({fontFamily}) => fontFamily??'Verdana,sans-serif'};
    font-size: ${({fontSize}) => fontSize??'14px'};
    font-weight: 300px;
    color: ${({fontColor}) => fontColor??'white'} ;
    letter-spacing: 2px;
    line-height: ${({lineHeight}) => lineHeight};
    transform: ${({angle}) => angle};
`
const Logo = styled.img`
    border-radius: 100%;
    width: 70px;
    margin-left: 30px;    
`

const TITLE = styled.h2<{
    fontSize?: string
    lineHeight?: string    
    margin?: string
    padding?: string
    fontWeight?:string
    color?: string
}>`
    color: ${({color}) => color??'white'};    
    font-size: ${({fontSize}) => fontSize??'20px'};
    line-height: ${({lineHeight}) => lineHeight};
    margin: ${({margin}) => margin??'0'};
    padding: ${({padding}) => padding??'0'};
    font-weight: ${({fontWeight}) => fontWeight}
`

const DESCRIPTION = styled.p<{
    fontSize?:string
}>`
    font-size: ${({fontSize}) => fontSize??'18px'};
    color: white;
    letter-spacing: 1px;
    font-family: Diatype, sans-serif;
    font-weight: 300;
    line-height: 35px;
    margin: 0px;
`

const StatisticsForm = styled.div`
    width: 75%;
    // padding: 10px;
    background-color: #25113e;
    border-radius: 10px;
    height: 100%;
    text-align: center;
    padding-right: 10px;
    padding-left: 10px;
`
const StakeInfoForm = styled.div`
    background-image: linear-gradient(to right, #453570 , #18121e4d);
    border: 4px solid #3a2462;
    border-right: 0 !important;
    border-radius: 10px;
    min-height: 100px;
    padding: 30px;
    flex-direction: column!important;
    display: flex;   
    height: 100%!important;
`

const IMG = styled.img<{
    width?: string
    height?: string
    borderRadius?: string    
}>`
   border-radius: ${({borderRadius}) => borderRadius??'0px'} ;
   width: ${({width}) => width??'30px'};
   height: ${({height}) => height}
`
const WithdrawBtn = styled.button<{
    width?:string
}>`
    background: linear-gradient(104.24deg,#9345ea 10.85%,#7697f5 93.89%);
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 24px;
    font-size: 18px;
    font-weight: 700;
    line-height: 29px;
    min-width: 100px;
    padding: 7px;
    transition: all .2s ease-in-out;
    width: ${({width}) => width};
    cursor: pointer;
    &:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.1);
        background-color: #974293;
    }
`

const Input = styled.input<{
    margin?: string
}>`
    background: rgba(147,69,234,.3);
    border: 1px solid #9345ea;
    border-radius: 10px;
    box-sizing: border-box;
    color: #e4e4e4;
    margin: 0 15px 0 30px;
    padding: 8px 20px;
    margin: ${({margin}) => margin};
`

const Dashboard = () => {

    

    return (
        <Container>
            <div className="ref-btn-group">
                <DIV className="d-btnGroup flex-wrap" display="flex">
                    <Button><Text angle="skewX(30deg)">NFT airdrop</Text></Button>
                    <Button><Text angle="skewX(30deg)">YouTube Contest</Text></Button>
                    <Button><Text angle="skewX(30deg)">Documentation</Text></Button>
                    <Button><Text angle="skewX(30deg)">BSC Fomo</Text></Button>
                    <Button><Text angle="skewX(30deg)">SIL/USDT</Text></Button>
                </DIV>
            </div>
            <div className="explain-section">                
                <DIV padding="0 50px 0 70px" className="sol-rising">
                    <TITLE fontSize="25px" lineHeight="35px">
                        The SolV2 smart-contract provides the opportunity to invest any amount of Sol (from 5 Sol) in the contract.
                    </TITLE>
                    <DESCRIPTION>
                        Get 112% to 564% return on investment in 14 to 28 days （from 8% to 20% daily） <br/>

                        Min. deposit: 5 MATIC and no max. limit.<br/>

                        Important notes:<br/>

                        1. Basic interest rate (only for new deposits): +0.5% every 24 hours<br/>

                        2. If users don't make a withdrawal everyday, will get extra bonus - hold bonus.<br/>
                           Hold-bonus increase by 0.1% per day, Max. is 1.5%. if users withdraw, Hold-bonus will reset to 0<br/>

                        3. Users can share referral links to earn bonus(at least 1 deposit to active the link), Referral bonuses will be automatically sent to the wallet.<br/>
                    </DESCRIPTION>
                </DIV>                
                <DIV className="sol-status">
                    <StatisticsForm className="statusForm">
                        <TITLE fontSize="30px" margin="15px 0 0 0">
                            Statistics
                        <hr className="static-hr" />                                 
                        </TITLE>               
                        <DIV display="flex" alignItem="center" padding="20px">
                            <IMG src="./images/sol-rising.jpg" width="50px" height="50px" borderRadius="50%" alt="url failed" />
                            <div>
                                <TITLE fontSize="32px">1636259.490</TITLE>
                                <DESCRIPTION fontSize="14px">Total Staked SOL</DESCRIPTION>
                            </div>
                        </DIV>
                        <DIV display="flex" alignItem="center" justifyContent="right">                            
                            <div>
                                <TITLE fontSize="32px">1636</TITLE>
                                <DESCRIPTION fontSize="14px">Total Users</DESCRIPTION>
                            </div>
                            <IMG src="./images/users.svg" width="50px" height="50px" borderRadius="50%" alt="url failed" />
                        </DIV>
                        <DIV display="flex" alignItem="center" padding="20px">
                            <IMG src="./images/soltoken.jpg" width="50px" height="50px" borderRadius="50%" alt="url failed" />
                            <div>
                                <TITLE fontSize="32px">152515.542</TITLE>
                                <DESCRIPTION fontSize="14px">Ref Rewards (SOL)</DESCRIPTION>
                            </div>
                        </DIV>

                    </StatisticsForm>
                </DIV>
            </div>
            <div className="staking-section">
                <DIV className="stakingForm" display="flex" width="100%">
                    <DIV className="col-md-12 col-md-6 col-lg-4 stake-column" display="flex" justifyContent="center">
                        <StakingForm />
                    </DIV>      
                    <DIV className="col-md-12 col-md-6 col-lg-4 stake-column" display="flex" justifyContent="center">
                        <StakingForm />
                    </DIV>      
                    <DIV className="col-md-12 col-md-6 col-lg-4 stake-column" display="flex" justifyContent="center">
                        <StakingForm />
                    </DIV>                
                </DIV>
                <DIV className="Info-section" display="flex" width="100%" margin="60px 0 0 0" padding="0 0 0 27px">
                    <div className="colcol-lg-4">
                        <StakeInfoForm>
                            <Text fontColor="white" fontFamily="sans-serif">Total Staked MATIC</Text>
                            <TITLE margin="0 0 20px 0" color="#328ef9" fontWeight="700" fontSize="36px">0.000</TITLE>
                            <Text fontColor="white"  fontFamily="sans-serif">Available MATIC for withdrawal</Text>
                            <TITLE margin="0 0 20px 0" color="#328ef9" fontWeight="700" fontSize="36px">0.00000</TITLE>
                            <Text fontColor="white"  fontFamily="sans-serif">Withdrawn MATIC</Text>
                            <TITLE margin="0 0 20px 0" color="#328ef9" fontWeight="700" fontSize="36px">0.000</TITLE>
                            <Text fontColor="white">Hold Bonus</Text>
                            <TITLE margin="0 0 20px 0" color="#328ef9" fontWeight="700" fontSize="36px">1.5%</TITLE>
                            <WithdrawBtn width="35%">Withdraw</WithdrawBtn>
                        </StakeInfoForm>
                    </div>
                    <div className="col-lg-12 col-lg-8 p-20">                        
                        <DIV display="flex" justifyContent="center" className="level">
                            <TITLE fontSize="35px">Referral program</TITLE>
                        </DIV>
                        <div  className="referalForm">
                            <DIV display="flex" width="100%">
                                <div className="col-md-6">
                                    <TITLE color="#328ef9">0.000</TITLE>
                                    <Text>Total Referral Earned</Text>                                
                                </div>
                                <div className="col-md-6">
                                    <TITLE color="#328ef9">0</TITLE>
                                    <Text>Referrals</Text>
                                </div>
                            </DIV>
                            <DIV className="flex-wrap" display="flex" margin="20px 20px 0 0" alignItem="center">
                                    <TITLE>Your Referral Link</TITLE>
                                    <Input readOnly margin="10px 0 10px 0" />
                                    <WithdrawBtn width="15%">Copy</WithdrawBtn>
                            </DIV>
                        </div>
                    </div>
                </DIV>
                <div className="nftBoxForm">
                    <DIV display="flex" className="flex-wrap" alignItem="center" justifyContent="center" width="100%">
                        <TITLE className="nftBox" fontSize="40px">AVAILABLE NFT BOXES</TITLE>
                        <div className="flex">
                            <TITLE fontSize="40px" margin="0 60px 0 30px" color="#328ef9">0</TITLE>
                            <WithdrawBtn width="10%">Claim</WithdrawBtn>
                        </div> 
                    </DIV>
                </div>
                <div className="yourStake">
                    <DIV display="flex">
                        <TITLE fontSize="40px">Your stake</TITLE>
                    </DIV>
                </div>                
            </div>
        </Container>
    )
}

export default Dashboard;