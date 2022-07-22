import './style.css'

import React, { useEffect, useState } from 'react'

const SelectSwap = ({ data, onChange, setOpen, open }) => {
  // const [open, setOpen] = useState(false)
  const [selectIndex, setSelectIndex] = useState(0)

  useEffect(() => {
    onChange(selectIndex)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectIndex])
  return (
    <div className={`select-form_swap ${open ? 'selected' : ''}`}>
      <div className="selected-form_swap" onClick={() => setOpen(!open)}>
        <div className="chain-form_swap">
          <div className="chain">
            <div>
              <img
                src={data[selectIndex].chainIcon}
                alt="chain icon"
                className="icon"
              />
              <p className="text">{data[selectIndex].chainName}</p>
            </div>
            <span className="ChainText">{data[selectIndex].coinName}</span>
            <div className="arrow">
              {open === true ? (
                <img src="/coin/arrow.svg" alt=''/>
              ) : (
                <img
                alt=''
                  style={{ marginLeft: '5px' }}
                  src="/coin/reverseArrow.svg"
                />
              )}
            </div>
          </div>
        </div>
        {/* <div className="coin-form_swap">
          <img
            src={data[selectIndex].coinIcon}
            alt="coin icon"
            className="icon"
          />
          <p className="text">{data[selectIndex].coinName}</p>
        </div> */}
      </div>
      {open && (
        <ul>
          {data.map(
            (item, index) =>
              index !== selectIndex && (
                <li
                key={index}
                  onClick={() => {
                    setSelectIndex(index)
                    setOpen(false)
                  }}
                >
                  <div className="coin-form_swap">
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

export default SelectSwap
