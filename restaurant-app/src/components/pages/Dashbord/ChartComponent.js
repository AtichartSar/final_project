import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'


function ChartComponent({chartData}) {


    // useEffect(() => {
    //     console.log("charts",charts);
    //     chart()
    // }, [])

    return (
        
        <div style={{ width: '500px'}}>
            {console.log("dataChart",chartData)}
            <Bar data={chartData} options={{ responsive: true }} />
        </div>
    )
}

export default ChartComponent
