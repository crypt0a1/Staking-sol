import styled from "styled-components";
import ConnectWallet from "../connectWallet";

const Button = styled.button`
    background-color: transparent;
    border: 0;    
    font-size: 22px;
    color: white;
    margin: 10px 0 10px 0;   
    cursor: pointer;
    &:hover {
        color: #382a4b;
    }
`

const Container = styled.div<{
    showState?: string
}>`
    background-color: #100512;
    width: 300px;
    height: 100%;
    position: fixed;
    right: ${({showState}) => showState?'0':'-300px'};
    top: 0px;    
    transition: 1s;
    transition-duration: 1s;
`

const Sidebar = (props:any) => {

    return (
        <Container showState={props.showState}>
            <div className="sidebarForm"> 
                <div className="bottom-border">
                    <Button>Audit</Button>
                </div>   
                <div className="bottom-border">
                    <Button>Telegram chat</Button>
                </div>                
                <div className="bottom-border">
                    <Button>Telegram channel</Button>
                </div>                
                <div className="bottom-border">
                    <Button>Contract</Button>                    
                </div>
                <div className="connectBtn">
                    <ConnectWallet />
                </div>                
            </div>     
        </Container>      
    )
}

export default Sidebar;