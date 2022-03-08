import React from 'react'
import "./popup.css"
function Popup(props) {
  return (props.trigered)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='close-btn' onClick={()=>props.trigger(false)}>close</button>
            {props.children}
        </div>
    </div>
  ):"";
}

export default Popup