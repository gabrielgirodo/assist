import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import {topCUModel} from "../shared/Model/topCU.Model";
import { topCUService } from '../shared/Service/topCU.Service';

@Component({
  selector: 'app-top-cu',
  templateUrl: './top-cu.component.html',
  styleUrls: ['./top-cu.component.css']
})
export class TopCUComponent implements OnInit {

  vTopCUList: topCUModel[] = [];

  constructor(private toastr: ToastrService, private _topCUService: topCUService) {
   }

  ngOnInit() {
    this.vTopCUList = this._topCUService.topCUList;
  }

  showSuccess() {
  }

  onChange(pTopCU: topCUModel)
  {
    this.toastr.success(pTopCU.description, pTopCU.name);

    this._topCUService.eTopCUSelected.emit(
      {
        pTopCU
      }
    )
  }
}
