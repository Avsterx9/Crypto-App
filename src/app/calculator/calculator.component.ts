import {Component, OnInit, ViewChild} from '@angular/core';
import {CryptodataService} from "../cryptodata.service";
import {MatTable, MatTableDataSource} from "@angular/material/table";

import * as XLSX from 'xlsx';
import {UserToken, UserTokenXLSX} from "../userToken";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  tokenName: string;
  tokenQuantity: number;
  tokenPurchasePrice: number = 0;

  userTokens: UserToken[] = [];

  displayedColumns: string[] = ['Logo', 'Name', 'Price', 'Purchase Price', 'Qty', 'Action'];
  dataSource = new MatTableDataSource(this.userTokens);

  summary: number = 0;

  @ViewChild(MatTable) table: MatTable<UserToken>;

  constructor(private cryptoService: CryptodataService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.cryptoService.getTokensFromLocalStorage().forEach((token: UserToken) => {
        token = this.updateTokenPrice(token);
        this.userTokens.push(token);
        this.summary += token.price * token.quantity;
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  private updateTokenPrice(localStorageToken: UserToken): UserToken {
    this.cryptoService.getCTokenDesc(localStorageToken.name.toLowerCase()).subscribe(
      response => {
        localStorageToken.price = response.market_data.current_price.usd;
      }
    )
    return localStorageToken;
  }

  searchCoin() {
    if (this.tokenName != '' || this.tokenQuantity == null) {
      this.cryptoService.getCTokenDesc(this.tokenName.toLowerCase()).subscribe(
        response => {
          var token = new UserToken(response.name, this.tokenQuantity, response.market_data.current_price.usd, this.setPurchasePrice(response.market_data.current_price.usd),  response.image.thumb);
          this.userTokens.push(token);
          this.cryptoService.saveTokensToLocalStorage(this.userTokens);
          this.summary += token.price * this.tokenQuantity;
          this.table.renderRows();
        }
      )
    } else{
      this.openSnackBar("Invalid Input Data!", "OK");
    }
  }

  deleteToken(index: number) {
    if (this.userTokens.length != 1) {
      this.summary -= this.userTokens[index].price * this.userTokens[index].quantity;
      this.userTokens.splice(index, 1);
    } else {
      this.userTokens.pop();
      this.summary = 0;
    }
    this.cryptoService.saveTokensToLocalStorage(this.userTokens);
    this.table.renderRows();
  }

  exportData() {
    let dataToExport: UserTokenXLSX[] = [];

    this.userTokens.forEach(token => {
      dataToExport.push(new UserTokenXLSX(token.name, token.price, token.entryPrice, token.quantity, token.price * token.quantity));
    })

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, 'tokens');

    XLSX.writeFile(wb, 'UserTokens - ' + new Date().toDateString() + '.xlsx');
  }

  private setPurchasePrice(price: number):number{
    if (this.tokenPurchasePrice == 0 || this.tokenPurchasePrice == null){
      return price;
    }
    return this.tokenPurchasePrice;
  }
}
