import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPriceChartComponent } from './crypto-price-chart.component';

describe('CryptoPriceChartComponent', () => {
  let component: CryptoPriceChartComponent;
  let fixture: ComponentFixture<CryptoPriceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoPriceChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoPriceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
