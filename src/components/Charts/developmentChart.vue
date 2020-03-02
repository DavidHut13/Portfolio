<template>
<canvas id="developmentChart"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
     name: 'developmentChart',
     mounted() {
          var ctx = document.getElementById('developmentChart');
          var developmentChart = new Chart(ctx, {
               type: 'horizontalBar',
               data: {
                    labels: ["Vue", "React", "Git", "HTML", "CSS"],
                    datasets: [{

                         display: false,
                         data: [80, 30, 60, 70, 80, 20],
                         backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                         ],
                         borderColor: [
                              'rgba(255,99,132,1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                         ],
                         borderWidth: 1
                    }]
               },
               options: {
                    scales: {
                         xAxes: [{
                              gridLines: {
                                   display: false
                              }
                         }],
                         yAxes: [{
                              gridLines: {
                                   display: false
                              }
                         }]
                    }
               }
          });
     }
}
</script>

<style scoped>

</style>
