import './styleBridge.css'

import React, { useEffect, useState } from 'react'

const SelectBridge = ({ data, onChange, neighbourId }) => {
  const [open, setOpen] = useState(false)
  const [selectIndex, setSelectIndex] = useState(neighbourId === 0?1:0)

  useEffect(() => {
    onChange(selectIndex)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectIndex])
  return (
    <div className={`selectBridge-form ${open ? 'selected' : ''}`}>
      <div className="selected-bridge-form" onClick={() => setOpen(!open)}>
        <div className="chain-bridge-form">
          <div className="chain_bridge">
            <div>
              <img
                src={data[selectIndex].chainIcon}
                alt="chain icon"
                className="icon"
              />
              <span style={{ paddingBottom: '18px' }}>
                {data[selectIndex].chainName}
              </span>
            </div>
            {/* <span className="ChainText">{data[selectIndex].coinName}</span> */}
            {/* {`select-form ${open ? 'selected' : ''}`} */}
            <div className="arrow_bridge">
              <img
              alt=''
                src={`/coin/${
                  open === true ? 'arrow.svg' : 'reverseArrow.svg'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <ul>
          {data.map(
            (item, index) =>
              index !== selectIndex && (
                <li
                  onClick={() => {
                    if(neighbourId !== index) setSelectIndex(index)
                    setOpen(false)
                  }}
                >
                  <div className="coin-form_bridge">
                    <img src={item.coinIcon} alt="coin icon" className="icon" />
                    <p className="text">{item.chainName}</p>
                    <span className="ChainText">{item.coinName}</span>
                  </div>
                </li>
              ),
          )}
        </ul>
      )}
    </div>
  )
}

export default SelectBridge
