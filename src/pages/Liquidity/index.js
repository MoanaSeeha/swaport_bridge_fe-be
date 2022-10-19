import "./style.css";

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import SelectLiq from "../../components/SelectLiq";
import { connectedAccount } from "../../store/accountReducer";

import ERC20ABI from '../../abis/ERC20.json';
import RouterABI from '../../abis/v2Router.json';
import { useSelector } from "react-redux";

const Liquidity = () => {
  const token_data = [
    {
      chainName: "DBX",
      chainIcon: "/coin/xus.svg",
      coinIcon: "/coin/xus.svg",
      address: '0'
    },
    {
      chainName: "XUS",
      chainIcon: "/coin/usdt.svg",
      coinIcon: "/coin/usdt.svg",
      address: '0x91efa3FC448b7FCD40880F3ef650eB99635e6143'
    },
    {
      chainName: "WDBX",
      chainIcon: "/coin/xus.svg",
      coinIcon: "/coin/xus.svg",
      address: '0x28137287F9Df1cfd08fb108E3a0d08624679D10c'
    },
    {
      chainName: "Import",
      chainIcon: "/coin/plus.svg",
      coinIcon: "/coin/plus.svg",
    },
  ];
  // const [connectStatus, setConnectStatus] = useState(false);
  // const [mobileStatus, setMobileStatus] = useState(false);
  const connected_account = useSelector(connectedAccount);
  const [importStatus, setImportStatus] = useState(false);
  const [addLiqClick, setAddLiqClick] = useState(false);
  const [settokenValue,opensettokenValue] = useState(false);
  const [removeLiq, setRemoveLiq] = useState(false);
  const [help, setHelp] = useState(false);
  const [tokenaddress,setTokenaddress] = useState({A:'0', B:'0'});
  const [tokenInfo,settokenInfo] = useState({
    A: {address: '', name: '', decimal: 18, symbol: '', balance: 0},
    B: {address: '', name: '', decimal: 18, symbol: '', balance: 0}
  });
  const [tokenValue,setTokenValue] = useState({A:0, B:0});
  const [inputValue, setInputValue] = useState('');
  // const[tokenselect,settokenselect] = useState(false);
  const transferHandler = () => {
    setAddLiqClick(true);
  };
  const backHandler = () => {
    setAddLiqClick(false);
  };
  const help_handler = () => {
    setHelp(!help);
  };
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const router_add = '0x92FC9aDEbbA70647Eb2452930799a8a5eCd03FD8';

  const add_liquidity_handler = async () => {
    let tokenNameA, tokenUnitsA, tokenbalance, tokenBalanceA, tokenSymbolA, tokenNameB, tokenUnitsB, tokenbalanceb, tokenBalanceB, tokenSymbolB;
      if(tokenaddress.A === '0') {
        tokenNameA = 'DBX';
        tokenUnitsA = 18;
        tokenbalance = await provider.getBalance(connected_account);
        tokenBalanceA = ethers.utils.formatEther(tokenbalance);
        tokenSymbolA = 'DBX';
      } else {
        const token_A = new ethers.Contract(tokenaddress.A, ERC20ABI, provider);
        tokenNameA = await token_A.name();
        tokenUnitsA = await token_A.decimals();
        tokenbalance = await token_A.balanceOf(connected_account);
        tokenBalanceA = ethers.utils.formatUnits(tokenbalance, tokenUnitsA);
        tokenSymbolA = await token_A.symbol();
      } 
      if(tokenaddress.B === '0') {
        tokenNameB = 'DBX';
        tokenUnitsB = 18;
        tokenbalance = await provider.getBalance(connected_account);
        tokenBalanceB = ethers.utils.formatEther(tokenbalance);
        tokenSymbolB = 'DBX';
      } else {
        const token_B = new ethers.Contract(tokenaddress.B, ERC20ABI, provider);
        tokenNameB = await token_B.name();
        tokenUnitsB = await token_B.decimals();
        tokenbalanceb = await token_B.balanceOf(connected_account);
        tokenBalanceB = ethers.utils.formatUnits(tokenbalanceb, tokenUnitsB);
        tokenSymbolB = await token_B.symbol();

      }
    settokenInfo({
      A:{
        address: tokenaddress.A,
        name: tokenNameA,
        decimal: tokenUnitsA,
        balance: tokenBalanceA,
        symbol: tokenSymbolA
      },
      B: {
        address: tokenaddress.B,
        name: tokenNameB,
        decimal: tokenUnitsB,
        balance: tokenBalanceB,
        symbol: tokenSymbolB
      }
    })

    opensettokenValue(true);

  };

  const [open, setOpen] = useState({A: false, B: false})
  const [selectIndex, setSelectIndex] = useState({A: 0, B: 0});
  const onChange = (e) =>{
  }
  useEffect(() => {
    onChange(selectIndex)
  }, [selectIndex])

const modal = (item, index, AB) =>
  index !== token_data.length-1 && 
  (
    <li
      key={index}
      onClick={() => {
        AB==='A'? setSelectIndex({
          A: index,
          B:selectIndex.B
        }):setSelectIndex({
          B: index,
          A:selectIndex.A
        });
        AB==='A'?setTokenaddress({
          A: token_data[index].address,
          B: tokenaddress.B
        }):setTokenaddress({
          B: token_data[index].address,
          A: tokenaddress.A
        })
        setOpen({A:false, B:false})
      }}
      style={(index === (AB==='A'?selectIndex.A:selectIndex.B))?{ 
        background: '#9d959578',
        borderRadius: '30px',
        cursor: 'pointer'
      }:{cursor: 'pointer'}}
    >
      <div className="coin-form">
        <div>
          <img
            src={item.coinIcon}
            alt="coin icon"
            className="icon"
          />
          <p className="text">{item.chainName}</p>
        </div>
        <span className="ChainText">{item.coinName}</span>
      </div>
    </li>
  )

const inputTokenValueModal = () => (
  <div className="liq_modal">
    <div className="liq_modal_layout">
      <div
        className="close_btn"
        onClick={() => {
          opensettokenValue(false)
        }}
      >
        <img src="/stable/closeBtn.svg" alt="" />
      </div>
      <div className="liq_modal_text">
        <div className="import_token" style={{display: 'flex', alignItems: 'center', margin: '0 10px', flexDirection: 'column'}}>
          <div style={{'display': 'flex', 'flexDirection': 'column', marginBottom: '20px'}}>
            <input type="text" placeholder={`Input ${tokenInfo.A.symbol} Amount`}  onChange={e => setTokenValue({A: e.target.value, B:tokenValue.B})}/>
            <span>{tokenInfo.A.name + '  ' + tokenInfo.A.balance}</span>
          </div>
          <div style={{'display': 'flex', 'flexDirection': 'column'}}>
            <input type="text" placeholder={`Input ${tokenInfo.B.symbol} Amount`}  onChange={e => setTokenValue({B: e.target.value, A:tokenValue.A})}/>
            <span>{tokenInfo.B.name + '  ' + tokenInfo.B.balance}</span>
          </div>
          <div className="add_liq" style={{ marginBottom: '30px'}}>
            <div className="add_liq_btn" onClick={async () => {
              console.log('tokenInfotokenInfotokenInfotokenInfotokenInfotokenInfo', tokenInfo, tokenValue);
              const signer = provider.getSigner(connected_account);
              const router = new ethers.Contract(router_add, RouterABI, signer);
                if(tokenInfo.A.address === '0') {
                  console.log('==================')
                  const token_B = new ethers.Contract(tokenInfo.B.address, ERC20ABI, signer);
                  const options = {value: ethers.utils.parseEther(tokenValue.A.toString())}
                  let a = await token_B.allowance( connected_account, router_add);
                  if(a <= ethers.BigNumber.from(tokenValue.B)) {
                    await token_B.approve(router_add, ethers.constants.MaxUint256);
                    token_B.on('Approval',async (owner, spender, value) => {
                      let tx = await router.addLiquidityETH(
                        tokenInfo.B.address,
                        ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                        ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                        ethers.utils.parseEther(tokenValue.A.toString()),
                        connected_account,
                        ethers.constants.MaxUint256,
                        options);
                      console.log(tx)
                    })
                  } else {
                    let tx = await router.addLiquidityETH(
                      tokenInfo.B.address,
                      ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                      ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                      ethers.utils.parseEther(tokenValue.A.toString()),
                      connected_account,
                      ethers.constants.MaxUint256,
                      options);
                    console.log(tx)
                  }
                  
                }
                if(tokenInfo.B.address === '0') {
                  console.log('++++++++++++++++++++++')
                  const token_A = new ethers.Contract(tokenInfo.A.address, ERC20ABI, signer);
                  let a = await token_A.allowance( connected_account, router_add);
                  const options = {value: ethers.utils.parseEther(tokenValue.B.toString())}
                  if(a <= ethers.BigNumber.from(tokenValue.A)) {
                    await token_A.approve(router_add, ethers.constants.MaxUint256);
                    token_A.on('Approval',async (owner, spender, value) => {
                      let tx = await router.addLiquidityETH(
                        tokenInfo.A.address,
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.utils.parseEther(tokenValue.B.toString()),
                        connected_account,
                        ethers.constants.MaxUint256,
                        options);
                      console.log(tx)
                    })
                  } else {
                    let tx = await router.addLiquidityETH(
                        tokenInfo.A.address,
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.utils.parseEther(tokenValue.B.toString()),
                        connected_account,
                        ethers.constants.MaxUint256,
                        options);
                    console.log(tx)
                  }
                   
                }
                if(tokenInfo.A.address !== '0' && tokenInfo.B.address !== '0' ) {
                  console.log('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')
                  const token_A = new ethers.Contract(tokenInfo.A.address, ERC20ABI, signer);
                  const token_B = new ethers.Contract(tokenInfo.B.address, ERC20ABI, signer);
                  let a = await token_A.allowance( connected_account, router_add);
                  if(a <= ethers.BigNumber.from(tokenValue.A))
                    await token_A.approve(router_add, ethers.constants.MaxUint256);
                  let b = await token_B.allowance( connected_account, router_add);
                  if(b <= ethers.BigNumber.from(tokenValue.B)) {
                    await token_B.approve(router_add, ethers.constants.MaxUint256);
                    token_B.on('Approval',async (owner, spender, value) => {
                     let tx = await router.addLiquidity(
                        tokenInfo.A.address,
                        tokenInfo.B.address,
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                        connected_account,
                        ethers.constants.MaxUint256
                      )
                      console.log(tx)
                    })
                  }
                  else {
                    let tx = await router.addLiquidity(
                      tokenInfo.A.address,
                      tokenInfo.B.address,
                      ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                      ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                      ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                      ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                      connected_account,
                      ethers.constants.MaxUint256
                    );
                    console.log('-=-=-=-=-=-=-=-=--=',tx);
                  }
                }

            }}>
              Supply
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
)

const inputTokenValueToRemoveLiquidityModal = () => (
  <div className="liq_modal">
    <div className="liq_modal_layout">
      <div
        className="close_btn"
        onClick={() => {
          opensettokenValue(false)
        }}
      >
        <img src="/stable/closeBtn.svg" alt="" />
      </div>
      <div className="liq_modal_text">
        <div className="import_token" style={{display: 'flex', alignItems: 'center', margin: '0 10px', flexDirection: 'column'}}>
          <div style={{'display': 'flex', 'flexDirection': 'column', marginBottom: '20px'}}>
            <input type="text" placeholder={`Input ${tokenInfo.A.symbol} Amount`}  onChange={e => setTokenValue({A: e.target.value, B:tokenValue.B})}/>
            <span>{tokenInfo.A.name + '  ' + tokenInfo.A.balance}</span>
          </div>
          <div style={{'display': 'flex', 'flexDirection': 'column'}}>
            <input type="text" placeholder={`Input ${tokenInfo.B.symbol} Amount`}  onChange={e => setTokenValue({B: e.target.value, A:tokenValue.A})}/>
            <span>{tokenInfo.B.name + '  ' + tokenInfo.B.balance}</span>
          </div>
          <div className="add_liq" style={{ marginBottom: '30px'}}>
            <div className="add_liq_btn" onClick={async () => {
              console.log('tokenInfotokenInfotokenInfotokenInfotokenInfotokenInfo', tokenInfo, tokenValue);
              const signer = provider.getSigner(connected_account);
              const router = new ethers.Contract(router_add, RouterABI, signer);
                if(tokenInfo.A.address === '0') {
                  console.log('==================')
                  const token_B = new ethers.Contract(tokenInfo.B.address, ERC20ABI, signer);
                  const options = {value: ethers.utils.parseEther(tokenValue.A.toString())}
                  let a = await token_B.allowance( connected_account, router_add);
                  if(a <= ethers.BigNumber.from(tokenValue.B)) {
                    await token_B.approve(router_add, ethers.constants.MaxUint256);
                    token_B.on('Approval',async (owner, spender, value) => {
                      let tx = await router.addLiquidityETH(
                        tokenInfo.B.address,
                        ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                        ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                        ethers.utils.parseEther(tokenValue.A.toString()),
                        connected_account,
                        ethers.constants.MaxUint256,
                        options);
                      console.log(tx)
                    })
                  } else {
                    let tx = await router.addLiquidityETH(
                      tokenInfo.B.address,
                      ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                      ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                      ethers.utils.parseEther(tokenValue.A.toString()),
                      connected_account,
                      ethers.constants.MaxUint256,
                      options);
                    console.log(tx)
                  }
                  
                }
                if(tokenInfo.B.address === '0') {
                  console.log('++++++++++++++++++++++')
                  const token_A = new ethers.Contract(tokenInfo.A.address, ERC20ABI, signer);
                  let a = await token_A.allowance( connected_account, router_add);
                  const options = {value: ethers.utils.parseEther(tokenValue.B.toString())}
                  if(a <= ethers.BigNumber.from(tokenValue.A)) {
                    await token_A.approve(router_add, ethers.constants.MaxUint256);
                    token_A.on('Approval',async (owner, spender, value) => {
                      let tx = await router.addLiquidityETH(
                        tokenInfo.A.address,
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.utils.parseEther(tokenValue.B.toString()),
                        connected_account,
                        ethers.constants.MaxUint256,
                        options);
                      console.log(tx)
                    })
                  } else {
                    let tx = await router.addLiquidityETH(
                        tokenInfo.A.address,
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.utils.parseEther(tokenValue.B.toString()),
                        connected_account,
                        ethers.constants.MaxUint256,
                        options);
                    console.log(tx)
                  }
                   
                }
                if(tokenInfo.A.address !== '0' && tokenInfo.B.address !== '0' ) {
                  console.log('\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')
                  const token_A = new ethers.Contract(tokenInfo.A.address, ERC20ABI, signer);
                  const token_B = new ethers.Contract(tokenInfo.B.address, ERC20ABI, signer);
                  let a = await token_A.allowance( connected_account, router_add);
                  if(a <= ethers.BigNumber.from(tokenValue.A))
                    await token_A.approve(router_add, ethers.constants.MaxUint256);
                  let b = await token_B.allowance( connected_account, router_add);
                  if(b <= ethers.BigNumber.from(tokenValue.B)) {
                    await token_B.approve(router_add, ethers.constants.MaxUint256);
                    token_B.on('Approval',async (owner, spender, value) => {
                     let tx = await router.addLiquidity(
                        tokenInfo.A.address,
                        tokenInfo.B.address,
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                        ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                        ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                        connected_account,
                        ethers.constants.MaxUint256
                      )
                      console.log(tx)
                    })
                  }
                  else {
                    let tx = await router.addLiquidity(
                      tokenInfo.A.address,
                      tokenInfo.B.address,
                      ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                      ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                      ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                      ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                      connected_account,
                      ethers.constants.MaxUint256
                    );
                    console.log('-=-=-=-=-=-=-=-=--=',tx);
                  }
                }

            }}>
              Remove Liquidity
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
)

  return (
    <div className="">
        {settokenValue?(removeLiq?inputTokenValueToRemoveLiquidityModal():inputTokenValueModal()):null}
        {open.A || open.B ? (
          <div className="liq_modal">
            <div className="liq_modal_layout">
              <div
                className="close_btn"
                onClick={() => {
                  setOpen({A:false, B:false})
                }}
              >
                <img src="/stable/closeBtn.svg" alt="" />
              </div>
              <div className="liq_modal_text">
              <div className="import_token" style={{display: 'flex', alignItems: 'stretch', margin: '0 10px'}}>
                <input type="text" placeholder="Import Token By Address" onChange={e => setInputValue(e.target.value)} style={{'marginRight': '20px'}}/>
                <div style={{
                  padding: '10px',
                  borderRadius: '10px',
                  border: '1px gray solid',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }} onClick={async () => {
                  try {
                    open.A?setTokenaddress({
                      A: inputValue,
                      B: tokenaddress.B
                    }):setTokenaddress({
                      B: inputValue,
                      A: tokenaddress.A
                    })
                    open.A?setSelectIndex({
                      A: token_data.length-1,
                      B: selectIndex.B
                    }):setSelectIndex({
                      B: token_data.length-1,
                      A: selectIndex.A
                    });
  
                    let tokenName, tokenUnits, tokenbalance, tokenBalance, tokenSymbol;
                    const token = new ethers.Contract(inputValue, ERC20ABI, provider);
                      tokenName = await token.name();
                      tokenUnits = await token.decimals();
                      tokenbalance = await token.balanceOf(connected_account);
                      tokenBalance = ethers.utils.formatUnits(tokenbalance, tokenUnits);
                      tokenSymbol = await token.symbol();
                      open.A?settokenInfo({
                        A:{
                          address: inputValue,
                          name: tokenName,
                          decimal: tokenUnits,
                          balance: tokenBalance,
                          symbol: tokenSymbol
                        },
                        B: tokenInfo.B
                      }):settokenInfo({
                        B:{
                          address: inputValue,
                          name: tokenName,
                          decimal: tokenUnits,
                          balance: tokenBalance,
                          symbol: tokenSymbol
                        },
                        A: tokenInfo.A
                    })
                    setImportStatus(true);
                  } catch (error) {
                    console.log(error);
                  }
                  
                }}>Import</div>

              </div>
                <ul>
                  {open.A?token_data.map(
                    (item, index) => modal(item, index, 'A')
                  ):token_data.map(
                    (item, index) => modal(item, index, 'B')
                  )}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      <div className="liq_main">
        {importStatus === true ? (
          <div className="import_modal" style={{zIndex: 150}}>
            <div className="import_content">
              <div
                className="import_close"
                onClick={() => {
                  setImportStatus(false);
                }}
              >
                <img src="/stable/closeBtn.svg" alt=""/>
              </div>
              <div className="import_header">Import Tokens</div>
              <div className="import_main">
                Anyone can create a BEP20 token on BSC with any name, including
                creating fake versions of existing tokens and tokens that claim
                to represent projects that do not have a token. If you purchase
                an arbitrary token, you may be unable to sell it back.
              </div>
              <div className="import_bottom">
                <div className="import_bottom_top">
                  <div className="import_bottom_top_text">{open.A?tokenInfo.A.name:tokenInfo.B.name} ({open.A?tokenInfo.A.symbol:tokenInfo.B.symbol})</div>
                  <div className="import_bottom_top_bottom">
                    {
                      inputValue.substring(0, 5) + '...'+inputValue.substring(inputValue.length-4, inputValue.length)
                    }
                    <div className="view_btn" onClick={() => {
                      let url = `https://dbxscan.com/address/${open.A?tokenInfo.A.address:tokenInfo.B.address}`
                      console.log(url)
                      window.open(url, "_blank",  "noopener noreferrer");
                    }}>View on DBXScan</div>
                  </div>
                </div>
                <div className="import_bottom_bottom">
                  <div>
                    <span className="import_bottom_bottom_checkbox">
                      <input type="checkbox" />
                    </span>
                    <span>I understand</span>
                  </div>
                  <div onClick={async () => {
                    // const router = new ethers.Contract('0x92FC9aDEbbA70647Eb2452930799a8a5eCd03FD8', RouterABI, provider);
                    open.A?setTokenaddress({
                      A: inputValue,
                      B: tokenaddress.B
                    }):setTokenaddress({
                      B: inputValue,
                      A: tokenaddress.A
                    })
                    open.A?setSelectIndex({
                      A: token_data.length-1,
                      B: selectIndex.B
                    }):setSelectIndex({
                      B: token_data.length-1,
                      A: selectIndex.A
                    });
                    setOpen({A:false, B:false});
                    setImportStatus(false);
                  }} className="import_bottom_bottom_btn">Import</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* Text  */}
        <div className="liq_text">
          <div className="large_text">
            {addLiqClick === true ? "Add or Remove" : "Your"} Liquidity
            {addLiqClick === true ? (
              <span style={{ marginLeft: "5px" }} onClick={help_handler}>
                <img src="/coin/help.svg" alt=""/>
                {help === true ? (
                  <div
                    className="help_des"
                    onClick={() => {
                      setHelp(false);
                    }}
                  >
                    Liquidity providers earn a 0.17% trading fee on all <br />{" "}
                    trades made for that token pair, proportional to <br />{" "}
                    their share of the liquidity pool.
                  </div>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
        {/* Text End */}

        {/* Main Content */}
        {addLiqClick === false ? (
          <div className="liq_content">
            <div className="liq_content_text">
              Connect to a wallet to view your liquidity.
            </div>
          </div>
        ) : (
          <div className="liq_select">
            <div className="choose_text">Choose a valid pair</div>
            <div className="two_selectors">
              <div className="select_one">
                <div className="lip_select_from_text">
                  {" "}
                  <span className="liq_balance_text">Balance:</span>{" "}
                  <span className="liq_balance_value"> DBX</span>
                </div>
                <SelectLiq data={token_data} selectedIndex={selectIndex.A} onOpen={() => {
                  setOpen({A: true, B: false});
                }} />
              </div>
              <div className="middle_icon">
                <img src="/stable/closeBtn.svg" alt=""/>
              </div>
              <div className="select_two">
                <div className="lip_select_from_text">
                  {" "}
                  <span className="liq_balance_text">Balance:</span>{" "}
                  <span className="liq_balance_value"> DBX</span>
                </div>
                <SelectLiq data={token_data} selectedIndex={selectIndex.B} onOpen={() => {
                  setOpen({A: false, B: true});
                }} />
              </div>
            </div>
          </div>
        )}
        {/* End Main */}
        <div className="liq_text">
          <div className="small_text">
            Remove liquidity to receive tokens back
          </div>
          {addLiqClick === false ? null : (
            <div>
              <div className="rmv_liq_btn" onClick={() => {
                setRemoveLiq(true)
                add_liquidity_handler()
                }}>
                Remove Liquidity
              </div>
            </div>
          )}
        </div>
        {/* Bottom btns */}
        {addLiqClick === false ? (
          <div className="transfer_part">
            <div className="transfer_button_liq" onClick={transferHandler}>
              Add Liquidity
            </div>
          </div>
        ) : (
          <div className="add_liq">
            <div className="back_btn" onClick={backHandler}>
              <img src="/coin/backarrow.svg" alt=""/>
              <div className="back_text">Back</div>
            </div>
            <div className="add_liq_btn" onClick={() => {setRemoveLiq(false);add_liquidity_handler()}}>
              Add Liquidity
            </div>
          </div>
        )}
        {/* End Bottom */}
      </div>
    </div>
  );
};

export default Liquidity;

// export default MainPage
