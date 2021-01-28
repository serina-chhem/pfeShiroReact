import React from "react";
import { useState } from "react";

const Cro = () => {
    const [firstname_pat, setFirstname_pat] = useState("");
    const [lastname_pat, setLastname_pat] = useState("");
    const [cros, setCros] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:9000/api/cro?fn_pat=${firstname_pat}&ln_pat=${lastname_pat}`;
            const result = await fetch(url, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            setCros(await result.json());
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div>
            <div className="Blanc">
                <form onSubmit={handleSubmit}>
                    <p>Nom du patient:</p>
                    <input
                        value={lastname_pat}
                        name="lastname_pat"
                        onChange={(e) => setLastname_pat(e.target.value)}
                    />
                    <p>Prénom du patient:</p>
                    <input
                        value={firstname_pat}
                        name="firstname_pat"
                        onChange={(e) => setFirstname_pat(e.target.value)}
                    />
                    <p></p>
                    <input type="submit" value="Rechercher" />
                </form>
            </div>
            {cros && (
                <div>
                    {cros.map((cro, index) => (
                        <div key={index}>
                            <p>Date:</p>
                            {cro.date}
                            <p>Nom du patient:</p>
                            {cro.pat_lastname}
                            <p>Prénom du patient:</p>
                            {cro.pat_firstname}
                            <p>Nom du médecin:</p>
                            {cro.med_lastname}
                            <p>Prénom du médecin:</p>
                            {cro.med_firstname}
                            <p>Compte rendu:</p>
                            {cro.cro}
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cro;
