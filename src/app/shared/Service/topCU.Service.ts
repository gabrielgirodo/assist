import { topCUModel } from "../Model/topCU.Model";
import { EventEmitter } from "@angular/core";

export class topCUService
{
    topCUList: topCUModel[] = [
        new topCUModel(1, "Truck", "This is a chassi", "692", 1),
        new topCUModel(2, "Bus", "This is a bus", "1035", 2),
        new topCUModel(3, "Cab", "This is a cab", "285", 6)
    ]

    eTopCUSelected = new EventEmitter<{}>();
}