import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingRequestsComponent } from './existing-requests.component';

describe('ExistingRequestsComponent', () => {
  let component: ExistingRequestsComponent;
  let fixture: ComponentFixture<ExistingRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
