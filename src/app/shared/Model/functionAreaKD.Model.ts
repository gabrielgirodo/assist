export class functionAreaKDModel
{
    public id: number;
    public name: string;
    public description: string;
    public codCUId: number;

    constructor(pId: number, pName: string, pDescription: string, pCodCUId: number)
    {
        this.id = pId;
        this.name = pName;
        this.description = pDescription;
        this.codCUId = pCodCUId;
    }
}