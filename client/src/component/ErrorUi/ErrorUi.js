import React from "react"
import networkImg from "../../img/neterr.png"
import notfoundImg from "../../img/bgerror.jpg"
import "./ErrorUi.css"
export default function ErrorUi({ error, closeError }) {
  function delegateErrorContent() {
    let ErrrorContent = null;
    const styleH2 = {
      color: "#E03A3E",
      fontSize: "1.3em",
      padding: "0.5em 0",
      fontWeight: "900",
    };
    switch (error.type) {
      case "network":
        ErrrorContent = (
          <div className="ErrorInfo" style={{textAlign:" center"}}>
            <h2 style={styleH2}>Network Error</h2>
            <p>please check your connection</p>
          </div>
        );
        break;
      case "notfound":
        ErrrorContent = (
          <div className="ErrorInfo" style={{textAlign:" center"}}>
            <h2 style={styleH2}>
              Sorry User is Not a Registered Github member
            </h2>
            <a href="github.com">Join Github</a>
          </div>
        );
        break;
        case "notallowed":
          ErrrorContent = (
            <div className="ErrorInfo" style={{textAlign:" center"}}>
              <h2 style={styleH2}>
               you cant add this user
              </h2>
              <a href="github.com">Join Github</a>
            </div>
          );
          break;
      case "member":
        ErrrorContent = (
          <div className="ErrorInfo" style={{textAlign:" center"}}>
            <h2 style={styleH2}>Sorry User is already an org member</h2>
          </div>
        );
        break;
      default:
        ErrrorContent = (
          <div className="ErrorInfo">
            <h2 style={styleH2}>server error</h2>
            <h3>sorry pls refresh</h3>
            <a href="github.com">Join Github</a>
          </div>
        );
    }
    return ErrrorContent;
  }
  if (!error.isError) {
    return <span></span>;
  }
  return (
    <div className="modal" style={{ background:error.onInit ? "#fff" : `rgba(0,0,0,0.7)`}}>
      <div className="modalBox" style={{boxShadow:error.onInit ? "none" : "-5px 5px 5px rgba(0,0,0,0.5)"}}>
        {error.onInit ? (
          <span></span>
        ) : (
          <div className="close">
            <span
              onClick={() => {
                closeError();
              }}
            >
              <i className="fa fa-times"></i>
            </span>
          </div>
        )}

        <div className="errorContent">
          <div className="ErrorImage  errorNotFound">
            <img src={error.type === "network"?networkImg:notfoundImg} alt="errorbg"/>
          </div>
          {delegateErrorContent()}
        </div>
      </div>
    </div>
  );
}
