import jsonData from '../../../../data.json';

export const data = {
  labels: ['Diesel', 'GAS95'],
  datasets: [
    {
      label: 'Time',
      data: [
        parseFloat(jsonData[0].avgservicetimediesel),
        parseFloat(jsonData[0].avgservicetimegas95)
      ],
      backgroundColor: [
        'rgba(255, 134, 159, 0.4)',
        'rgba(98, 182, 239, 0.4)'
      ],
      borderWidth: 2,
      borderColor: [
        'rgba(255, 134, 159, 1)',
        'rgba(98, 182, 239, 1)'
      ],
    },
  ],
};
