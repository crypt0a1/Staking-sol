import styled from "styled-components"
import { PublicKey, Transaction } from "@solana/web3.js"
import React, { useEffect, useState } from 'react';

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";
interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}
const Button = styled.button<{
    width?: string
    border?: string
    borderRadius?: string
    padding?: string
    theme?: string
    backgroundColor?: string
}>`
    width: ${({width}) => width};  
    padding: 5px;
    margin: 5px;    
    flex: 1;
    transform: skewX(330deg);
    background-color: orchid;
    border-radius: 5px;
    border: 0px;
    cursor: pointer;
    &:hover {
        transition: all .2s ease-in-out;
        background-color: #974293;
    }
`
const Text = styled.div<{
    angle?: string
}>`
    transform: 0;
    font-family: Verdana,sans-serif;
    font-size: 14px;
    font-weight: 300px;
    transform: ${({angle}) => angle??'skewX(30deg)'};
    color: ${({theme}) => theme==='light'?'black':'white'}        
`


const ConnectWallet = () => {

    
  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined
  );
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
    undefined
  );

  const connectWallet = async () => {
    // @ts-ignore
    const { solana } = window;

    if (solana) {
      try {
        const response = await solana.connect();
        console.log('wallet account ', response.publicKey.toString());
        setWalletKey(response.publicKey.toString());
      } catch (err) {
       // { code: 4001, message: 'User rejected the request.' }
      }
    }
  };

  /* @description disconnect Phantom wallet
  */
 const disconnectWallet = async () => {
   // @ts-ignore
   const { solana } = window;

   if (walletKey && solana) {
     await (solana as PhantomProvider).disconnect();
     setWalletKey(undefined);
   }
 };
    // detect phantom provider exists
  useEffect(() => {
    const provider = getProvider();

    if (provider) setProvider(provider);
    else setProvider(undefined);
  }, []);

  /**
 * @description gets Phantom provider, if it exists
 */
  const getProvider = (): PhantomProvider | undefined => {
    if ("solana" in window) {
      // @ts-ignore
      const provider = window.solana as any;
      if (provider.isPhantom) return provider as PhantomProvider;
    }
  };


    return (
        <>
            { provider&&walletKey&&
                <Button width="130px" onClick={disconnectWallet}>            
                <Text>{String(walletKey).substring(0,5)+'...'+String(walletKey).substring(12,15)}</Text>
                </Button>
            }
            { provider&&!walletKey&&
                <Button width="130px" onClick={connectWallet}>            
                <Text>Connect Wallet</Text>
                </Button>
            }
            { !provider&&
                <p>                
                    <a href="https://phantom.app/"><Text angle="330">Install Wallet</Text></a>
                </p>
            }        
        </>        
    )
}

export default ConnectWallet;