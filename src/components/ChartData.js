export const planetChartData = {
  type: 'doughnut',
  data: {
    datasets: [
      { // one line graph
        data: [25, 25, 50],
        backgroundColor: [
          '#56b7e7',
          '#37B34A',
          '#E63C94',
        ],
        borderColor: [
          'white',
          'white',
          'white',
        ],
        borderWidth: 3,
        hoverBorderColor: ['#EEE82C','#EEE82C','#EEE82C'],
        hoverBackgroundColor: '#EEE82C'
      },
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    animateRotate:true
  }
}

export default planetChartData;