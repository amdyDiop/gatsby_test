import * as React from "react"
import Layout from "./components/layout";
import {StaticImage} from "gatsby-plugin-image";
import PropTypes from "prop-types";

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page" children={"I'm making this by following the Gatsby Tutorial."}>
            <StaticImage
                alt="anime"
                src="../images/img3.jpg"
            />
        </Layout>
    )
}

export default IndexPage