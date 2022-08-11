import './style.css'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Header'
import { connect, isConnected, setChain } from "../../store/accountReducer";

const Layout = (props) => {
  const [connectStatus, setConnectStatus] = useState(false)
  const is_Connected = useSelector(isConnected);
  const dispatch = useDispatch();

  const connectMetamaskHandler = async () => {
    if(!is_Connected) {
      await window.ethereum.send("eth_requestAccounts");
      dispatch(setChain(window.ethereum?.networkVersion));
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {}}]
      });
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts[0]) dispatch(connect({account: accounts[0]}))
      setConnectStatus(false)
    }
    else {
      dispatch(setChain(window.ethereum?.networkVersion));
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts[0]) dispatch(connect({account: accounts[0]}))
    }
  }

  useEffect(()=>{
    connectMetamaskHandler();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        connectMetamaskHandler();
      });
      window.ethereum.on("accountsChanged", () => {
        connectMetamaskHandler();
      });
    }
  });

  const connectWalletHandler = () => {}
  return (
    <div className="homepage">
      {connectStatus === true ? (
        <div
          className="connect_modal"
          onClick={() => {
            setConnectStatus(false)
          }}
        ></div>
      ) : null}
      {connectStatus === true ? (
        <div className="connect_modal_body">
          <div className="connect_modal_content">
            <div className="connect_modal_text">
              <span>Connect using</span>
            </div>
            <div className="chain_btns">
              <div className="metabask_btn" onClick={connectMetamaskHandler}>
                <div className="metamask_img">
                  <img src="/stable/metamask.svg" alt="" />
                </div>
                <div className="metamask_text">MetaMask</div>
              </div>
              <div className="wallet_btn" onClick={connectWalletHandler}>
                <div className="wallet_img">
                  <img src="/stable/walletConnect.svg" alt="" />
                </div>
                <div className="wallet_text">WalletConnect</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="homepage_background">
        <img src="/stable/stableBg.svg" alt=''/>
      </div>
      <div className="header_part">
        <Header setConnectStatus={setConnectStatus} />
      </div>
      <div className="main_content">{props.children}</div>
    </div>
  )
}
export default Layout
