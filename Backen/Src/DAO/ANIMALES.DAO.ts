import GetConnection from "../Conexion/Conexion";
import { ANIMAL } from "../MODEL/ANIMAL";


export const ListaAnimales = async(): Promise<ANIMAL[]> => {
    try{
        let sql= "SELECT * FROM ANIMAL;";
        const pool =await GetConnection();
        let rs =await pool.query <ANIMAL>(sql);

        if(rs!=undefined){
            return rs.recordset;
        }
        return [];

    } catch (error){
        throw error;
    }
}