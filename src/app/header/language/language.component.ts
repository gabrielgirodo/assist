import { Component, OnInit } from '@angular/core';
import { languageModel } from './Model/language.Model';
import { languageService } from './Service/language.Service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
  providers:[languageService]
})
export class LanguageComponent implements OnInit {

  vLanguageList: languageModel[];

  constructor(private _languageService: languageService) { }

  ngOnInit() {
    this.vLanguageList = this._languageService.loadLanguages();
  }

}
