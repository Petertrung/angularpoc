import { Component } from '@angular/core';
import { ChartDataset } from 'chart.js';

interface MyChartData extends ChartDataset<'bar'> {
  data: number[];
  label: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public chartData: MyChartData[] = [
    { data: [1000, 1200, 1300, 1100, 900], label: 'Number of Apartments' }
  ];
  public chartLabels = ['2017', '2018', '2019', '2020', '2021'];
  public chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  public chartLegend = true;
  public chartType = 'bar';

}
