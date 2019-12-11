export const planetChartData = {
  type: 'doughnut',
  data: {
    datasets: [
      { // one line graph
        data: [25, 75],
        backgroundColor: [
          '#E5E5E5',
          '#37B34A',
        ],
        borderColor: [
          '#E5E5E5',
          '#37B34A'
        ],
        borderWidth: 3,
        hoverBorderColor: ['#EEE82C','#EEE82C'],
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