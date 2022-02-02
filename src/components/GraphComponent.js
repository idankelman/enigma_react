
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useState } from 'react';

function GraphComponent(params) {

    const [State, UpdateState] = useState("high");
    const [StateColor, UpdateColor] = useState("#8884d8");

    const range = 20;

    const Pallet = ["#8884d8", "#82ca9d"];
    const States = ["high", "low"];

    let Val = "high";
    let Color = "#8884d8";

    function getRange(data) {
        if (State === "high")
            return [data[0].high - range, data[0].high + range]
        return [data[0].low - range, data[0].low + range]
    }

    function ChangeState() {
        console.log("StateChange");
        console.log(Val === "high");
        if (State === "high") {
            Val = States[1];
            Color = Pallet[1];
        }
        else if (State === "low") {
            Val = States[0];
            Color = Pallet[0];
        }
        UpdateState(Val);
        UpdateColor(Color);
        // console.log(Pallet)
    }

    return (
        <div className="ChartHolder" id="Charter">
            <button className="button1" onClick={ChangeState}>{State}</button>
            <ResponsiveContainer width="90%" height={500} >
                <AreaChart data={params.data} fill= {StateColor}>
                    <Area dataKey={State} ></Area>
                    <XAxis dataKey="Time"></XAxis>
                    <YAxis dataKey={State} domain={getRange(params.data)} ></YAxis>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Tooltip></Tooltip>
                </AreaChart>

            </ResponsiveContainer>
        </div>
    );
}



export default GraphComponent;
