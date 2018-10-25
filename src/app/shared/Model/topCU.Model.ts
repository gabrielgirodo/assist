export class topCUModel
{
    public id: number;
    public name: string;
    public description: string;
    public codCU: string;
    public productType: number;

    constructor(pId: number, pName: string, pDescription: string, pCodCU: string, pProductType: number)
    {
        this.id = pId;
        this.name = pName;
        this.description = pDescription;
        this.codCU = pCodCU;
        this.productType = pProductType;
    }
}