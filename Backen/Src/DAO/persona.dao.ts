import GetConnection from "../Conexion/Conexion";
import { persona } from "../model/persona1";

export const ListaPersonas = async(): Promise<persona[]> => {
    try{
        let sql= "SELECT * FROM Persona;";
        const pool =await GetConnection();
        let rs =await pool.query <persona>(sql);

        if(rs!=undefined){
            return rs.recordset;
        }
        return [];

    } catch (error){
        throw error;
    }
}