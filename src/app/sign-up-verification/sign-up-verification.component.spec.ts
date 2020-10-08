import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpVerificationComponent } from './sign-up-verification.component';

describe('SignUpSuccessComponent', () => {
  let component: SignUpVerificationComponent;
  let fixture: ComponentFixture<SignUpVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
