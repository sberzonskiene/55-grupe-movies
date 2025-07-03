import mysql from 'mysql2/promise';

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: '55gr_movies',
    user: 'root',
    password: '', 
});