import { connection } from "../../db.js";

export async function getAllPublicCategories() {
    try {
        const sql = `
            SELECT *
            FROM movies
            INNER JOIN general_status
                ON movies.status_id = general_status.id
            WHERE general_status.name = "published";`;
        const [result] = await connection.execute(sql);
        return result;
    } catch (err) {
        return [];
    }
}