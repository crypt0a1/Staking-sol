import styled from "styled-components"

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
    border-radius: 7px;
    border: 0px;
    &:hover {
        transition: all .2s ease-in-out;
        background-color: #974293;
    }
`
const Text = styled.div`
    transform: 0;
    font-family: Verdana,sans-serif;
    font-size: 14px;
    font-weight: 300px;
    transform: skewX(30deg);
    color: ${({theme}) => theme==='light'?'black':'white'}        
`


const ConnectWallet = () => {

    return (
        <Button width="150px">
            <Text>Connect Wallet</Text>
        </Button>
    )
}

export default ConnectWallet;