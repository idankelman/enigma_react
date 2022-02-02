
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts';


function GraphComponent(params) {

    const range = 20;

    return (
        <div className="ChartHolder" id="Charter">
            <ResponsiveContainer width="90%" height={500} >
                <AreaChart data={params.data}>
                    <Area dataKey="high" ></Area>
                    <XAxis dataKey="Time"></XAxis>
                    <YAxis dataKey="high" domain={[parseFloat(params.data[0].high - range),parseFloat( params.data[0].high + range)]} ></YAxis>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Bar dataKey="high" fill="#EE0000" />
                    <Bar dataKey="low" fill='#00EE00' />
                    <Tooltip></Tooltip>
                </AreaChart>

            </ResponsiveContainer>
        </div>
    );
}



    export default GraphComponent;
