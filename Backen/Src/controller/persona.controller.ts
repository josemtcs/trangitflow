import {persona} from "../model/persona1"

export const GetPersonas = (): persona[]=> {
    let P: persona[]=[];
    P.push({ id: 1, nombre: "JOSE"});
    P.push({ id: 2, nombre: "YO"});

    return P;
}