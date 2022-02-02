
import { BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import { useState } from 'react';


function ChartComponent(params) {

    const [State, UpdateState] = useState("high");
    const [StateColor, UpdateColor] = useState("#8884d8");

    const range = 20;
    const max_amount = 15;

    const Pallet = ["#8884d8", "#82ca9d"];
    const States = ["high", "low"];

    let Val = "high";
    let Color = "#8884d8";

    function getRange(data) {
        if (State === "high")
            return [data[0].high - range, data[0].high + range];
        return [data[0].low - range, data[0].low + range];
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

    function RearrangeData(data, len) {
        let Custom_data = [];
        let ratio = len < max_amount ? 1 : parseInt(len / max_amount);
        // ratio = 1;

        for (let i = 0, ind = 0; i < len; i += ratio, ind++)
            Custom_data.push(data[i]);

        while (Custom_data.length > max_amount)
            Custom_data.pop();


        return Custom_data;

    }

    return (
        <div>

            <div className="ChartHolder" id="Charter">
                <button className="button1" text="test" onClick={ChangeState}>{State}</button>

                <ResponsiveContainer width="90%" height={500} >
                    <BarChart width="100%" height={300} data={RearrangeData(params.data, params.max_amount)}>
                        <Bar dataKey={State} fill={StateColor} />
                        {/* <Bar dataKey="low" fill="#82ca9d" /> */}
                        {/* <Bar dataKey="low" fill="#82ca9d" /> */}
                        <XAxis dataKey="Time"></XAxis>
                        <YAxis dataKey={State} domain={getRange(params.data)} ></YAxis>
                        <Tooltip></Tooltip>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}


export default ChartComponent;
