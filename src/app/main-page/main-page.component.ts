import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {CryptodataService} from "../cryptodata.service";
import {MatSort} from "@angular/material/sort";
import {TokenSearchResultComponent} from "../token-search-result/token-search-result.component";
import {CToken} from "../CToken";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(TokenSearchResultComponent) child:TokenSearchResultComponent;

  cryptoData: CToken[] = [];
  dataSource = new MatTableDataSource(this.cryptoData);
  displayedColumns: string[] = ['Logo', 'Name', 'Price', 'Last 24h'];
  tokenSearchName = '';

  displayTokenDataComponent = true;

  constructor(private cryptoService: CryptodataService) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getTokens();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  private getTokens(){
    this.cryptoService.getCTokens().subscribe(
      (response: CToken[]) => {
        this.cryptoData = response;
        this.dataSource.data = this.cryptoData;
      }
    )
  }

  searchCoin(){
    this.child.initData();
    this.displayTokenDataComponent = true;
  }

}
