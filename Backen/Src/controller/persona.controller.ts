import {persona} from "../model/persona1"

import  * as DaoPersona from "../DAO/persona.dao"

export const GetPersonas = async (): Promise<persona[]>=> {
    try {
        let p: persona[]= await DaoPersona.ListaPersonas();
        return p;
    } catch (error){
        throw error;
    }
}