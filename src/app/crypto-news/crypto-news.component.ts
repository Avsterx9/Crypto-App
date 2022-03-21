import { Component, OnInit } from '@angular/core';
import {CryptodataService} from "../cryptodata.service";

@Component({
  selector: 'app-crypto-news',
  templateUrl: './crypto-news.component.html',
  styleUrls: ['./crypto-news.component.scss']
})
export class CryptoNewsComponent implements OnInit {

  news: any[] = [];

  constructor(private cryptoService: CryptodataService) { }

  ngOnInit(): void {
    this.getNews();
  }

  private getNews(){
    this.cryptoService.getLatestNews().subscribe(
      response => {
        this.news = response.Data;
      }
    )
  }

}
