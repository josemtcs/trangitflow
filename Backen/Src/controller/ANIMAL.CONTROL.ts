import {ANIMAL} from "../model/ANIMAL"

import  * as DaoAnimales from "../DAO/ANIMALES.DAO"

export const GetANIMAL = async (): Promise<ANIMAL[]>=> {
    try {
        let p: ANIMAL[]= await DaoAnimales.ListaAnimales();
        return p;
    } catch (error){
        throw error;
    }
}