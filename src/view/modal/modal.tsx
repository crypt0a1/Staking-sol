import { useState } from "react";
import styled from "styled-components";

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

const IntroModal = () => {
      const [modalState, setModalState] = useState(true);      
      const onOpenModal = () => {
        setModalState(true);
      };
    
      const onCloseModal = () => {          
        setModalState(false)
      };

        return (
            <>
                <div className={`modal ${modalState==false?'none':'block'}`}>
                    <div className="text-right">
                        <button className="close-btn" onClick={ () => onCloseModal() } >Close</button>
                    </div>                    
                    <div className="modal-header">
                        <TITLE color="#bd0ad3">🎉🎉🎉CONGRATULATIONS!🎉🎉🎉</TITLE>
                    </div>
                    <div className="modal-content">
                        <Text fontColor="#2f0444" fontFamily="system-ui" lineHeight="25px" fontSize="18px">
                        With the successful launch of SolFomo, Fantomfomo and AvalancheFomo, we have built a FOMO ecosystem.
                        We decided to launch BSCFomo on the Binance Smart Chain network to expand our investors community.
                        <br /><br />
                        1. The BSCFomo project will be launched on 3rd of April 2022 14:00:00 UTC (https://bscfomo.app/).
                        <br /><br />
                        2. BSCFomo's Basic Mechanism: Minimum Deposit:0.05 BNB , Total Profit : 105% - 564.8%
                        <br /><br />
                        Fomo community - Become rich with us, Keep growing!🎉🎉🎉
                        <br />
                        SOCIAL HANDLES:
                        BSCFomo Official Group: <a href="https://t.me/bsc_fomo">https://t.me/bsc_fomo</a>
                        <br />
                        FOMO Ecosystem Official Channel: <a href="https://t.me/bsc_fomo">https://t.me/FomoEcosystem</a>
                        </Text>
                    </div>
                </div>
            </>
        );    
}

export default IntroModal;