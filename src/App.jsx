import { useEffect, useState } from 'react'
import { ResponsiveLine } from '@nivo/line'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(
    [
      {
        "id": "japan",
        "color": "hsl(70, 70%, 50%)",
        "data": [
          {
            "x": "otra cosa",
            "y": 88
          },
          {
            "x": "helicopter",
            "y": 78
          },
          {
            "x": "boat",
            "y": 169
          },
          {
            "x": "train",
            "y": 234
          },
          {
            "x": "subway",
            "y": 229
          },
          {
            "x": "bus",
            "y": 70
          },
          {
            "x": "car",
            "y": 76
          },
          {
            "x": "moto",
            "y": 110
          },
          {
            "x": "bicycle",
            "y": 9
          },
          {
            "x": "horse",
            "y": 95
          },
          {
            "x": "skateboard",
            "y": 292
          },
          {
            "x": "others",
            "y": 62
          }
        ]
      },
      {
        "id": "france",
        "color": "hsl(116, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 54
          },
          {
            "x": "helicopter",
            "y": 106
          },
          {
            "x": "boat",
            "y": 186
          },
          {
            "x": "train",
            "y": 55
          },
          {
            "x": "subway",
            "y": 194
          },
          {
            "x": "bus",
            "y": 286
          },
          {
            "x": "car",
            "y": 189
          },
          {
            "x": "moto",
            "y": 230
          },
          {
            "x": "bicycle",
            "y": 218
          },
          {
            "x": "horse",
            "y": 91
          },
          {
            "x": "skateboard",
            "y": 101
          },
          {
            "x": "others",
            "y": 135
          }
        ]
      },
      {
        "id": "us",
        "color": "hsl(37, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 190
          },
          {
            "x": "helicopter",
            "y": 114
          },
          {
            "x": "boat",
            "y": 75
          },
          {
            "x": "train",
            "y": 117
          },
          {
            "x": "subway",
            "y": 172
          },
          {
            "x": "bus",
            "y": 93
          },
          {
            "x": "car",
            "y": 221
          },
          {
            "x": "moto",
            "y": 61
          },
          {
            "x": "bicycle",
            "y": 242
          },
          {
            "x": "horse",
            "y": 15
          },
          {
            "x": "skateboard",
            "y": 159
          },
          {
            "x": "others",
            "y": 250
          }
        ]
      },
      {
        "id": "germany",
        "color": "hsl(161, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 72
          },
          {
            "x": "helicopter",
            "y": 132
          },
          {
            "x": "boat",
            "y": 7
          },
          {
            "x": "train",
            "y": 261
          },
          {
            "x": "subway",
            "y": 46
          },
          {
            "x": "bus",
            "y": 167
          },
          {
            "x": "car",
            "y": 57
          },
          {
            "x": "moto",
            "y": 71
          },
          {
            "x": "bicycle",
            "y": 263
          },
          {
            "x": "horse",
            "y": 145
          },
          {
            "x": "skateboard",
            "y": 67
          },
          {
            "x": "others",
            "y": 103
          }
        ]
      },
      {
        "id": "norway",
        "color": "hsl(289, 70%, 50%)",
        "data": [
          {
            "x": "plane",
            "y": 89
          },
          {
            "x": "helicopter",
            "y": 83
          },
          {
            "x": "boat",
            "y": 201
          },
          {
            "x": "train",
            "y": 81
          },
          {
            "x": "subway",
            "y": 46
          },
          {
            "x": "bus",
            "y": 152
          },
          {
            "x": "car",
            "y": 258
          },
          {
            "x": "moto",
            "y": 176
          },
          {
            "x": "bicycle",
            "y": 104
          },
          {
            "x": "horse",
            "y": 222
          },
          {
            "x": "skateboard",
            "y": 225
          },
          {
            "x": "others",
            "y": 290
          }
        ]
      }
    ]
  )
  const [connected, setConnected] = useState(false)
  useEffect(() => {
    // const WebSocket = require('ws');
    // const url = 'wss://dg92ab32p7.execute-api.us-east-1.amazonaws.com/production'
    // const ws = new WebSocket(url);

    // ws.on('open', (algo) => {
    //   console.log(algo)
    // });
    // ws.on('message', data => console.log(`From server: ${data}`));
    // ws.on('close', () => {
    //   setConnected(false);
    //   process.exit();
    // });

    fetch("https://xd3hyogtf9.execute-api.us-east-1.amazonaws.com/production/info").then((response) => {
      return response.json();
    }).then(data => {setData(data.data)})
  }, [])
  return (
    <div className=' flex flex-col justify-center h-screen p-24 gap-10'>
      <h1 className='text-green-500 text-center font-bold text-6xl'>Energy Tracker Info</h1>
      <div className='h-full w-full border'>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'device',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    </div>

  )
}

export default App
