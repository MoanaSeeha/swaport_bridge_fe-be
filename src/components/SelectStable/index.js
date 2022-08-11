import './style.css'

import React, { useEffect, useState } from 'react'

const SelectStable = ({ data, onChange, neighbourId }) => {
  const [open, setOpen] = useState(false)
  const [selectIndex, setSelectIndex] =  useState(neighbourId === 0?1:0)

  useEffect(() => {
    onChange(selectIndex)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectIndex])
  return (
    <div className={`select-form ${open ? 'selected' : ''}`}>
      <div className="selected-form" onClick={() => setOpen(!open)}>
        <div className="chain-form">
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
              <img
                alt=''
                src={`/coin/${
                  open === true ? 'arrow.svg' : 'reverseArrow.svg'
                }`}
              />
            </div>
          </div>
        </div>
        {/* <div className="coin-form">
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
                    if(neighbourId !== index) setSelectIndex(index)
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

export default SelectStable
