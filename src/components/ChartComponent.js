
import { BarChart, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Bar } from 'recharts';


function ChartComponent(params) {

    const range = 20;
    const max_amount =15;



    function RearrangeData(data,len)
    {
        let Custom_data= [];
        let ratio = len<max_amount?1:parseInt(len/max_amount);
        // ratio = 1;

        for(let i =0 ,ind = 0;i<len;i+=ratio,ind++)
            Custom_data.push(data[i]);
        
        while(Custom_data.length>max_amount)
            Custom_data.pop();


        return Custom_data;

    }

    return (
        <div  className = "ChartHolder" id = "Charter">
            <ResponsiveContainer width="90%" height={500} >
                <BarChart width="100%" height={300} data={RearrangeData(params.data,params.max_amount)}>
                    <Bar dataKey="high" fill="#8884d8" />
                    {/* <Bar dataKey="low" fill="#82ca9d" /> */}
                    {/* <Bar dataKey="low" fill="#82ca9d" /> */}
                    <XAxis dataKey="Time"></XAxis>
                    <YAxis dataKey="high" domain={[params.data[0].high -range*10 ,params.data[0].high + range ]} ></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


export default ChartComponent;
