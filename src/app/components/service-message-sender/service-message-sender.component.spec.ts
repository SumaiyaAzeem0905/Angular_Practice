import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMessageSenderComponent } from './service-message-sender.component';

describe('ServiceMessageSenderComponent', () => {
  let component: ServiceMessageSenderComponent;
  let fixture: ComponentFixture<ServiceMessageSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceMessageSenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceMessageSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
