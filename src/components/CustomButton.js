
import React, { useState,useRef } from 'react';


function CustomButton(params) {

    const ThisButton = useRef(); 

    function BuyClick()
    {
        // console.log(ThisButton.current);
      console.log(ThisButton.current);
    //   console.log(this);
    }

    return (
    <div className = "Card">
        <button className = "button1" ref ={ThisButton} onClick ={BuyClick}>{params.text}</button>
        {params.amount}$
    </div>
  );
}

export default CustomButton;
