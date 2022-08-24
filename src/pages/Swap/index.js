import './style.css'

import React, { useState } from 'react'
import { ethers } from "ethers";
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { connectedAccount, connectedChain } from "../../store/accountReducer";
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
      address: '0x90c1eF1854ECbF69F418f7F0827D3E986Ad64b50'//unedited
    },
    {
      chainName: "USDT",
      chainIcon: "/coin/usdt.svg",
      coinIcon: "/coin/usdt.svg",
      address: '0xbD790D62FCB1ee94Fe1A89ec155DCB7fb82d85FB'//unedited
    },

    {
      chainName: "DBX",
      chainIcon: "/coin/xus.svg",
      coinIcon: "/coin/xus.svg",
      address: '0'
    },
  ];
  const weth_add = '0x28137287F9Df1cfd08fb108E3a0d08624679D10c';
  const router_add = '0x92FC9aDEbbA70647Eb2452930799a8a5eCd03FD8';
  const factory_add = '0x6020b3Fb1Ca97ee249b2900e4952402932611022';
  
  const [transferStatus, setTransferStatus] = useState(false)
  const [open, setOpen] = useState(false)
  const [toOpen, setToOpen] = useState(false)
  const[selectedTokenId,selectTokenId] = useState({
    A: 0,
    B: 1
  });
  const [selectedTokenInfo,setselectedTokenInfo] = useState({
    A: {
      address:'0x90c1eF1854ECbF69F418f7F0827D3E986Ad64b50',
      amount:0,
      data:{
        symbol: '',
        balance: 0,
        unit: 18
      },
    },
    B: {
      address:'0xbD790D62FCB1ee94Fe1A89ec155DCB7fb82d85FB',
      amount:0,
      data:{
        symbol: '',
        balance: 0,
        unit: 18
      }
    },
    // path: ['0xd02F9F362d147Ee8F66BdfAfafa5Fa073cad67d5', '0xbD790D62FCB1ee94Fe1A89ec155DCB7fb82d85FB']
  });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const dispatch = useDispatch();
  const connected_account = useSelector(connectedAccount);
  const connected_chain = useSelector(connectedChain);
  let signer = connected_account === ''?null:provider.getSigner(connected_account);
  const[reserves,setreserves] = useState(0);
  const setReceiveAmount = async (a, b) => {
    if(a === '0') a = weth_add;
    if(b === '0') b = weth_add;
    if(a !== b && a !== '' && b !== '') {
      try {
        const signer = provider.getSigner(connected_account);
        const factory = new ethers.Contract(factory_add, FactoryABI, signer);
        let pairaddress = await factory.getPair(a, b);
        if(pairaddress !== '0x0000000000000000000000000000000000000000') {
          const pair = new ethers.Contract(pairaddress, PairABI, signer);
          let reserves = await pair.getReserves();
          let token0 = await pair.token0();
          if(token0 === a) return (Number(reserves[0].toString())/Number(reserves[1].toString()));
          else return (Number(reserves[1].toString())/Number(reserves[0].toString()))
        }
        else {
          if(a !== weth_add && b !== weth_add ) {
            let a_w = await setReceiveAmount(a, '0');
            let b_w = await setReceiveAmount(b, '0');
            return a_w/b_w;
          }
          else {
            toast.error("Insufficient Liquidity", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: 0,
            })
            return (0);
          }
        }
      } catch (error) {
        toast.error("Insufficient Liquidity", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: 0,
        })
        return (0);
      }
    }
    else {
      return (0);
    }
  }
  console.log( connected_chain )
  // const changeChain = async () => {
  //   await window.ethereum
  //     .request({
  //       method: "wallet_switchEthereumChain",
  //       params: [{ chainId: `5348` }],
  //     }).then(() => dispatch(setChain('5348')))
  // }

  // useEffect(()=>{
  //   if(connected_chain !== '5348') {
  //     console.log('sdfsdfsdfsdf', connected_chain)
  //     changeChain();
  //   }
  // },[]);

  return (
    <div className="">
      <ToastContainer />
      {connected_account === '' || connected_chain !== '5348'?<div style={{
            padding: '20px',
            fontSize: '30px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
      }}>
        Connect Wallet First and Switch to DBX chain
      </div>:
        (<div className="swap_content">
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
                address:selectedTokenInfo.B.address,
                data: selectedTokenInfo.B.data
              },
              A:{
                address:selectedTokenInfo.A.address,
                amount:Number(e.target.value),
                data: selectedTokenInfo.A.data
              },
              // path: selectedTokenInfo.path
            }) 
            setreserves(await setReceiveAmount(selectedTokenInfo.A.address, selectedTokenInfo.B.address));
          }} value={selectedTokenInfo.A.amount}/>
          <div className="balance_text_swap">
            <span className="balance">Balance:</span>
            <span className="dbx">{selectedTokenInfo.A.data.balance + ' '+selectedTokenInfo.A.data.symbol}</span>
          </div>
          <div className="max_text_swap">
            {/* <span className="max_number">00.00</span>{' '} */}
            <span className="max_color" style={{cursor: 'pointer'}} onClick={() => {
              setselectedTokenInfo({
                B:selectedTokenInfo.B,
                A:{
                  address:selectedTokenInfo.A.address,
                  amount:Number(selectedTokenInfo.A.data.balance),
                  data: selectedTokenInfo.A.data
                },
                // path: selectedTokenInfo.path
              }) 
            }}>MAX</span>
          </div>

          <div className="select_coin">
            <SelectSwap
              data={tokens_data}
              neighbourId={selectedTokenId.B}
              onChange={async (e) => {
                selectTokenId({
                  A: e, B:selectedTokenId.B
                })
                let  tokenUnitsA, tokenbalance,tokenBalanceA, tokenSymbolA;
                if(tokens_data[e].address === '0') {
                  // tokenNameA = 'DBX';
                  tokenUnitsA = 18;
                  tokenbalance = await provider.getBalance(connected_account);
                  tokenBalanceA = ethers.utils.formatEther(tokenbalance);
                  tokenSymbolA = 'DBX';
                } else {
                  try {
                    const token_A = new ethers.Contract(tokens_data[e].address, ERC20ABI, provider);
                    // tokenNameA = await token_A.name();
                    tokenUnitsA = await token_A.decimals();
                    tokenbalance = await token_A.balanceOf(connected_account);
                    tokenBalanceA = ethers.utils.formatUnits(tokenbalance, tokenUnitsA);
                    tokenSymbolA = await token_A.symbol();
                  } catch (error) {
                    console.log(error)
                  }
                  
                } 
                
                await setselectedTokenInfo({
                  B:selectedTokenInfo.B, 
                  A:{
                    address:tokens_data[e].address,
                    amount:Number(selectedTokenInfo.A.amount),
                    data: {
                      symbol: tokenSymbolA,
                      unit:tokenUnitsA,
                      balance:tokenBalanceA
                    }
                  },
                  // path: selectedTokenInfo.path
                }) 
                setreserves( await setReceiveAmount(tokens_data[e].address, selectedTokenInfo.B.address));
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
                amount:Number(e.target.value),
                data: selectedTokenInfo.B.data
              },
              path: selectedTokenInfo.path
            }) }}
          />
          <div className="balance_text_swap">
            <span className="balance">Balance:</span>{' '}
            <span className="dbx">{selectedTokenInfo.B.data.balance + ' '+selectedTokenInfo.B.data.symbol}</span>
          </div>{' '}
          <div className="max_text_swap">
            {/* <span className="max_number">00.00</span>{' '} */}
            {/* <span className="max_color">MAX</span> */}
          </div>
          <div className="select_coin">
            <SelectSwap
              data={tokens_data}
              neighbourId={selectedTokenId.A}
              onChange={async (e) => {
                selectTokenId({
                  B: e, A:selectedTokenId.A
                })
                let tokenbalance, tokenUnitsB, tokenbalanceb, tokenBalanceB, tokenSymbolB;
                if(tokens_data[e].address === '0') {
                  // tokenNameB = 'DBX';
                  tokenUnitsB = 18;
                  tokenbalance = await provider.getBalance(connected_account);
                  tokenBalanceB = ethers.utils.formatEther(tokenbalance);
                  tokenSymbolB = 'DBX';
                } else {
                  try {
                    const token_B = new ethers.Contract(tokens_data[e].address, ERC20ABI, provider);
                    // tokenNameB = await token_B.name();
                    tokenUnitsB = await token_B.decimals();
                    tokenbalanceb = await token_B.balanceOf(connected_account);
                    tokenBalanceB = ethers.utils.formatUnits(tokenbalanceb, tokenUnitsB);
                    tokenSymbolB = await token_B.symbol();
                  } catch (error) {
                    console.log(error)
                  }
                }

                await setselectedTokenInfo({
                  A:selectedTokenInfo.A, 
                  B:{
                    address:tokens_data[e].address,
                    amount:selectedTokenInfo.B.amount,
                    data: {
                      symbol: tokenSymbolB,
                      unit:tokenUnitsB,
                      balance:tokenBalanceB
                    }
                  },
                  // path: selectedTokenInfo.path
                }) 
                setreserves(await setReceiveAmount(selectedTokenInfo.A.address, tokens_data[e].address));
              }}
              setOpen={setToOpen}
              open={toOpen}
            />
          </div>
        </div>
        {/* Transfer */}
        <div className="transfer_button_swap" onClick={async () => {
          if(selectedTokenInfo.A.amount !== 0 && selectedTokenInfo.B.amount !== 0) {
            console.log('______________________');
            const Router = new ethers.Contract(router_add, RouterABI, signer);
            if(selectedTokenInfo.A.address === '0') {
              console.log('++++++++++')
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
              console.log('==================')
              const token_A = new ethers.Contract(selectedTokenInfo.A.address, ERC20ABI, signer);
              let a = await token_A.allowance( connected_account, router_add);
              if(a <= ethers.BigNumber.from(selectedTokenInfo.A.amount)) {
                await token_A.approve(router_add, ethers.constants.MaxUint256);
                token_A.on('Approval',async (owner, spender, value) => {
                  let tx = await Router.swapExactTokensForETH(
                    ethers.BigNumber.from(selectedTokenInfo.A.amount).mul(ethers.BigNumber.from(10).pow(selectedTokenInfo.A.data.unit)),
                    0, 
                    [selectedTokenInfo.A.address, weth_add], 
                    connected_account, 
                    ethers.constants.MaxUint256,
                  )
                  console.log(tx)
                })
              }
                
              else {
                let tx = await Router.swapExactTokensForETH(
                  ethers.BigNumber.from(selectedTokenInfo.A.amount).mul(ethers.BigNumber.from(10).pow(selectedTokenInfo.A.data.unit)),
                  0, 
                  [selectedTokenInfo.A.address, weth_add], 
                  connected_account, 
                  ethers.constants.MaxUint256,
                );
                console.log(tx)
              }
            }
            if(selectedTokenInfo.A.address !== '0' && selectedTokenInfo.B.address !== '0') {
              console.log('((((((((((((((((((______________________))))))))))))))))))');
              const token_A = new ethers.Contract(selectedTokenInfo.A.address, ERC20ABI, signer);
              let a = await token_A.allowance( connected_account, router_add);
              if(a <= ethers.BigNumber.from(selectedTokenInfo.A.amount))
                await token_A.approve(router_add, ethers.constants.MaxUint256);
              const token_B = new ethers.Contract(selectedTokenInfo.B.address, ERC20ABI, signer);
              let b = await token_B.allowance( connected_account, router_add);
              if(b <= ethers.BigNumber.from(selectedTokenInfo.B.amount)) {
                await token_B.approve(router_add, ethers.constants.MaxUint256);
                token_B.on('Approval',async (owner, spender, value) => {
                  let tx = await Router.swapExactTokensForTokens(
                    ethers.BigNumber.from(selectedTokenInfo.A.amount).mul(ethers.BigNumber.from(10).pow(selectedTokenInfo.A.data.unit)),
                    0,
                    [selectedTokenInfo.A.address, weth_add, selectedTokenInfo.B.address], 
                    connected_account, 
                    ethers.constants.MaxUint256,
                  )
                  console.log(tx);
                })
              }
              else {
                console.log('0909009909')
                let tx = await Router.swapExactTokensForTokens(
                  ethers.BigNumber.from(selectedTokenInfo.A.amount).mul(ethers.BigNumber.from(10).pow(selectedTokenInfo.A.data.unit)),
                  0,
                  [selectedTokenInfo.A.address, weth_add, selectedTokenInfo.B.address], 
                  connected_account, 
                  ethers.constants.MaxUint256,
                )
                console.log(tx);
              }
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
      </div>)
      }
    </div>
  )
}

export default Swap

// export default MainPage
