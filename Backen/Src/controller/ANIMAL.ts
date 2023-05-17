import {ANIMAL} from "../model/ANIMAL"

import  * as DaoPersona from "../DAO/persona.dao"

export const GetANIMAL = async (): Promise<ANIMAL[]>=> {
    try {
        let p: ANIMAL[]= await DaoPersona.ListaPersonas();
        return p;
    } catch (error){
        throw error;
    }
}