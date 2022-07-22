import './style.css'

import React, { useEffect, useState } from 'react'
import { BigNumber, ethers } from "ethers";
import { useSelector } from 'react-redux';

import { connectedAccount } from "../../store/accountReducer";
import Header from '../../components/Header'
import { Link, Route } from 'react-router-dom'
import SelectSwap from '../../components/SelectSwap'
import RouterABI from '../../abis/v2Router.json';
import FactoryABI from '../../abis/v2Factory.json';
import PairABI from '../../abis/v2Pair.json';
import ERC20ABI from '../../abis/ERC20.json';

const Swap = () => {
  const tokens_data = [
    {
      chainName: "STKN",
      chainIcon: "/coin/usdc.svg",
      coinIcon: "/coin/usdc.svg",
      address: '0x90c1eF1854ECbF69F418f7F0827D3E986Ad64b50'
    },
    {
      chainName: "USDT",
      chainIcon: "/coin/usdt.svg",
      coinIcon: "/coin/usdt.svg",
      address: '0xbD790D62FCB1ee94Fe1A89ec155DCB7fb82d85FB'
    },

    {
      chainName: "DBX",
      chainIcon: "/coin/xus.svg",
      coinIcon: "/coin/xus.svg",
      address: '0'
    },
  ];
  const weth_add = '0x532F25428465f9C684A1905F9A8aa93357B2048A';
  
  const [connectStatus, setConnectStatus] = useState(false)
  const [mobileStatus, setMobileStatus] = useState(false)
  const [transferStatus, setTransferStatus] = useState(false)
  const [open, setOpen] = useState(false)
  const [toOpen, setToOpen] = useState(false)
  const [selectedTokenInfo,setselectedTokenInfo] = useState({
    A: {
      address:'',
      amount:0
    },
    B: {
      address:'',
      amount:0
    },
    path: ['0xd02F9F362d147Ee8F66BdfAfafa5Fa073cad67d5', '0xbD790D62FCB1ee94Fe1A89ec155DCB7fb82d85FB']
  });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const connected_account = useSelector(connectedAccount);

  const[inputValueMode,setinputValueMode] = useState(false);
  const[reserves,setreserves] = useState(0);
  const setReceiveAmount = async (a, b) => {
    if(a === '0') a = weth_add;
    if(b === '0') b = weth_add;
    if(a !== b && a !== '' && b !== '') {
      const signer = provider.getSigner(connected_account);
      const factory = new ethers.Contract('0xBa34d77fD403dd802510621e34C6Fa4238067aaa', FactoryABI, signer);
      let pairaddress = await factory.getPair(a, b);
      if(pairaddress !== '0x0000000000000000000000000000000000000000') {
        const pair = new ethers.Contract(pairaddress, PairABI, signer);
        let reserves = await pair.getReserves();
        let token0 = await pair.token0();
        if(token0 === a) setreserves(Number(reserves[0].toString())/Number(reserves[1].toString()));
        else setreserves(Number(reserves[1].toString())/Number(reserves[0].toString()))
      }
      else {
        alert('Insufficient Liquidity');
        setreserves(0);
      }
    }
    else {
      setreserves(0);
    }
  }

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
          <input type="text" placeholder="Transfer amount" onChange={async (e) => {   
            setselectedTokenInfo({
              B:{
                amount:reserves === 0?0:Number(e.target.value) / reserves,
                address:selectedTokenInfo.B.address
              },
              A:{
                address:selectedTokenInfo.A.address,
                amount:Number(e.target.value)
              },
              path: selectedTokenInfo.path
            }) 
            await setReceiveAmount(selectedTokenInfo.A.address, selectedTokenInfo.B.address);
            
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
              onChange={async (e) => {
                await setselectedTokenInfo({
                  B:selectedTokenInfo.B, 
                  A:{
                    address:tokens_data[e].address,
                    amount:Number(selectedTokenInfo.A.amount)
                  },
                  path: selectedTokenInfo.path
                }) 
                setReceiveAmount(tokens_data[e].address, selectedTokenInfo.B.address);
              }}
              setOpen={setOpen}
              open={open}
            />
          </div>
        </div>
        {/* TO  */}
        <div className="to_text_swap">To</div>
        <div className="select_input_swap">
          <input type="text" disabled value={
            reserves === 0?0:selectedTokenInfo.A.amount / reserves
          }
          onChange={(e) => {  

            setselectedTokenInfo({
              A:selectedTokenInfo.A, 
              B:{
                address:selectedTokenInfo.B.address,
                amount:Number(e.target.value)
              },
              path: selectedTokenInfo.path
            }) }}
          />
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
              onChange={async (e) => {
                await setselectedTokenInfo({
                  A:selectedTokenInfo.A, 
                  B:{
                    address:tokens_data[e].address,
                    amount:selectedTokenInfo.B.amount
                  },
                  path: selectedTokenInfo.path
                }) 
                setReceiveAmount(selectedTokenInfo.A.address, tokens_data[e].address);
              }}
              setOpen={setToOpen}
              open={toOpen}
            />
          </div>
        </div>
        {/* Transfer */}
        <div className="transfer_button_swap" onClick={async () => {
          if(selectedTokenInfo.A.amount !== 0 && selectedTokenInfo.B.amount !== 0) {
            const signer = provider.getSigner(connected_account);
            const Router = new ethers.Contract('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', RouterABI, signer);

            let tokenNameA, tokenUnitsA, tokenbalance, tokenBalanceA, tokenSymbolA, tokenNameB, tokenUnitsB, tokenbalanceb, tokenBalanceB, tokenSymbolB;
            if(selectedTokenInfo.A.address === '0') {
              tokenNameA = 'DBX';
              tokenUnitsA = 18;
              tokenbalance = await provider.getBalance(connected_account);
              tokenBalanceA = ethers.utils.formatEther(tokenbalance);
              tokenSymbolA = 'DBX';
            } else {
              const token_A = new ethers.Contract(selectedTokenInfo.A.address, ERC20ABI, provider);
              tokenNameA = await token_A.name();
              tokenUnitsA = await token_A.decimals();
              tokenbalance = await token_A.balanceOf(connected_account);
              tokenBalanceA = ethers.utils.formatUnits(tokenbalance, tokenUnitsA);
              tokenSymbolA = await token_A.symbol();
            } 
            if(selectedTokenInfo.B.address === '0') {
              tokenNameB = 'DBX';
              tokenUnitsB = 18;
              tokenbalance = await provider.getBalance(connected_account);
              tokenBalanceB = ethers.utils.formatEther(tokenbalance);
              tokenSymbolB = 'DBX';
            } else {
              const token_B = new ethers.Contract(selectedTokenInfo.B.address, ERC20ABI, signer);
              tokenNameB = await token_B.name();
              tokenUnitsB = await token_B.decimals();
              tokenbalanceb = await token_B.balanceOf(connected_account);
              tokenBalanceB = ethers.utils.formatUnits(tokenbalanceb, tokenUnitsB);
              tokenSymbolB = await token_B.symbol();
            }

            if(selectedTokenInfo.A.address === '0') {
              const options = {value: ethers.utils.parseEther(selectedTokenInfo.A.amount.toString())}
              await Router.swapExactETHForTokens(
                0, 
                [weth_add, selectedTokenInfo.B.address], 
                connected_account, 
                ethers.constants.MaxUint256,
                options
              )
            } 
            if(selectedTokenInfo.B.address === '0') {
              const token_A = new ethers.Contract(selectedTokenInfo.A.address, ERC20ABI, signer);
              await token_A.approve('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', ethers.constants.MaxUint256);
              token_A.on('Approval',async (owner, spender, value) => {
                await Router.swapExactTokensForETH(
                  ethers.BigNumber.from(selectedTokenInfo.A.amount).mul(ethers.BigNumber.from(10).pow(tokenUnitsA)),
                  0, 
                  [selectedTokenInfo.A.address, weth_add], 
                  connected_account, 
                  ethers.constants.MaxUint256,
                )
              })
            }
            if(selectedTokenInfo.A.address !== '0' && selectedTokenInfo.B.address !== '0') {
              const token_A = new ethers.Contract(selectedTokenInfo.A.address, ERC20ABI, signer);
              await token_A.approve('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', ethers.constants.MaxUint256);
              const token_B = new ethers.Contract(selectedTokenInfo.B.address, ERC20ABI, signer);
              await token_B.approve('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', ethers.constants.MaxUint256);
              token_B.on('Approval',async (owner, spender, value) => {
                await Router.swapExactTokensForTokens(
                  ethers.BigNumber.from(selectedTokenInfo.A.amount).mul(ethers.BigNumber.from(10).pow(tokenUnitsA)),
                  0,
                  [selectedTokenInfo.A.address, weth_add, selectedTokenInfo.B.address], 
                  connected_account, 
                  ethers.constants.MaxUint256,
                )
              })
            }
            // address[] memory path; 
            // if (tokenA == WETH || tokenB == WETH) { 
            //   path = new address[](2); 
            //   path[0] = tokenA; 
            //   path[1] = tokenB; 
            // } else { 
            //   path = new address[](3); 
            //   path[0] = tokenA; 
            //   path[1] = WETH; 
            //   path[2] = tokenB; 
            // }

            // let pairaddress = await factory.getPair(a, b);
            // const pair = new ethers.Contract(pairaddress, PairABI, signer);
            // let reserves = await pair.getReserves();
          }

        }}>
          SWAP
        </div>
      </div>
    </div>
  )
}

export default Swap

// export default MainPage
