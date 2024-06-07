import { Component, OnInit } from '@angular/core';
import { ScheduledRide } from '../../core/models/scheduled-ride.model';
import { SharedService } from '../../core/services/shared-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ride-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ride-list.component.html',
  styleUrl: './ride-list.component.scss'
})
export class RideListComponent implements OnInit {
  public scheduledRideList!: ScheduledRide[];

  constructor(
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.scheduledRideList = this.sharedService.getScheduledRideList();
  }
}
