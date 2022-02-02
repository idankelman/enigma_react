
import React, { useRef } from 'react';


function CustomButton(params) {

  const ThisButton = useRef();

  function BuyClick() {
    // console.log(ThisButton.current);
    console.log(ThisButton.current);
    let type = 0;
    if (params.text === "BUY")
      type=2;
    else
      type=1;
    //   console.log(this);
      params.Trans(type);
      params.Excecuting(type);
  }

  return (
    <div className="Card">
      <button className="button1" ref={ThisButton} onClick={BuyClick}>{params.text}</button>
      {params.amount}$
    </div>
  );
}

export default CustomButton;
