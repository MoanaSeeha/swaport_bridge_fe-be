import './style.css'

import React, { useState } from 'react'

import SelectBridge from '../../components/SelectBridge'

const MainPage = () => {
  const from_data = [
    {
      chainName: 'Ethereum',
      chainIcon: '/main/ethereum.svg',
      // coinName: 'ETH',
      coinIcon: '/main/ethereum.svg',
    },
    {
      chainName: 'Binance Smart Chain',
      chainIcon: '/main/binance.svg',
      // coinName: 'BSC',
      coinIcon: '/main/binance.svg',
    },
    {
      chainName: 'DBX Smart Network',
      chainIcon: '/main/dbx.svg',
      // coinName: 'DBX',
      coinIcon: '/main/dbx.svg',
    },
  ]
  const to_data = [
    {
      chainName: 'Binance Smart Chain',
      chainIcon: '/main/binance.svg',
      // coinName: 'BSC',
      coinIcon: '/main/binance.svg',
    },
    {
      chainName: 'Ethereum',
      chainIcon: '/main/ethereum.svg',
      // coinName: 'ETH',
      coinIcon: '/main/ethereum.svg',
    },

    {
      chainName: 'DBX Smart Network',
      chainIcon: '/main/dbx.svg',
      // coinName: 'DBX',
      coinIcon: '/main/dbx.svg',
    },
  ]

  const [transferStatus, setTransferStatus] = useState(false)
  const transferHandler = () => {
    setTransferStatus(true)
    console.log('transferStatus')
  }

  return (
    <div className="">
      <div className="stable_content">
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
        <div className="select_input">
          <input type="text" placeholder="Transfer amount" />
          <div className="balance_text">
            <span className="balance">Balance:</span>
            <span className="dbx">{} DBX</span>
          </div>
          <div className="max_text">
            <span className="max_number">00.00</span>{' '}
            <span className="max_color">MAX</span>
          </div>

          <div className="select_coin">
            <SelectBridge data={from_data} onChange={() => {}} />
          </div>
        </div>
        {/* TO  */}
        <div className="to_text">To</div>
        <div className="select_input">
          <input type="text" />
          <div className="balance_text">
            <span className="balance">Balance:</span>{' '}
            <span className="dbx">{} DBX</span>
          </div>{' '}
          <div className="max_text">
            <span className="max_number">00.00</span>{' '}
            <span className="max_color">MAX</span>
          </div>
          <div className="select_coin">
            <SelectBridge data={to_data} onChange={() => {}} />
          </div>
        </div>
        {/* Transfer */}
        <div className="transfer_button" onClick={transferHandler}>
          TRANSFER
        </div>
      </div>
    </div>
  )
}

export default MainPage

// export default MainPage
