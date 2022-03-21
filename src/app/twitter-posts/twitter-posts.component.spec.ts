import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterPostsComponent } from './twitter-posts.component';

describe('TwitterPostsComponent', () => {
  let component: TwitterPostsComponent;
  let fixture: ComponentFixture<TwitterPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
