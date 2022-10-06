import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkibizAuthFeatLibComponent } from './ekibiz-auth-feat-lib.component';

describe('EkibizAuthFeatLibComponent', () => {
  let component: EkibizAuthFeatLibComponent;
  let fixture: ComponentFixture<EkibizAuthFeatLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkibizAuthFeatLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkibizAuthFeatLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
