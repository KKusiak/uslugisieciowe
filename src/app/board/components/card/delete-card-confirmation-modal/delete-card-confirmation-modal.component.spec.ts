import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCardConfirmationModalComponent } from './delete-card-confirmation-modal.component';

describe('DeleteCardConfirmationModalComponent', () => {
  let component: DeleteCardConfirmationModalComponent;
  let fixture: ComponentFixture<DeleteCardConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCardConfirmationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCardConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
