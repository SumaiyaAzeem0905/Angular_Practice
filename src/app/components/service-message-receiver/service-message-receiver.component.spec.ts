import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMessageReceiverComponent } from './service-message-receiver.component';

describe('ServiceMessageReceiverComponent', () => {
  let component: ServiceMessageReceiverComponent;
  let fixture: ComponentFixture<ServiceMessageReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceMessageReceiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceMessageReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
