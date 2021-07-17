import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPersonalDataComponent } from './request-personal-data.component';

describe('RequestPersonalDataComponent', () => {
  let component: RequestPersonalDataComponent;
  let fixture: ComponentFixture<RequestPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestPersonalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
