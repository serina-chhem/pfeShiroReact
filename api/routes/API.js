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
    const { fn_pat, ln_pat } = req.query;
    const [
        cros,
    ] = await db.query(
        "SELECT * FROM cro JOIN pat USING (pat_id) JOIN med USING (med_id) WHERE pat_firstname = ? AND pat_lastname = ?;",
        [fn_pat, ln_pat]
    );
    res.json(cros);
});

/* POST CRO */
router.post("/cro", async (req, res, next) => {
    console.log(req.body);
    const { fn_pat, ln_pat, fn_med, ln_med, cro } = req.body;
    const [
        [{ pat_id }],
    ] = await db.query(
        "SELECT pat_id FROM pat WHERE pat_firstname = ? AND pat_lastname = ?;",
        [fn_pat, ln_pat]
    );
    console.log(pat_id);
    const [
        [{ med_id }],
    ] = await db.query(
        "SELECT med_id FROM med WHERE med_firstname = ? AND med_lastname = ?;",
        [fn_med, ln_med]
    );
    console.log(med_id);
    const result = await db.query(
        "INSERT INTO cro(med_id, pat_id, cro) VALUES (?, ?, ?)",
        [med_id, pat_id, cro]
    );
    const [
        [created_cro],
    ] = await db.query("SELECT * FROM cro WHERE cro_id = ?;", [
        result.insertId,
    ]);
    res.json(created_cro);
});

module.exports = router;
