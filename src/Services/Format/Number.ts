export class NumberHelper{
    static numberMoneySplit(value:number):string[]{
        const split = String(NumberHelper.truncate(value,2)).split('.')
        return split
    }

    static fix(value:number,precision:number){
        return Math.abs(value).toFixed(precision)
    }

    static float(value:number,precision:number){
        return parseFloat(NumberHelper.fix(value,precision))
    }

    static formatFloat(value:number,precision:number){
        return NumberHelper
            .truncate(value,precision)
            .toLocaleString('pt-BR',{minimumFractionDigits: 2, maximumFractionDigits: 2})
    }

    static truncate(value:number,precision:number){
        const base = Math.pow(10,precision)
        return Math.floor(value*base)/base
    }
}