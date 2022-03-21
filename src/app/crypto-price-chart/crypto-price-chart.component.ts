import {Component, Input, OnInit} from '@angular/core';
import {CryptodataService} from "../cryptodata.service";
import {DatePipe} from "@angular/common";
import { LOCALE_ID, Inject } from '@angular/core';
@Component({
  selector: 'app-crypto-price-chart',
  templateUrl: './crypto-price-chart.component.html',
  styleUrls: ['./crypto-price-chart.component.scss']
})
export class CryptoPriceChartComponent implements OnInit {
  @Input() chartTokenName: string;

  chartDurationPeriod: number = 7;
  view: [number, number] = [window.screen.width * 0.80, window.screen.height * 0.35];

  chartData: any = [
    {
      name: 'Bitcoin',
      series: []
    }
  ];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = true;
  showGridLanes: false;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Time';
  yAxisLabel: string = 'Price';
  timeline: boolean = true;
  yScaleMin: number;

  constructor(private cryptoService: CryptodataService, @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit(): void {
    this.getChartData();
  }

  processChartData(){
    this.getChartData();
  }

  private getChartData(){
    if(this.chartData[0].series.length != 0){
      this.chartData[0].series = [];
    }

    this.cryptoService.getTokenChartData(this.chartTokenName, this.chartDurationPeriod).subscribe(
      response => {
        var min = response.prices[0][1];
        response.prices.map((p) => {
          if(p[1] < min){
            min = p[1];
          }
          var time = new DatePipe(this.locale);
          this.chartData[0].name = this.chartTokenName;
          this.chartData[0].series.push({name: time.transform(new Date(p[0]), 'medium'), value: p[1].toString()});
        });
        this.chartData = [...this.chartData];
        this.yScaleMin = min;
      }
    );
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
