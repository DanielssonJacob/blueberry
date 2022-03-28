import React from "react";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

import axios from "../loginForm/api/axios";
import "../loginForm/LoginForm.css";
import DefaultButton from "../default/DefaultButton";
import Logo from "../default/Logo";
import "./SignUpForm.css"



function SignUpForm() {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [role, setRole] = useState("INDIVIDUAL");

    const handleSubmit = async (e) => {
        console.log({ user, pwd, role })
        /*
        await fetch("http://localhost:8080/auth", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({user,pwd, role}),
        })*/
    }
    return (
        <div className="individual-page-body">
            <div className="logo-signing-page">
                <Logo></Logo>
            </div>
            <div className="signin-section-outer">
                <section className="signin-section-inner">

                    <form className="signing-form" onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            className="form-control"
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className="form-control"
                        />
                        <div className="radio-company-individual">
                            Specify:
                            <div className="radio-company-individual-input">
                                <span>
                                    <input type="radio" value="INDIVIDUAL" name="role" onChange={(e) => setRole(e.target.value)} />
                                    Individual
                                </span>
                                <span>
                                    <input type="radio" value="COMPANY" name="role" onChange={(e) => setRole(e.target.value)} /> Company
                                </span>
                            </div>
                            <div>

                            </div>

                        </div>
                        <button hidden></button>
                        <div type="submit" style={{width:"1px",border:"0px",display:"inline-block"}} onClick={handleSubmit} className="signin-page-button">
                            <DefaultButton title={"Sign-up"}></DefaultButton>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default SignUpForm;
