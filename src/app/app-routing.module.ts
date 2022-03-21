import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {CryptoNewsComponent} from "./crypto-news/crypto-news.component";
import {TwitterPostsComponent} from "./twitter-posts/twitter-posts.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'news', component: CryptoNewsComponent},
  {path: 'twitter-posts', component: TwitterPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
