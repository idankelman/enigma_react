
import { BarChart, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts';


function ChartComponent(params) {

    const range = 20;

    return (
        <div >
            <ResponsiveContainer width="100%" height={500}>
                <BarChart width="100%" height={300} data={params.data}>
                    <Bar dataKey="high" fill="#8884d8" />
                    <Bar dataKey="low" fill="#82ca9d" />
                    <XAxis dataKey="stamp"></XAxis>
                    <YAxis dataKey="high" domain={[params.data[0].low -range*10 ,params.data[0].high + range ]} ></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
                {/* <AreaChart data={params.data}> */}

                {/* <Area dataKey="high" ></Area> */}

                {/* <XAxis dataKey="stamp"></XAxis> */}
                {/* <YAxis dataKey="high" domain={[params.data[0].high -range ,params.data[0].high + range ]} ></YAxis> */}
                {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5"/> */}
                {/* <Bar  dataKey="high" fill="#EE0000" /> */}
                {/* <Bar  dataKey="low" fill='#00EE00' /> */}

                {/* <Tooltip></Tooltip> */}
                {/* </AreaChart> */}
            </ResponsiveContainer>
        </div>
    );
}


export default ChartComponent;
