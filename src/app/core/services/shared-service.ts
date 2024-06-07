import { Injectable } from "@angular/core";
import { ScheduledRide } from "../models/scheduled-ride.model";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private scheduledRideList: ScheduledRide[] = [];

  addScheduledRide(ride: ScheduledRide): void {
    this.scheduledRideList.push(ride);
  }

  getScheduledRideList(): ScheduledRide[] {
    return this.scheduledRideList;
  }

  getPriceForScheduledRide(): number {
    return Math.round(Math.random() * 100);
  }
}