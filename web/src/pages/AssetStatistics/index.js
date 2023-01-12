/*
 * @Author: HHG
 * @Date: 2022-09-01 17:00:51
 * @LastEditTime: 2023-01-12 18:25:54
 * @LastEditors: 韩宏广
 * @FilePath: \financial\web\src\pages\AssetStatistics\index.js
 * @文件说明: 
 */

import * as echarts from 'echarts';
import { useEffect } from 'react';
import './index.less'
const AssetStatistics = () => {

  const echart = () => {
    var chartDom = document.getElementById('echart');
    var myChart = echarts.init(chartDom);
    var option;

    const colors = ['#5470C6', '#91CC75', '#EE6666'];
    option = {
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Evaporation',
          position: 'right',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[0]
            }
          },
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Precipitation',
          position: 'right',
          alignTicks: true,
          offset: 80,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[1]
            }
          },
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: '温度',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[2]
            }
          },
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: 'Precipitation',
          type: 'bar',
          yAxisIndex: 1,
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 2,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    };
    // var echart = document.getElementById("echart");
    // //通过获取echart容器元素宽度减去一定宽度实现动态调整宽度，解决默认宽度超出的问题    
    // var w = echart.offsetWidth;
    // myChart.resize({ width: (w - 200) });
    option && myChart.setOption(option);
  }
  useEffect(() => {
    //setTimeout解决echart图表超过宽度
    setTimeout(() => {
      echart()
    }, 100);  
  }, [])  
  return (
    <>
      {/* AssetStatistics */}
      <div id='echart' className='echart'></div>
    </>
  )
}

export default AssetStatistics