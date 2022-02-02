
//==========================================================================
//                          Imports and requires
//==========================================================================


import './App.css';

import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import LoadCompopnent from './components/LoadComponent';
import ChartComponent from './components/ChartComponent';
// import ChartLoader from './components/ChartLoader';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react';
import { init_ws, send_message } from './services/websocket.js';
import { create } from './features/Token';
import GraphComponent from './components/GraphComponent';

function App() {


  //==========================================================================
  //                          Defninng Reference Variables
  //==========================================================================

  const [isLoading, setLoading] = useState(true);
  const [DataAmount_,UpdateAmount] =useState(0);
  // const [Currecy, LoadCurrency] = useState(1);
  const [ChartData, UpdateChart] = useState([]);
  const dispatch = useDispatch();
  const Token_ = useSelector((state) => state.token.value);
  const InputVal = useRef();
  // const val = InputVal.current.value;

  let DataAmount = 0;
  const MinAmount = 5;





  //==========================================================================
  //                          Establishing WebSocket Connection
  //==========================================================================

  //connect to the ws
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYkwrNE5IVDlHdWx2QWU4clhVQmVKNFJaNG02UHd0bmUxRDBQcW9sdXVqa21VOG9vR1lDTkdSalYzUW5kVUxQRVgyVTdLN2dnZGIzVmU4ZlFhclJnT3NYSlQrSUhLL05kUWlUUVRRR0U1WjVCbkVUekU2SFNOa0NFQ3NDVUhoWjE4RE1yQ1hzVTFXK3hjUXI1VzlIM3FkcGxWQWh2TEpTZGlKNGxMZm41NWN3K3g0SkRSbERWRUloTnRYbWdVNGRBYnY4WWJCaW9nazFrTWltU0FHWmluTFF5TXFVRnpHU09zbURXaGgxZEM3ZVQrUVR6UExqYmRaVndUUFE3REpadHN5Y2lzS1ZGRXQveE8wQWk1Vm01Yy9MeGQ1emRFOFYzMzFHb1ZsT0l1YzFsa08yU0JjTTEycGQ1b3NUY0JHVzJNdTF3cmRqalpCMFJXRDl5cmV6Z0ZEUm9FVWw2U3dNL014MmhsT2wyZGlYdWsrZmxUdVNLUE1Xd1ZOa3dNd0pVUVJ5VU1JU0l6bHl4ZERvaXFVa3FBM1habHpBVC9FVC9TMGVydzhySjBsOVErbmFISit6clByb1hzTWRwTHJoanZMcXVuV1NjS2NxYUxyRHNmSEt1SnJmTktWVWluQVVSdGdDYnNOMGNSWkJRcGx1K1dvMWp4VnFEM3Yrb0pNbkova0Q1RDl4eVdjc1RRbDVGSkNpYWNBPT0iLCJpYXQiOjE2NDM3MTcyMDEsImV4cCI6MTY0MzgwMzYwMX0.0Pf8d8dmA-7zrfggtNGQKZGcygprUNMtrEkFXjzMjzM";
  let message = {
    "type": "subscription",
    "id": "bf5d15d0-415f-11ec-b255-ad01e0712738",
    "data": {
      "products": ["BTC-USD"],
      "quantity": "3.00000000",
      "level": true,
      "high": true,
      "low": true,
      "change_daily": true
    }
  };



  //==========================================================================
  //                          WebSockets Functions
  //==========================================================================


  //==================================  Init   ================================

  useEffect(() => {
    init_ws({ token });
  }, []);

  //==================================  Message   ================================

  useEffect(() => {
    send_message(message);
  }, []);

  //==================================  Recive   ================================



  useEffect(() => {
    window.addEventListener("message", function (message) {
      const response = message.data;

      //Analyzing the response , and adding it to the store
      try {
        let low_ = response.content['BTC-USD'].filter.low;
        let high_ = response.content['BTC-USD'].filter.high;
        let update_ = response.last_update;
        let Chart_ = high_ % 1000;
        let GBDTime_ = update_.slice(update_.indexOf(' '),update_.indexOf('.')); 
        let PassData = {
          low: low_,
          high: high_,
          stamp: update_,
          chart: Chart_,
          Time:GBDTime_
        };
        if (Chart_ > 0) {
          dispatch(create(PassData));
          UpdateChart(oldChart => [...oldChart, PassData]);
          DataAmount++;
          UpdateAmount(DataAmount);

          // console.log(DataAmount);
        }
        if (DataAmount > MinAmount) {
          setLoading(false);
        }
      }
      catch{
        //TODO : need to add custom loading until the data is 
        //starting to flood in
        console.log('still loading data');
      }
    });
  }, []);


  //==========================================================================
  //                          Returning the custom componenet app
  //==========================================================================





  return (
    <div>
      <CustomInput text={Token_.stamp} Currency="| ₿ |" ref={InputVal} />
      <div className="container">
        <CustomButton text="BUY" amount={Token_.high} />
        <CustomButton text="SELL" amount={Token_.low} />
      </div>

      {/* {!isLoading ? <ChartComponent data={ChartData.slice(DataAmount - (MinAmount + 1), DataAmount - 1)} /> : <LoadCompopnent />} */}
      {!isLoading ? <ChartComponent max_amount= {DataAmount_} data={ChartData} /> : <LoadCompopnent />}
      {!isLoading ? <GraphComponent data={ChartData} /> :null}
    </div>
  );
}

export default App;
