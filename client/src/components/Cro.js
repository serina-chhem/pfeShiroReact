import React from "react";
import { useState } from "react";
import { host } from "../config.json";

const Cro = () => {
    const [firstname_pat, setFirstname_pat] = useState("");
    const [lastname_pat, setLastname_pat] = useState("");
    const [cros, setCros] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${host}/cro?fn_pat=${firstname_pat}&ln_pat=${lastname_pat}`;
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
        <div className="croDisplayPage">
            <h2> Suivi des comptes-rendus opératoires</h2>

            <div>
                <h3>Rechercher un patient</h3>
                <form onSubmit={handleSubmit} className="recherchePatient">
                    <input
                        value={lastname_pat}
                        name="lastname_pat"
                        placeholder="Nom "
                        className="patientInput"
                        onChange={(e) => setLastname_pat(e.target.value)}
                    />

                    <input
                        value={firstname_pat}
                        placeholder="Prénom "
                        name="firstname_pat"
                        className="patientInput"
                        onChange={(e) => setFirstname_pat(e.target.value)}
                    />

                    <input
                        type="submit"
                        value="Rechercher"
                        className="buttonRecherche"
                    />
                </form>
            </div>

            {cros && (
                <div className="displaycros">
                    <div className="glasscro">
                        {cros.map((cro, index) => (
                            <div key={index} className="onecro">
                                <p>Date de saisie : {cro.date}</p>

                                <p>
                                    {" "}
                                    Patient :{" "}
                                    <span className="lastNames">
                                        {cro.pat_lastname}
                                    </span>{" "}
                                    <span className="firstNames">
                                        {cro.pat_firstname}{" "}
                                    </span>{" "}
                                </p>
                                <p>
                                    {" "}
                                    Chirurgien :
                                    <span className="lastNames">
                                        {" "}
                                        Dr. {cro.med_lastname}{" "}
                                    </span>
                                    <span className="firstNames">
                                        {cro.med_firstname}{" "}
                                    </span>{" "}
                                </p>

                                <b>Compte rendu :</b>
                                {cro.cro}
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cro;
