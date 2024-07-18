import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Mycommponents/Layout";
export const About = () => {
const navigate = useNavigate();
return (
    <>
    <Layout>
        <div>About</div>
        <button type="button" className="btn btn-danger" onClick={() => navigate("/")}>
        Go back
        </button>
    </Layout>
    </>
);
};
