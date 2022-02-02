
import { BarChart, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts';


function ChartComponent(params) {

    const range = 20;

    return (
        <div  className = "ChartHolder" id = "Charter">
            <ResponsiveContainer width="90%" height={500} >
                <BarChart width="100%" height={300} data={params.data}>
                    <Bar dataKey="high" fill="#8884d8" />
                    <Bar dataKey="low" fill="#82ca9d" />
                    <XAxis dataKey="Time"></XAxis>
                    <YAxis dataKey="high" domain={[params.data[0].low -range*10 ,params.data[0].high + range ]} ></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


export default ChartComponent;
