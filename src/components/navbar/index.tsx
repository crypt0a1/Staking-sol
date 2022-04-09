import styled from "styled-components"
import ConnectWallet from "../connectWallet"
import logo from './logo.png';

const Container = styled.div<{
    theme?: string    
}>`
    background-color: ${({theme}) => theme??'#4b364e'};
    height: 80px;
    width: 100%;    
    display: flex;
    align-items: center;
    justify-content: space-between;    
    position: fixed;
    top: 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    margin: 5px;    
    flex: 1;
    transform: skewX(330deg);
    background-color: orchid;
    border-radius: 3px;
    border: 0px;
    cursor: pointer;
    &:hover {
        transition: all .2s ease-in-out;
        background-color: #974293;
    }
`
const Text = styled.span<{
    fontSize?: string
    fontColor?: string
    fontFamily?: string
}>`
    transform: 0;
    font-family: ${({fontFamily}) => fontFamily??'Verdana,sans-serif'};
    font-size: ${({fontSize}) => fontSize??'14px'};
    font-weight: 300px;
    color: ${({fontColor}) => fontColor??'white'} ;
    letter-spacing: 2px;
`
const Logo = styled.img`
    border-radius: 100%;
    width: 70px;
    margin-left: 30px;    
`

const Navbar = () => {

    return (
        <>
        <Container theme='#4b364e'>
            <div className="logo">
                <Logo src={logo} alt="logo" />
                <Text fontFamily="fantasy" fontSize="21px" fontColor="#8d6aef">&nbsp; Earn Sol</Text>
            </div>
            <div className="sol-token">
                <Text fontSize="20px" fontColor="#00d7c3" fontFamily="fantasy">1 SOL = $100</Text>
            </div>
            <div className="btn-group">
                <Button><Text>Audit</Text></Button>
                <Button><Text>Telegram chat</Text></Button>
                <Button><Text>Telegram channel</Text></Button>
                <Button><Text>Contract</Text></Button>
                <ConnectWallet />
            </div>
        </Container>
        </>
    )
}

export default Navbar;