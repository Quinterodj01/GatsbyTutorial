import React from "react"
import { Link } from "gatsby"
import Layout from "../componets/Layout"

export default () => (
  <Layout>
    window.React1 = require('react') Hello world!{" "}
    <Link to="/blog/">Link to Blog</Link>
  </Layout>
)
