import { Component, OnInit } from '@angular/core';
import { topCUService } from '../shared/Service/topCU.Service';
import { topCUModel } from '../shared/Model/topCU.Model';
import { functionAreaKDModel } from '../shared/Model/functionAreaKD.Model';
import { functionAreaKDService } from '../shared/Service/functionAreaKD.Service';

@Component({
  selector: 'app-function-area-kd',
  templateUrl: './function-area-kd.component.html',
  styleUrls: ['./function-area-kd.component.css']
})
export class FunctionAreaKDComponent implements OnInit {

  topCU: topCUModel;

  functionAreaKDList: functionAreaKDModel[];

  listToDisplay: {id: number, name: string}[];

  constructor(private _topCUService: topCUService, private _functionAreaKDService: functionAreaKDService) {
    
    this.functionAreaKDList = this._functionAreaKDService.functionAreaKDList;
    
    this._topCUService.eTopCUSelected.subscribe(
      (result) => {
        
        this.listToDisplay = [];
        
        for (let i = 0;  i < this.functionAreaKDList.length; i++) {
          if (this.functionAreaKDList[i].id == result.pTopCU.id) {
            this.listToDisplay.push(this.functionAreaKDList[i]);
          }
        }
      }
    )
   }

  ngOnInit() {
    this.listToDisplay = this.functionAreaKDList;
  }
}
