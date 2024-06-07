import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../core/services/shared-service';
import { ActivatedRoute } from '@angular/router';
import { ScheduledRide } from '../../core/models/scheduled-ride.model';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-ride-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './ride-details.component.html',
  styleUrl: './ride-details.component.scss'
})
export class RideDetailsComponent implements OnInit {
  public scheduledRide!: ScheduledRide;
  public scheduledRideList: ScheduledRide[] = [];
  private rideId!: number;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.scheduledRideList = this.sharedService.getScheduledRideList();

    if (this.scheduledRideList.length) {
      this.rideId = Number(this.route.snapshot.paramMap.get('id'));
      this.scheduledRide = this.scheduledRideList[this.rideId];
    }
  }
}
