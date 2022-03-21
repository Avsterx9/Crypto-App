import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import { MainPageComponent } from './main-page/main-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";

import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from "@angular/material/icon";
import {MatSortModule} from "@angular/material/sort";
import {FormsModule} from "@angular/forms";
import { TokenSearchResultComponent } from './token-search-result/token-search-result.component';
import { CryptoNewsComponent } from './crypto-news/crypto-news.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatGridListModule} from "@angular/material/grid-list";
import { CryptoPriceChartComponent } from './crypto-price-chart/crypto-price-chart.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { TwitterPostsComponent } from './twitter-posts/twitter-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainPageComponent,
    CalculatorComponent,
    TokenSearchResultComponent,
    CryptoNewsComponent,
    CryptoPriceChartComponent,
    TwitterPostsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatDividerModule,
        MatCardModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        HttpClientModule,
        MatIconModule,
        MatSortModule,
        FormsModule,
        MatChipsModule,
        MatSnackBarModule,
        MatGridListModule,
        NgxChartsModule,
        MatButtonToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
