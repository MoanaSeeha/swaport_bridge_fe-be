import './style.css'

import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';
import { useSelector } from 'react-redux';

import { connectedAccount } from "../../store/accountReducer";
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import SelectSwap from '../../components/SelectSwap'
import RouterABI from '../../abis/v2Router.json';

const Swap = () => {
  const tokens_data = [
    {
      chainName: 'USDC',
      chainIcon: '/coin/usdt.svg',
      //   coinName: 'ETH',
      coinIcon: '/coin/usdt.svg',
      address:'0xd02F9F362d147Ee8F66BdfAfafa5Fa073cad67d5'
    },
    {
      chainName: 'USDT',
      chainIcon: '/coin/usdc.svg',
      //   coinName: 'BSC',
      coinIcon: '/coin/usdc.svg',
      address:'0xbD790D62FCB1ee94Fe1A89ec155DCB7fb82d85FB'
    },
  ];
  
  const [connectStatus, setConnectStatus] = useState(false)
  const [mobileStatus, setMobileStatus] = useState(false)
  const [transferStatus, setTransferStatus] = useState(false)
  const [open, setOpen] = useState(false)
  const [toOpen, setToOpen] = useState(false)
  const [selectedTokenInfo,setselectedTokenInfo] = useState({
    A: {
      address:'',
      amount:''
    },
    B: {
      address:'',
      amount:''
    },
    path: ['0xd02F9F362d147Ee8F66BdfAfafa5Fa073cad67d5', '0xbD790D62FCB1ee94Fe1A89ec155DCB7fb82d85FB']
  });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const connected_account = useSelector(connectedAccount);
  const transferHandler = async() => {
    setTransferStatus(true);
    console.log(selectedTokenInfo.A.address, selectedTokenInfo.B.address);
    const signer = provider.getSigner(connected_account);
    const router = new ethers.Contract('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', RouterABI, signer);
    let a = await router.getReserves('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', selectedTokenInfo.A.address, selectedTokenInfo.B.address);
    console.log('reserve', a);
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
          <input type="text" placeholder="Transfer amount" onChange={(e) => {
            setselectedTokenInfo({
              B:selectedTokenInfo.B, 
              A:{
                address:selectedTokenInfo.A.address,
                amount:e.target.value
              },
              path: selectedTokenInfo.path
            }) 
            
          }}/>
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
              data={tokens_data}
              onChange={(e) => {
                setselectedTokenInfo({
                  B:selectedTokenInfo.B, 
                  A:{
                    address:tokens_data[e].address,
                    amount:selectedTokenInfo.A.amount
                  },
                  path: selectedTokenInfo.path
                }) 
              }}
              setOpen={setOpen}
              open={open}
            />
          </div>
        </div>
        {/* TO  */}
        <div className="to_text_swap">To</div>
        <div className="select_input_swap">
          <input type="text" onChange={(e) => {
            setselectedTokenInfo({
              A:selectedTokenInfo.A, 
              B:{
                address:selectedTokenInfo.B.address,
                amount:e.target.value
              },
              path: selectedTokenInfo.path
            }) 
            
          }}/>
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
              data={tokens_data}
              onChange={(e) => {
                setselectedTokenInfo({
                  A:selectedTokenInfo.A, 
                  B:{
                    address:tokens_data[e].address,
                    amount:selectedTokenInfo.B.amount
                  },
                  path: selectedTokenInfo.path
                }) 
              }}
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
