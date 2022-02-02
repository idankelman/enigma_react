
import React, { useRef } from 'react';


function CustomButton(params) {

  const ThisButton = useRef();

  function BuyClick() {
    // console.log(ThisButton.current);
    console.log(ThisButton.current);
    if (params.text === "BUY")
      params.Trans(2);
    else
      params.Trans(1);
    //   console.log(this);
      params.Excecuting();
  }

  return (
    <div className="Card">
      <button className="button1" ref={ThisButton} onClick={BuyClick}>{params.text}</button>
      {params.amount}$
    </div>
  );
}

export default CustomButton;
