import React from "react";
import Chart from "react-apexcharts";

const Graph = ()=>{
   const options={
        chart:{
            background:'f3f3f3',
            foreColor:'#333'
        },
        xaxis:{
            categories:[
                'Karnataka',
                'Bihar',
                'Tamil Nadu',
                'West Bengal',
                'Maharashta',
                'Gujrat',
                'Odisha',
                'Uttar Pradesh',
                'Madhya Pradesh',
                'Rajasthan'
            ]
        },

        plotOptions:{
            bar:{
                horizontal:false
            }
        },

        fill:{
            colors:['#354358']
        },

        dataLabels:{
            enabled:false
        },

        title:{
            text:"Population Graph",
            align:'center',
            margin:20,
            offsetY:20,
            style:{
                fontSize:'25px'
            }

        }
    };
    const series=[{
            name:"Population",
            data:[
                61130704,
                103804637,
                72138958,
                91347736,
                112372972,
                60383628,
                41927358,
                199812341,
                72597565,
                68621012
            ]
        }]
    return(
        <div className="container-fluid graph">
            <div className="row">
                <div className="col-md-6 col-s-6 col-xs-12">
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height="450"
                    width="100%" />
                </div>
                <div className="col-md-6 col-s-6 col-xs-12">
                <Chart
                    options={options}
                    series={series}
                    type="area"
                    height="350"
                    width="100%" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-s-6 col-xs-12">
                <Chart
                    options={options}
                    series={series}
                    type="line"
                    height="350"
                    width="100%" />
                </div>
                <div className="col-md-6 col-s-6 col-xs-12">
                <Chart
                    options={options}
                    series={series}
                    type="scatter"
                    height="350"
                    width="100%" />
                </div>
            </div>
            </div>

    )

    }
export default Graph;