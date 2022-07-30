import './style.css'

import React, { useState } from 'react'
import axios from 'axios';

import SelectStable from '../../components/SelectStable'

const url = 'http://172.31.20.252:3002/info/';
const Stable = () => {
  const from_data = [
    {
      chainName: 'USDT',
      chainIcon: '/coin/usdt.svg',
      coinName: 'ETH',
      coinIcon: '/coin/usdt.svg',
    },
    {
      chainName: 'USDC',
      chainIcon: '/coin/usdc.svg',
      coinName: 'BSC',
      coinIcon: '/coin/usdc.svg',
    },
    {
      chainName: 'XUS',
      chainIcon: '/coin/xus.svg',
      coinName: 'DBX',
      coinIcon: '/coin/xus.svg',
    },
  ]
  // const [transferStatus, setTransferStatus] = useState(false)
  const[selectedIndex,selectIndex] = useState({
    A:0,B:0
  });
  const[amount,setAmount] = useState({
    A: 0,
    B: 0
  });
  const transferHandler = async () => {
    // setTransferStatus(true)
    console.log('transferStatus')
    if(selectedIndex.A !== selectedIndex.B) {
      console.log(await axios.get(url));
    }
  }

  return (
    <div className="stable_page">
      <div className="stable_content">
        {/* {transferStatus === true ? (
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
        ) : null} */}
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
            <SelectStable data={from_data} onChange={(e) => {
              selectIndex({A:e,B:selectedIndex.B})
            }} />
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
            <SelectStable data={from_data} onChange={(e) => {
              selectIndex({B:e,A:selectedIndex.A})
            }} />
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

export default Stable
