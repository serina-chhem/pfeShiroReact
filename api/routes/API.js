const express = require("express");
const router = express.Router();

const db = require("mysql-promise")();

db.configure({
    host: "localhost",
    user: "root",
    password: "password",
    database: "shiro",
});

/* GET meds listing. */
router.get("/meds", async (req, res, next) => {
    const [result] = await db.query("SELECT * FROM med;");
    res.json(result);
});

/* GET pats listing. */
router.get("/pats", async (req, res, next) => {
    const [result] = await db.query("SELECT * FROM pat;");
    res.json(result);
});

/* GET CROs listing. */
router.get("/cro", async (req, res, next) => {
    /*à modifier*/
    const [result] = await db.query(
        "SELECT * FROM cro WHERE cro_id = ?;",
        req.body
    );
    res.json(result);
});

/* POST CRO */
router.post("/cro", async (req, res, next) => {
    console.log(req.body);
    const { med, pat, cro } = req.body;
    const result = await db.query(
        "INSERT INTO cro(med_id, pat_id, cro) VALUES (?, ?, ?)",
        [med, pat, cro]
    );
    const [
        [created_cro],
    ] = await db.query("SELECT * FROM cro WHERE cro_id = ?;", [
        result.insertId,
    ]);
    res.json(created_cro);
});

module.exports = router;
