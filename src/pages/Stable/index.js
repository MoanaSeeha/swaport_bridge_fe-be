import './style.css'

import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';

import { connectedAccount, connectedChain } from "../../store/accountReducer";
import SelectStable from '../../components/SelectStable'
import ERC20ABI from '../../abis/ERC20.json';

const url = 'https://salty-garden-00109.herokuapp.com/process';
const Stable = () => {
  const from_data = [
    {
      chainName: 'USDT',
      chainIcon: '/coin/usdt.svg',
      coinName: 'ETH',
      coinIcon: '/coin/usdt.svg',
      address: '0x272668504C618699486c766Cf5364C9A089b5284',
      bridge: ['0x83C4f25d0B22031073BD876e2B3b7453646bC3a9', '0x4BaeA38A23C4D2Dd74678646Dc6D94d39f8CE49f'],
      chainId: '4' //testnet
    },
    {
      chainName: 'USDC',
      chainIcon: '/coin/usdc.svg',
      coinName: 'BSC',
      coinIcon: '/coin/usdc.svg',
      address: '0x5aE1a10943779fa6a9C31e9Ee65eaED6B0eC3917',
      bridge: ['0xE66b3b435ef7Cf745200bB21469911C13b59795b', '0xa31Bd8EFb32E509C9B8686cE9652c86C5331717d'],
      chainId: '97'
    },
    {
      chainName: 'XUS',
      chainIcon: '/coin/xus.svg',
      coinName: 'DBX',
      coinIcon: '/coin/xus.svg',
      address: '0x759fCEf9B28A089575A99f1544ECB976722FCd18',
      bridge: ['0xC31f86a4AB0c5964b4c1f3c5BeB42128A722638C'],
      chainId: '48366'
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
  const[pendingStatus,setPendingStatus] = useState(false);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const connected_account = useSelector(connectedAccount);
  let signer = connected_account === ''?null:provider.getSigner(connected_account);
  const connected_chain = useSelector(connectedChain);
  console.log(connected_chain, typeof connected_chain);
  const transferHandler = async () => {
    // setTransferStatus(true)
    
    console.log(connected_chain, from_data[selectedIndex.A].chainId)
    if(connected_chain === from_data[selectedIndex.A].chainId) {
      if(selectedIndex.A !== selectedIndex.B) {
        let direction = '';
        let bridge_address = '';
        switch(selectedIndex.A) {
          case 0:
            if(selectedIndex.B === 1)
              {
                direction="EB"
                bridge_address = from_data[selectedIndex.A].bridge[0]
              } else { 
                direction="EX";
                bridge_address = from_data[selectedIndex.A].bridge[1]
              }
            break;
          case 1:
            if(selectedIndex.B === 0) {
              direction="BE";
              bridge_address = from_data[selectedIndex.A].bridge[0]
            } else {
              direction="BX";
              bridge_address = from_data[selectedIndex.A].bridge[1]
            }
            break;
          case 2:
            if(selectedIndex.B === 0) {
              direction="XE"
            } else {
              direction="XB";
            }
            bridge_address = from_data[selectedIndex.A].bridge[0]
            break;  
          default: break;
        }
        const token = new ethers.Contract(from_data[selectedIndex.A].address, ERC20ABI, signer);
        console.log('first', bridge_address, direction, amount.A)
        // let a = await token.allowance( connected_account, '0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a');
        // if(a <= ethers.BigNumber.from(selectedTokenInfo.A.amount))

        if(!pendingStatus) {
          // console.log('sdfsdfsdf')
          if(amount.A !== 0 && amount.A !== '') {
            // console.log('aaaaaaaa')
            setPendingStatus(true)
            let unit = await token.decimals();
            let a = await token.allowance( connected_account, bridge_address);
            // console.log(ethers.BigNumber.from(amount.A).mul(ethers.BigNumber.from(10).pow(unit)).toString(), (ethers.BigNumber.from(amount.A).mul(ethers.BigNumber.from(10).pow(unit)) - a).toString())
            // if(a <= ethers.BigNumber.from(amount.A).mul(ethers.BigNumber.from(10).pow(unit))) {
              // console.log('bbbbbbbbbb')
              await token.approve(bridge_address, ethers.BigNumber.from(amount.A).mul(ethers.BigNumber.from(10).pow(unit)) - a);
              token.on('Approval',async (owner, spender, value) => {
                console.log(value.toString() !== '0');
                if(value.toString() !== '0') {
                  let trans = await axios.get(`${url}?direction=${direction}&address=${connected_account}&coinDirection=SS`);
                  console.log(trans)
                  setPendingStatus(false)
                }
              })
            // } else {
            //   let trans = await axios.get(`${url}?direction=${direction}&address=${connected_account}&coinDirection=SS`);
            //     console.log(trans)
            //     setPendingStatus(false)
            // }     
          }
          else  { alert('Input Amount to Transfer'); return;};
        }
      } 
    }else {
      alert('Switch Network to' + from_data[selectedIndex.A].coinName);
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
          <input type="text" placeholder="Transfer amount" onChange={e => setAmount({A:e.target.value})}/>
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
