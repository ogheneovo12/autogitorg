import React from "react"
import partycap from "../../img/success.jpg"

import "./SuccessUi.css"
export default function SuccessUi ({success, closeSuccess}){

    if(!success){
   return(
     <span></span>
   )
    }
    return (
    <div className="modal">
      <div className="modalBox" >
      <div className="close">
            <span
              onClick={() => {
                closeSuccess();
              }}
            >
              <i className="fa fa-times"></i>
            </span>
          </div>
          <div className="successContent">
        <div className="imgBox">
      <img src={partycap} alt="in vite success"/>
      </div>
      <div className="successInfo">
        <hgroup>
          <h2>Hurray!!!</h2>
          <h2>invite was sent successfully please check your mail to accept</h2>
          </hgroup>
      </div>
        </div>
        </div>
      <style jsx>{`
       
      `}
 </style>
    </div>
  )
 }