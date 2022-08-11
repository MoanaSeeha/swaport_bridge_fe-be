import './style.css'

import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ethers } from 'ethers';

import { connectedAccount, connectedChain } from "../../store/accountReducer";
import ERC20ABI from '../../abis/ERC20.json';
import BridgeAssistAbi from '../../abis/BridgeAssist.json';

import SelectBridge from '../../components/SelectBridge'
const url = 'https://dbxbridge.uc.r.appspot.com/process';

const MainPage = () => {
  const from_data = [
    {
      chainName: 'Ethereum',
      chainIcon: '/main/ethereum.svg',
      // coinName: 'ETH',
      coinIcon: '/main/ethereum.svg',
      address: '0x3cbc780d2934d55a06069e837fabd3e6fc23dab0',
      bridge: ['0x227996B1f17c5E8caB4Cc843124f0Cf6399d37D9', '0xd274515b94fAb45639136a5BFF74F704509680c7'],
      chainId: '1', //mainnet,
      native: false
    },
    {
      chainName: 'Binance Smart Chain',
      chainIcon: '/main/binance.svg',
      // coinName: 'BSC',
      coinIcon: '/main/binance.svg',
      address: '0x67dcAa9468c219ad81F5825EF0c8f58879c657dd',
      bridge: ['0xE562014651C191178CA2Be7f86910760Ce957C7f', '0x3A893beAC002c85CB6D85865C66093F420483FE2'],
      chainId: '56',
      native: false
    },
    {
      chainName: 'DBX Smart Network',
      chainIcon: '/main/dbx.svg',
      // coinName: 'DBX',
      coinIcon: '/main/dbx.svg',
      address: '0x759fCEf9B28A089575A99f1544ECB976722FCd18',
      bridge: ['0x547e9337C88ADFe32C2A9e5273F281b813FB085D'],
      chainId: '5348',
      native: true
    },
  ]

  const [transferStatus, setTransferStatus] = useState(false);
  // const[pendingStatus,setPendingStatus] = useState(false);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const connected_account = useSelector(connectedAccount);
  let signer = connected_account === ''?null:provider.getSigner(connected_account);
  const connected_chain = useSelector(connectedChain);
  console.log(connected_chain, typeof connected_chain);

  const transferHandler = async () => {
    // setTransferStatus(true)
    // console.log('transferStatus')

    console.log(connected_chain, from_data[selectedIndex.A].chainId, connected_account)
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

        // if(!pendingStatus) {
          if(amount.A !== 0 && amount.A !== '') {
            // console.log(ethers.BigNumber.from(amount.A).mul(ethers.BigNumber.from(10).pow(unit)).toString(), (ethers.BigNumber.from(amount.A).mul(ethers.BigNumber.from(10).pow(unit)) - a).toString())
            // if(a <= ethers.BigNumber.from(amount.A).mul(ethers.BigNumber.from(10).pow(unit))) {
              // console.log('bbbbbbbbbb')
              if(from_data[selectedIndex.A].native) {
                const BAX = new ethers.Contract(bridge_address, BridgeAssistAbi, signer)
                const ptx = await BAX.populateTransaction.writeEntry(
                  direction === "XE"
                );
                console.log(ptx);
                ptx.value = ethers.utils.parseEther(amount.A.toString());
                console.log({
                  amt: amount.A.toString(),
                });
                const tx = await signer.sendTransaction(ptx);
                console.log({ tx });
                // await _wait();

              } else {
                let unit = await token.decimals();
                let a = await token.allowance( connected_account, bridge_address);
                await token.approve(bridge_address, ethers.BigNumber.from(amount.A).mul(ethers.BigNumber.from(10).pow(unit)) - a);
                token.on('Approval',async (owner, spender, value) => {
                  console.log(value.toString() !== '0');
                  if(value.toString() !== '0') {
                    let trans = await axios.get(`${url}?direction=${direction}&address=${connected_account}`);
                    console.log(trans)
                    // setPendingStatus(false)
                  }
                })
              }

              
            // } else {
            //   let trans = await axios.get(`${url}?direction=${direction}&address=${connected_account}&coinDirection=SS`);
            //     console.log(trans)
            //     setPendingStatus(false)
            // }     
          }
          else  { alert('Input Amount to Transfer'); return;};
        // }
      } 
    }else {
      alert('Switch Network to' + from_data[selectedIndex.A].coinName);
    }
  }
  const[selectedIndex,selectIndex] = useState({
    A:0,B:1
  });
  const[amount,setAmount] = useState({
    A: 0,
    B: 0
  });

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
            <SelectBridge data={from_data} neighbourId={selectedIndex.B} onChange={(e) => {
              selectIndex({A:e,B:selectedIndex.B})
            }} />
          </div>
        </div>
        {/* TO  */}
        <div className="to_text">To</div>
        <div className="select_input">
          <input type="text" value={'~'+(amount.A-amount.A/100*2)}/>
          <div className="balance_text">
            <span className="balance">Balance:</span>{' '}
            <span className="dbx">{} DBX</span>
          </div>{' '}
          <div className="max_text">
            <span className="max_number">00.00</span>{' '}
            <span className="max_color">MAX</span>
          </div>
          <div className="select_coin">
            <SelectBridge data={from_data} neighbourId={selectedIndex.A} onChange={(e) => {
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

export default MainPage

// export default MainPage
