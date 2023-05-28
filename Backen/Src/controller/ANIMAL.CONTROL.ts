import {ANIMAL} from "../MODEL/ANIMAL"

import  * as DaoAnimales from "../DAO/ANIMALES.dao"

export const GetANIMAL = async (): Promise<ANIMAL[]>=> {
    try {
        let p: ANIMAL[]= await DaoAnimales.ListaAnimales();
        return p;
    } catch (error){
        throw error;
    }
}