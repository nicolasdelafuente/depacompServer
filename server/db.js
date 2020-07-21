const Pool = require ("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password: "Admin2020",
    database:"departamento",
    host:"34.71.29.253",
    port: 5432
});

module.exports = pool;
