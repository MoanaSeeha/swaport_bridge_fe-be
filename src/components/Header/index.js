import './style.css'

import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom'

import { isConnected, connectedAccount } from "../../store/accountReducer"

const Header = (props) => {
  const connectHandler = () => {
    props.setConnectStatus(true)
    console.log('connectStatus>>>')
    
  }
  const is_Connected = useSelector(isConnected);
  const account = useSelector(connectedAccount);
  const [mobile, setMobile] = useState(false)
  const [mobilePageShow, setMobilePageShow] = useState('Bridge')
  const swapStatusHandler = () => {
    // setSwapStatus(true)
    // setStableStatus(false)
    // setBridgeStatus(false)
    // setLiquidityStatus(false)
    setMobile(false)
    setMobilePageShow('Swap')
  }
  const stableStatusHandler = () => {
    // setStableStatus(true)
    // setSwapStatus(false)
    // setBridgeStatus(false)
    // setLiquidityStatus(false)
    setMobile(false)
    setMobilePageShow('Stable')
  }
  const bridgeStatusHandler = () => {
    // setBridgeStatus(true)
    // setSwapStatus(false)
    // setStableStatus(false)
    // setLiquidityStatus(false)
    setMobile(false)
    setMobilePageShow('Bridge')
  }
  const liquidityStatusHandler = () => {
    // setLiquidityStatus(true)
    // setSwapStatus(false)
    // setStableStatus(false)
    // setBridgeStatus(false)
    setMobile(false)
    setMobilePageShow('Liquidity')
  }

  const params = useLocation();
  console.log('params', params);
  return (
    <div className="header">
      {mobile === true ? (
        <div>
          <div className="mobile_head">
            <div
              className="empty_mobile"
              onClick={() => {
                setMobile(false)
              }}
            ></div>
            <div className="mobile_herader_content">
              <div
                onClick={() => {
                  setMobile(false)
                }}
              >
                <img src="/stable/whiteCloseBtn.svg" alt=''/>
              </div>
              <div className="mobile_four_btn">
                <div onClick={swapStatusHandler}>
                  <Link
                    to="/swap"
                    className="swap_btn"
                    style={{
                      color: '#BBC0C3',
                      textDecoration: 'none',
                    }}
                  >
                    Swap
                  </Link>
                </div>
                <div onClick={stableStatusHandler}>
                  <Link
                    to="/stable"
                    className="stable_btn"
                    style={{
                      color: '#BBC0C3',
                      textDecoration: 'none',
                    }}
                  >
                    Stables
                  </Link>
                </div>
                <div onClick={bridgeStatusHandler}>
                  <Link
                    to="/"
                    className="bridge_btn"
                    style={{
                      color: '#BBC0C3',
                      textDecoration: 'none',
                    }}
                  >
                    Bridge
                  </Link>
                </div>
                <div onClick={liquidityStatusHandler}>
                  <Link
                    to="/liquidity"
                    className="liquidity_btn"
                    style={{
                      color: '#BBC0C3',
                      textDecoration: 'none',
                    }}
                  >
                    Liquidity
                  </Link>
                </div>
              </div>
              <div
                className="mobile_connect"
                onClick={() => {
                  props.setConnectStatus(true)
                }}
              >
                {!is_Connected?'Connect':account.substring(0, 5) + '...'+account.substring(account.length-4, account.length)}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className="header_layout">
        <div className="header_logo">
          <span className="logo_one">
            <img src="/header/logo.svg" width={50} height={50} alt="" />
          </span>
          <span className="logo_two">
            <img src="/header/logoText.svg" alt="" />
          </span>
          <span className="mobile_page_show">{mobilePageShow}</span>
        </div>

        <div className="header_three">
          <div className="" onClick={swapStatusHandler}>
            <Link to="/swap" className="link_btn">
              Swap
            </Link>
            {params.pathname === '/swap' ? <div className="border_bottom"></div> : null}
          </div>
          <div onClick={stableStatusHandler}>
            <Link to="/stable" className="link_btn">
              Stable
            </Link>
            {params.pathname === '/stable' ? (
              <div className="border_bottom"></div>
            ) : null}
          </div>
          <div onClick={bridgeStatusHandler}>
            <Link to="/" className="link_btn">
              Bridge
            </Link>
            {params.pathname === '/' ? (
              <div className="border_bottom"></div>
            ) : null}
          </div>
          <div onClick={liquidityStatusHandler}>
            <Link to="/liquidity" className="link_btn">
              Liquidity
            </Link>
            {params.pathname === '/liquidity' ? (
              <div className="border_bottom"></div>
            ) : null}
          </div>
        </div>
        <div className="header_connect" onClick={connectHandler}>
        {!is_Connected?'Connect':account.substring(0, 5) + '...'+account.substring(account.length-4, account.length)}
        </div>
        <div
          className="mobile_btn"
          onClick={() => {
            setMobile(true)
          }}
        >
          <img src="/mobile/mobile_btn.svg" alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Header
