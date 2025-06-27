import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

export function timestamps(date:Date | string){
    return dayjs(date).format("DD/MM/YYYY HH:mm")
}

export function  times(date:Date | string){
    return dayjs(date).format("HH:mm")
}

export function onlYDate(date:Date | string){
    return dayjs(date).format("DD/MM/YYYY")
}