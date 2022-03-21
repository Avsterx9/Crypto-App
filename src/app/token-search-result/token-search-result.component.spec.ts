import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenSearchResultComponent } from './token-search-result.component';

describe('TokenSearchResultComponent', () => {
  let component: TokenSearchResultComponent;
  let fixture: ComponentFixture<TokenSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
