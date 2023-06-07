import jsonData from '../../../../data.json';

export const data = {
  labels: ['Sales Office', 'Inbound WB', 'Diesel Bay', 'Gasohol95 Bay ', 'Outbound WB'],
  datasets: [
    {
      label: 'Minutes',
      data: [
        parseFloat(jsonData[0].avgwaittimeso),
        parseFloat(jsonData[0].avgwaittimeib),
        parseFloat(jsonData[0].avgwaittimediesel),
        parseFloat(jsonData[0].avgwaittimegas95),
        parseFloat(jsonData[0].avgwaittimeob)
      ],
      backgroundColor: [
        'rgba(255, 134, 159, 0.4)',
        'rgba(98, 182, 239, 0.4)',
        'rgba(113, 205, 205,0.4)',
        'rgba(170, 128, 252,0.4)',
        'rgba(255, 177, 101,0.4)'
      ],
      borderWidth: 2,
      borderColor: [
        'rgba(255, 134, 159, 1)',
        'rgba(98, 182, 239, 1)',
        'rgba(113, 205, 205, 1)',
        'rgba(170, 128, 252, 1)',
        'rgba(255, 177, 101, 1)'
      ],
    },
  ],
};