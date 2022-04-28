import styled from "styled-components";
import { Connection, Keypair, Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as bs58 from "bs58";
import { useSelector } from "react-redux";
import { account } from "../../reducers/acountSlice";

// connection
const connection = new Connection("https://api.mainnet.solana.com");

// 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8
const feePayer = Keypair.fromSecretKey(
  bs58.decode("588FU4PktJWfGfxtzpAAXywSNt74AvtroVzGfKkVN1LwRuvHwKGr851uH8czM5qm4iqLbs1kKoMKtMJG4ATR7Ld2")
);

// G2FAbFQPFa5qKXCetoFZQEvF9BVvCKbvUZvodpVidnoY
const alice = Keypair.fromSecretKey(
  bs58.decode("4NMwxzmYj2uvHuq8xoqhY8RXg63KSVJM1DXkpbmkUY7YQWuoyQgFnnzn6yo3CMnqZasnNPNuAT2TLwQsCaKkUddp")
);


const Container = styled.div`
    background-color: rgba(0,0,0,.5);
    border-radius: 10px;
    border: 3px solid rgba(147,69,234,.5);
    width: 100%;
    height: 100%;     
    min-height: 300px;
    min-width : 280px;
    max-width : 300px;
    // display: flex;
    // justify-content:center;
    padding: 30px 10px 10px 10px;    
`
const Circle = styled.div`
    width: 177px;
    height: 177px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 -7px 14px #303030, 0 7px 14px #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;    
`

const TITLE = styled.h2<{
    fontSize?: string
    lineHeight?: string    
    margin?: string
    padding?: string
    color?: string
}>`
    color: #b51cfd;    
    font-size: ${({fontSize}) => fontSize??'20px'};
    line-height: ${({lineHeight}) => lineHeight??'20px'};
    margin: ${({margin}) => margin??'0'};
    padding: ${({padding}) => padding??'0'};

`

const DIV = styled.div<{
    width?: string    
    padding?: string
    margin?: string
    display?: string
    alignItem?: string
    justifyContent?: string
    textAlign?: string
}>`
    width: ${({width}) => width??'100%'};
    padding: ${({padding}) => padding??'0'};
    display: ${({display}) => display??'block'};
    align-items: ${({alignItem}) => alignItem??''};
    justify-content: ${({justifyContent}) => justifyContent??'left'};
    margin: ${({margin}) => margin??'0'};
    text-align: ${({textAlign}) => textAlign??'center'};
`    
const Text = styled.span<{
    fontSize?: string
    fontColor?: string
    fontFamily?: string
    lineHeight?: string
}>`
    transform: 0;
    font-family: ${({fontFamily}) => fontFamily??'Verdana,sans-serif'};
    font-size: ${({fontSize}) => fontSize??'14px'};
    font-weight: 300px;
    color: ${({fontColor}) => fontColor??'white'} ;
    letter-spacing: 2px;
    line-height: ${({lineHeight}) => lineHeight??'30px'};
`

const Input = styled.input`
    background: rgba(44,44,44,.7);
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 5px 0 20px;
    outline: none;
    padding: 7px;
    width: 70%;
    height: 25px;
    text-align: center;
`

const Button = styled.button`
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
    width: 75%;
    cursor: pointer;
    &:hover {
        transition: all .2s ease-in-out;
        transform: scale(1.1);
        background-color: #974293;
    }
`

const StakingForm = (props:any) => {    
    
    const connectedPublicKey = useSelector(account);
    const data = props.formData;

    const stakeSol = async () => {
        let tx = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: new PublicKey(connectedPublicKey),
            toPubkey: new PublicKey("4MWwxzWsWmHrsbfPFwE6LDq471nqNeNMsD6DS7y8nruw"),
            lamports: 0.001 * LAMPORTS_PER_SOL,
          })
        );
        tx.feePayer = feePayer.publicKey;
      
        let txhash = await connection.sendTransaction(tx, [feePayer, alice]);
        console.log(`txhash: ${txhash}`);
      }

    return (
        <Container>
            <DIV display="flex" justifyContent="center">
                <Circle>
                    <DIV textAlign="center">
                        <Text fontColor="#b51cfd" lineHeight="50px">Plan{data.index + 1}</Text>
                        <TITLE fontSize="45px">{data.dailyProfit}%</TITLE>
                        <Text fontColor="#b51cfd" lineHeight="50px">Daily profit</Text>
                    </DIV>                
                </Circle>
            </DIV>
            <DIV display="flex">
                <DIV textAlign="center" width="50%">
                    <Text fontSize="18px">Days</Text><br />
                    <Text fontSize="22px" fontFamily="fantasy">{data.day}</Text>                    
                </DIV>
                <DIV textAlign="center" width="50%">
                    <Text fontSize="18px">In {data.day} days</Text><br />
                    <Text fontSize="18px">you will get</Text><br/>
                    <Text fontSize="20px" fontFamily="fantasy">...</Text>
                </DIV>
            </DIV>
            <DIV display="flex">
                <DIV textAlign="center" width="50%">
                    <Text fontSize="18px">Total Return</Text><br />
                    <Text fontSize="22px" fontFamily="fantasy">299.6%</Text>                    
                </DIV>
                <DIV textAlign="center" width="50%">
                    <Text fontSize="18px">Withdrawal</Text><br />
                    <Text fontSize="20px" fontFamily="fantasy">{data.withdrawal}</Text>
                </DIV>
            </DIV>
            <DIV margin="10px 0 0 0">
                <Text fontSize="18px">Enter Amount</Text><br />
                <Input /><br />
                <Button onClick={ () => stakeSol() } >Stake SOL</Button>
            </DIV>            
        </Container>
    )    
}

export default StakingForm;