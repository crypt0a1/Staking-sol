import styled from "styled-components"

const IMG = styled.img<{
    width?: string
    height?: string
    borderRadius?: string    
}>`
   border-radius: ${({borderRadius}) => borderRadius??'0px'} ;
   width: ${({width}) => width??'30px'};
   height: ${({height}) => height}
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

const Footbar = () => {
    
    return (
        <div className="footer">
            <div className="p-30  row">
                <div className="col-lg-4">      
                    <div className="LogoForm">
                        <IMG src="./images/footlogo.png" borderRadius="100%" width="60px" height="60px" alt="footlogo" /> &nbsp;
                        <TITLE fontSize="25px">SOL Token</TITLE>
                    </div>
                </div>
                <div className="col-lg-4 foot-hide">
                    <div className="scanForm">
                        <a onClick={ () => window.open('https://dappradar.com/polygon/high-risk/maticfomo') }>
                            <div className="flex alignCenter">
                                <IMG src="./images/lightSol.jpg" borderRadius="100%" width="60px" height="60px" alt="footlogo" /> &nbsp;
                                <TITLE fontSize="25px">SolanaFly</TITLE>
                            </div>                            
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 foot-hide">
                    <div className="scanForm"> 
                        <a onClick={ () => window.open('https://dappradar.com/polygon/high-risk/maticfomo') }>
                            <div className="flex alignCenter">
                                <IMG src="./images/solscan.jpg" borderRadius="100%" width="60px" height="60px" alt="footlogo" /> &nbsp;
                                <TITLE fontSize="25px">SOL Scan</TITLE>
                            </div>                            
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footbar;