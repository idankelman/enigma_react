import React, { useRef } from 'react';
// import Bitcoin_Logo from '../assets/Bitcoin_Logo2.png';
// import Bitcoin_Logo from '../assets/Bitcoin_Logo.png';


function CustomInput(params) {


    const ThisButton = useRef();

    function SubmitHandler(event) {
        
        // event.preventDefault(); // if we have a form that sends a submit http
        // request , we want to cancel it and redirect it
        // ourselves.

        // const Val = this.current.value; //this way we can get the value of
        //the elemtn. ofc we would like to make a
        //textbox or something like a checkbox , that will make more sense
        //for the value , but this is the basic structure .
        // console.log(Val);
        // if(Val)

        console.log("Changed");
        console.log(ThisButton.current.value);
        //if(String(ThisButton.current.value).length == 0)
        //    console.log("empty");
        let tmp = "" + ThisButton.current.value;
        console.log(tmp.length);
        if (tmp.length === 0)
            ThisButton.current.value = 1;

        return ThisButton.current.value;
    }

    return (

        <div className="inputs">
            <div className = "Info">Please Enter Required Amount</div>
            <div className="Holder">
                <input type="text" ref={ThisButton} onChange={SubmitHandler}></input>
                <div className="Info">
                    {params.Currency}
                    {/* <img src ={Bitcoin_Logo} id ="BitcoinLogo" ></img>  */}
                </div>
            </div>
            <div className="Info">{params.text}</div>


        </div>
    );
}

export default CustomInput;
