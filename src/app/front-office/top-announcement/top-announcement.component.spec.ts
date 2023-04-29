import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAnnouncementComponent } from './top-announcement.component';

describe('TopAnnouncementComponent', () => {
  let component: TopAnnouncementComponent;
  let fixture: ComponentFixture<TopAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
