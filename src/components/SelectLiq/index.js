import './style.css'

import React, { useEffect, useState } from 'react'

const SelectLiq = ({ data, onChange, selectedIndex }) => {
  const [open, setOpen] = useState(false)
  const [selectIndex, setSelectIndex] = useState(0)
  // props.selectedIndex = setSelectIndex(selectIndex)
  useEffect(() => {
    onChange(selectIndex)
  }, [selectIndex])
  return (
    <div className={`select-form_liq ${open ? 'selected' : ''}`}>
      <div className="selected-form_liq" onClick={() => setOpen(!open)}>
        <div className="chain-form_liq">
          <div className="chain">
            <div>
              <img
                src={data[selectIndex].chainIcon}
                // alt="chain icon"
                className="icon"
              />
              <p className="text">{data[selectIndex].chainName}</p>
            </div>
            <span className="ChainText">{data[selectIndex].coinName}</span>
            <div className="arrow">
              {open === true ? (
                <img src="/coin/arrow.svg" />
              ) : (
                <img
                  style={{ marginLeft: '5px' }}
                  src="/coin/reverseArrow.svg"
                />
              )}
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
                    setSelectIndex(index)
                    setOpen(false)
                  }}
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
              ),
          )}
        </ul>
      )}
    </div>
  )
}

export default SelectLiq
