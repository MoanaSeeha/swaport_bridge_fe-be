import './style.css'

import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { ToastContainer, toast } from 'react-toastify';

import { connectedAccount, connectedChain } from "../../store/accountReducer";
import SelectStable from '../../components/SelectStable'
import ERC20ABI from '../../abis/ERC20.json';

const url = 'https://swaport-stable-bridge-bot.vercel.app/process';
const Stable = () => {
  const from_data = [
    {
      chainName: 'USDT',
      chainIcon: '/coin/usdt.svg',
      coinName: 'ETH',
      coinIcon: '/coin/usdt.svg',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      bridge: ['0x0Cb3E433522981986a4f3b8ab00471e165467c27', '0x99908fd126a6021a5c132c464dfde83461aa9ba4'],
      chainId: '1'
    },
    {
      chainName: 'USDC',
      chainIcon: '/coin/usdc.svg',
      coinName: 'BSC',
      coinIcon: '/coin/usdc.svg',
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      bridge: ['0x7159a5d1F3917331a38817F9d1f02bd8A909BCA9', '0x5B5409dC681d28fF023d63D32a45680E8512D62e'],
      chainId: '56'
    },
    {
      chainName: 'XUS',
      chainIcon: '/coin/xus.svg',
      coinName: 'DBX',
      coinIcon: '/coin/xus.svg',
      address: '0x91efa3FC448b7FCD40880F3ef650eB99635e6143',
      bridge: ['0xD316FF00Df4aF261D82595cF26555a5bd80D418d'],
      chainId: '5348'
    },
  ]
  // const [transferStatus, setTransferStatus] = useState(false)
  const[selectedIndex,selectIndex] = useState({
    A:0,B:1
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
        // let a = await token.allowance( connected_account, '0x92FC9aDEbbA70647Eb2452930799a8a5eCd03FD8');
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
          else  { toast.error("Input Amount to Transfer", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
          }); return;};
        }
      } 
    }else {
      toast.error("Switch Network to " + from_data[selectedIndex.A].coinName, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
      })
    }
  }
  

  return (
    <div className="stable_page">
      <ToastContainer />
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
            <SelectStable data={from_data} neighbourId={selectedIndex.B} onChange={(e) => {
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
            <SelectStable data={from_data} neighbourId={selectedIndex.A} onChange={(e) => {
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
