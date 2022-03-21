import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CToken} from "./CToken";
import {UserToken} from "./userToken";

@Injectable({
  providedIn: 'root'
})
export class CryptodataService {
  private coinGekoTokensURL: string = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc';
  private coinGekoTokenURL: string = 'https://api.coingecko.com/api/v3/coins/';
  private cryptoCompareNewsURL: string = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN';
  private coinGekoChartURL: string = '/market_chart?vs_currency=usd&days=';

  private static userTokensKey = 'crypt-k_user_tokens';
  private static userTrackerTokenNamesKey = 'crypt-k_track_tokens';
  constructor(private http: HttpClient) {}


  public getCTokenDesc(tokenName: string){
    return this.http.get<any>(this.coinGekoTokenURL + tokenName);
  }

  public getCTokens(): Observable<CToken[]>{
    return this.http.get<CToken[]>(this.coinGekoTokensURL);
  }

  public saveTokensToLocalStorage(userTokens: UserToken[]) {
    localStorage.setItem(CryptodataService.userTokensKey, JSON.stringify(userTokens));
  }

  public getTokensFromLocalStorage(): UserToken[]{
    return JSON.parse(localStorage.getItem(CryptodataService.userTokensKey) || '');
  }

  public getLatestNews(){
    return this.http.get<any>(this.cryptoCompareNewsURL);
  }

  public getTokenChartData(tokenName: string, timePeriod:number){
    return this.http.get<any>(this.coinGekoTokenURL + tokenName + this.coinGekoChartURL + timePeriod);
  }
}
