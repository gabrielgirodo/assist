import { languageModel } from "../Model/language.Model";

export class languageService{
    private vLanguageList: languageModel[] = [ new languageModel(1, 'English'), new languageModel(2, 'Local')];

    loadLanguages()
    {
        return this.vLanguageList.slice();
    }
}