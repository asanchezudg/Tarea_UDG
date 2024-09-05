import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'mysql-techwork-udgvirtual-techwork.e.aivencloud.com',
  port: process.env.DB_PORT || 18118,
  user: process.env.DB_USER || 'avnadmin',
  password: process.env.DB_PASSWORD || 'AVNS_1Dye_sfp1FZnU6d4yOr',
  database: process.env.DB_NAME || 'tareas',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}