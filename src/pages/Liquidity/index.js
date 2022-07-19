import "./style.css";

import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import { Link } from "react-router-dom";
import SelectLiq from "../../components/SelectLiq";

const Liquidity = () => {
  const from_data = [
    {
      chainName: "BNB",
      chainIcon: "/coin/usdt.svg",
      coinIcon: "/coin/usdt.svg",
    },
    {
      chainName: "USDC",
      chainIcon: "/coin/usdc.svg",
      coinIcon: "/coin/usdc.svg",
    },
    {
      chainName: "XUS",
      chainIcon: "/coin/xus.svg",
      coinIcon: "/coin/xus.svg",
    },
    {
      chainName: "Import",
      chainIcon: "/coin/plus.svg",
      coinIcon: "/coin/plus.svg",
    },
  ];
  const to_data = [
    {
      chainName: "BTC",
      chainIcon: "/coin/usdc.svg",
      coinIcon: "/coin/usdc.svg",
    },
    {
      chainName: "USDT",
      chainIcon: "/coin/usdt.svg",
      coinIcon: "/coin/usdt.svg",
    },
    {
      chainName: "XUS",
      chainIcon: "/coin/xus.svg",
      coinIcon: "/coin/xus.svg",
    },
    {
      chainName: "Import",
      chainIcon: "/coin/plus.svg",
      coinIcon: "/coin/plus.svg",
    },
  ];
  const [connectStatus, setConnectStatus] = useState(false);
  const [mobileStatus, setMobileStatus] = useState(false);
  const [importStatus, setImportStatus] = useState(false);
  const [addLiqClick, setAddLiqClick] = useState(false);
  const [help, setHelp] = useState(false);

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
  const add_liquidity_handler = () => {
    setImportStatus(true);
  };
  const connectMetamaskHandler = () => {};
  const connectWalletHandler = () => {};
  return (
    <div className="">
      <div className="liq_main">
        {importStatus === true ? (
          <div className="import_modal">
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
                  <div className="import_bottom_bottom_btn">Import</div>
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
                <SelectLiq data={from_data} onChange={() => {}} />
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
                <SelectLiq data={to_data} onChange={() => {}} />
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
