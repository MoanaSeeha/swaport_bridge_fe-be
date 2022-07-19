import './style.css'

import React, { useEffect, useState } from 'react'

import Header from '../Header'
import { Link } from 'react-router-dom'

const Layout = (props) => {
  const [connectStatus, setConnectStatus] = useState(false)
  const connectMetamaskHandler = () => {}
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
        <img src="/stable/stableBg.svg" />
      </div>
      <div className="header_part">
        <Header setConnectStatus={setConnectStatus} />
      </div>
      <div className="main_content">{props.children}</div>
    </div>
  )
}
export default Layout
