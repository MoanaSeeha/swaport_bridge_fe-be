import './style.css'

import React from 'react'

const SelectLiq = ({ data, onOpen, selectedIndex }) => {

  // props.selectedIndex = setselectedIndex(selectIndex)
  return (
    <div className={`select-form_liq `}>
      <div className="selected-form_liq" onClick={() => onOpen()}>
        <div className="chain-form_liq">
          <div className="chain">
            <div>
              <img
                alt=''
                src={data[selectedIndex].chainIcon}
                // alt="chain icon"
                className="icon"
              />
              <p className="text">{data[selectedIndex].chainName}</p>
            </div>
            <span className="ChainText">{data[selectedIndex].coinName}</span>
            <div className="arrow">
                <img
                  alt=''
                  style={{ marginLeft: '5px' }}
                  src="/coin/reverseArrow.svg"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectLiq
