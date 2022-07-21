import "./style.css";

import React, { useEffect, useState } from "react";
import { BigNumber, ethers } from "ethers";

import Header from "../../components/Header";
import { Link } from "react-router-dom";
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
      address: '0x000'
    },
    {
      chainName: "USDT",
      chainIcon: "/coin/usdt.svg",
      coinIcon: "/coin/usdt.svg",
      address: '0x234'
    },
    {
      chainName: "XUS",
      chainIcon: "/coin/usdc.svg",
      coinIcon: "/coin/usdc.svg",
      address: '0x234'
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
  const [help, setHelp] = useState(false);
  const [tokenaddress,setTokenaddress] = useState({A:'', B:''});
  const [tokenInfo,settokenInfo] = useState({
    A: {address: '', name: '', decimal: 18, symbol: '', balance: 0},
    B: {address: '', name: '', decimal: 18, symbol: '', balance: 0}
  });
  const [tokenValue,setTokenValue] = useState({A:0, B:0});
  const [inputValue, setInputValue] = useState('');
  // const[tokenselect,settokenselect] = useState(false);
  const transferHandler = () => {
    setAddLiqClick(true);
    console.log("transferStatus");
  };
  const backHandler = () => {
    setAddLiqClick(false);
  };
  const help_handler = () => {
    setHelp(!help);
  };
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const add_liquidity_handler = async () => {
    const token_A = new ethers.Contract(tokenaddress.A, ERC20ABI, provider);
    const token_B = new ethers.Contract(tokenaddress.B, ERC20ABI, provider);
    console.log(tokenaddress.A);
    let tokenNameA = await token_A.name();
    console.log(tokenNameA);
    let tokenUnitsA = await token_A.decimals();
    console.log(tokenUnitsA, connected_account);
    let tokenbalance = await token_A.balanceOf(connected_account);
    console.log(tokenbalance);
    let tokenBalanceA = ethers.utils.formatUnits(tokenbalance, tokenUnitsA);
    console.log(tokenBalanceA);
    let tokenSymbolA = await token_A.symbol();
    console.log(tokenSymbolA);
    let tokenNameB = await token_B.name();
    let tokenUnitsB = await token_B.decimals();
    let tokenbalanceb = await token_B.balanceOf(connected_account);
    let tokenBalanceB = ethers.utils.formatUnits(tokenbalanceb, tokenUnitsB);
    let tokenSymbolB = await token_B.symbol();
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
    console.log(tokenInfo);

    opensettokenValue(true);
    // const token_A = new ethers.Contract(tokenaddress.A, ERC20ABI, provider);
    // const token_B = new ethers.Contract(tokenaddress.B, ERC20ABI, provider);
    // const router = new ethers.Contract('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', RouterABI, provider);

  };
  const connectMetamaskHandler = () => {};
  const connectWalletHandler = () => {};
  const [open, setOpen] = useState({A: false, B: false})
  const [selectIndex, setSelectIndex] = useState({A: 0, B: 0});
  const onChange = (e) =>{
    console.log(e);
  }
  useEffect(() => {
    console.log(new ethers.providers.Web3Provider(window.ethereum));
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

      <div className="liq_text">
          <div className="large_text">
            {addLiqClick === true ? "Add" : "Your"} Liquidity
            {addLiqClick === true ? (
              <span style={{ marginLeft: "5px" }} onClick={help_handler}>
                <img src="/coin/help.svg" />
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
          <div className="small_text">
            Remove liquidity to receive tokens back
          </div>
      </div>
      <div className="liq_modal_text">
        <div className="import_token" style={{display: 'flex', alignItems: 'center', margin: '0 10px', flexDirection: 'column'}}>
          <div>
            <input style={{marginBottom: '20px'}} type="text" placeholder={`Input ${tokenInfo.A.symbol} Amount`}  onChange={e => setTokenValue({A: e.target.value, B:tokenValue.B})}/>
            <span>{tokenInfo.A.name + '  ' + tokenInfo.A.balance}</span>
          </div>
          <div>
            <input type="text" placeholder={`Input ${tokenInfo.B.symbol} Amount`}  onChange={e => setTokenValue({B: e.target.value, A:tokenValue.A})}/>
            <span>{tokenInfo.B.name + '  ' + tokenInfo.B.balance}</span>
          </div>
          <div className="add_liq" style={{ marginBottom: '30px'}}>
            <div className="add_liq_btn" onClick={async () => {
              
              const signer = provider.getSigner(connected_account);
              const router = new ethers.Contract('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', RouterABI, signer);
              console.log(tokenValue.A, tokenValue.B);
              const token_A = new ethers.Contract(tokenInfo.A.address, ERC20ABI, signer);
              const token_B = new ethers.Contract(tokenInfo.B.address, ERC20ABI, signer);
              // await token_A.approve('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', ethers.constants.MaxUint256);
              // await token_B.approve('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', ethers.constants.MaxUint256);
              // token_B.on('Approval',async (owner, spender, value) => {
                // console.log(owner, spender, value, (tokenValue.A*10**tokenInfo.A.decimal).toString());
                await router.addLiquidity(
                  tokenInfo.A.address,
                  tokenInfo.B.address,
                  ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                  ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                  ethers.BigNumber.from(tokenValue.A).mul(ethers.BigNumber.from(10).pow(tokenInfo.A.decimal)),
                  ethers.BigNumber.from(tokenValue.B).mul(ethers.BigNumber.from(10).pow(tokenInfo.B.decimal)),
                  connected_account,
                  ethers.constants.MaxUint256
                )
              // })  

            }}>
              Supply
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>
)

  return (
    <div className="">
        {settokenValue?inputTokenValueModal():null}
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
                <input type="text" placeholder="Import Token By Address"  onChange={e => setInputValue(e.target.value)} />
                <div style={{
                  padding: '10px',
                  borderRadius: '10px',
                  border: '1px gray solid',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer'
                }} onClick={() => {
                  // setOpen({A:false, B:false})
                  setImportStatus(true);
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
                ___{tokenaddress.A}
                +++{tokenaddress.B}
        {importStatus === true ? (
          <div className="import_modal" style={{zIndex: 150}}>
            <div className="import_content">
              <div
                className="import_close"
                onClick={() => {
                  setImportStatus(false);
                }}
              >
                <img src="/stable/closeBtn.svg" />
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
                  <div className="import_bottom_top_text">DBX (DBX)</div>
                  <div className="import_bottom_top_bottom">
                    <div>Ox67...57dd</div>
                    <div className="view_btn">View on DBXScan</div>
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
                    console.log(open)
                    // const router = new ethers.Contract('0x9Ca27b9255Fe570BE851Bf67CF3a1D0393cbBC4a', RouterABI, provider);
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
            {addLiqClick === true ? "Add" : "Your"} Liquidity
            {addLiqClick === true ? (
              <span style={{ marginLeft: "5px" }} onClick={help_handler}>
                <img src="/coin/help.svg" />
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
          <div className="small_text">
            Remove liquidity to receive tokens back
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
                <img src="/stable/closeBtn.svg" />
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
              <img src="/coin/backarrow.svg" />
              <div className="back_text">Back</div>
            </div>
            <div className="add_liq_btn" onClick={add_liquidity_handler}>
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
