import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CryptodataService} from "../cryptodata.service";
import {CryptoPriceChartComponent} from "../crypto-price-chart/crypto-price-chart.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-token-search-result',
  templateUrl: './token-search-result.component.html',
  styleUrls: ['./token-search-result.component.scss']
})
export class TokenSearchResultComponent implements OnInit {

  @Input() tokenName: string = '';
  @ViewChild(CryptoPriceChartComponent) priceChart;

  token: any;

  constructor(private cryptoService: CryptodataService, private snackBar: MatSnackBar) { }

  public initData(){
    this.getTokenData();
  }

  ngOnInit(): void {

  }

  private getTokenData() {
    this.cryptoService.getCTokenDesc(this.tokenName).subscribe(
      response => {
        this.token = response;
        if(this.priceChart){
          this.priceChart.ngOnInit();
        }
      },
      error => {
        this.openSnackBar("Error " + error.status + ": Token not found!", "OK");
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
