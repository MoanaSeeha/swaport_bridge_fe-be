import './style.css'

import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import SelectSwap from '../../components/SelectSwap'

const Swap = () => {
  const from_data = [
    {
      chainName: 'BNB',
      chainIcon: '/coin/usdt.svg',
      //   coinName: 'ETH',
      coinIcon: '/coin/usdt.svg',
    },
    {
      chainName: 'USDC',
      chainIcon: '/coin/usdc.svg',
      //   coinName: 'BSC',
      coinIcon: '/coin/usdc.svg',
    },
    {
      chainName: 'XUS',
      chainIcon: '/coin/xus.svg',
      //   coinName: 'DBX',
      coinIcon: '/coin/xus.svg',
    },
  ]
  const to_data = [
    {
      chainName: 'BTC',
      chainIcon: '/coin/usdc.svg',
      //   coinName: 'BNB',
      coinIcon: '/coin/usdc.svg',
    },
    {
      chainName: 'USDT',
      chainIcon: '/coin/usdt.svg',
      //   coinName: 'ETH',
      coinIcon: '/coin/usdt.svg',
    },
    {
      chainName: 'XUS',
      chainIcon: '/coin/xus.svg',
      //   coinName: 'DBX',
      coinIcon: '/coin/xus.svg',
    },
  ]
  const [connectStatus, setConnectStatus] = useState(false)
  const [mobileStatus, setMobileStatus] = useState(false)
  const [transferStatus, setTransferStatus] = useState(false)
  const [open, setOpen] = useState(false)
  const [toOpen, setToOpen] = useState(false)

  const transferHandler = () => {
    setTransferStatus(true)
    console.log('transferStatus')
  }
  const connectMetamaskHandler = () => {}
  const connectWalletHandler = () => {}
  return (
    <div className="">
      <div className="swap_content">
        {transferStatus === true ? (
          <div className="transfer_modal">
            <div className="transfer_modal_layout">
              <div
                className="close_btn"
                onClick={() => {
                  setTransferStatus(false)
                }}
              >
                <img src="/stable/closeBtn.svg" alt="" />
              </div>
              <div className="transfer_modal_text">
                <span>You selected wrong network.</span>
                <span>Change your network to ERC20 in</span>
                <span>your provider (MetaMask)</span>
              </div>
              <div className="transfer_modal_topic_text">Related topics:</div>
              <div
                className="transfer_one_btn"
                onClick={() => {
                  setTransferStatus(false)
                }}
              >
                <span>How to change network in MetaMask</span>
              </div>
              <div
                className="transfer_two_btn"
                onClick={() => {
                  setTransferStatus(false)
                }}
              >
                <span>How to add DBX Smart Network to</span>
                <span>MetaMask</span>
              </div>
            </div>
          </div>
        ) : null}
        {/* From */}
        <div className="from_text">From</div>
        <div className="select_input_swap">
          <input type="text" placeholder="Transfer amount" />
          <div className="balance_text_swap">
            <span className="balance">Balance:</span>
            <span className="dbx">{} DBX</span>
          </div>
          <div className="max_text_swap">
            <span className="max_number">00.00</span>{' '}
            <span className="max_color">MAX</span>
          </div>

          <div className="select_coin">
            <SelectSwap
              data={from_data}
              onChange={() => {}}
              setOpen={setOpen}
              open={open}
            />
          </div>
        </div>
        {/* TO  */}
        <div className="to_text_swap">To</div>
        <div className="select_input_swap">
          <input type="text" />
          <div className="balance_text_swap">
            <span className="balance">Balance:</span>{' '}
            <span className="dbx">{} DBX</span>
          </div>{' '}
          <div className="max_text_swap">
            <span className="max_number">00.00</span>{' '}
            <span className="max_color">MAX</span>
          </div>
          <div className="select_coin">
            <SelectSwap
              data={to_data}
              onChange={() => {}}
              setOpen={setToOpen}
              open={toOpen}
            />
          </div>
        </div>
        {/* Transfer */}
        <div className="transfer_button_swap" onClick={transferHandler}>
          TRANSFER
        </div>
      </div>
    </div>
  )
}

export default Swap

// export default MainPage
