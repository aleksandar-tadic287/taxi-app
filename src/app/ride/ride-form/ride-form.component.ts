import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedService } from '../../core/services/shared-service';

@Component({
  selector: 'app-ride-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './ride-form.component.html',
  styleUrl: './ride-form.component.scss'
})
export class RideFormComponent implements OnInit {
  public rideForm: FormGroup;
  public paymentMethod!: string;
  public formSubmitted!: boolean;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService
  ) {
    this.rideForm = this.fb.group({
      startingAddress: ['', Validators.required],
      finalAddress: ['', Validators.required],
      dateTime: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.formSubmitted = false;
  }

  changePaymentMethod(event: Event): void {
    this.paymentMethod = (event.target as HTMLInputElement).value;
    this.formSubmitted = false;

    if (this.paymentMethod === 'card') {
      this.rideForm.addControl('cardNumber', new FormControl('', Validators.required));
      this.rideForm.addControl('expirationCardDate', new FormControl('', Validators.required));
    } else {
      this.rideForm.removeControl('cardNumber');
      this.rideForm.removeControl('expirationCardDate');
    }
  }

  submitForm(): void {
    this.formSubmitted = true;

    if (this.rideForm.status === 'VALID') {
      this.sharedService.addScheduledRide({
        ...this.rideForm.value,
        price: this.sharedService.getPriceForScheduledRide()
      });

      this.formSubmitted = false;
      this.paymentMethod = '';
      this.rideForm.reset();
    }
  }
}
