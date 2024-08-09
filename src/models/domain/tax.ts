export default class Tax {
    TaxId: number | undefined
    Name: string | undefined
    Rate: number | undefined

    constructor(tax: Tax) {
        this.TaxId = tax.TaxId
        this.Name = tax.Name
        this.Rate = tax.Rate
    }
 }