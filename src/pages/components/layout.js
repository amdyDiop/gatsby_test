import * as  React from 'react';
import {graphql, Link, useStaticQuery} from "gatsby";
import {
    container, heading, navLinks, navLinkItem, navLinkText, siteTitle,

} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    siteBuildMetadata {
      buildTime
    }
  }
`)
    return (<div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav className={navLinks}>
            <ul>
                <li className={navLinkItem}><Link to="/">Home</Link></li>
                <li className={navLinkItem}><Link to="/about">About</Link></li>
                <li className={navLinkItem}>
                    <Link to="/blog" className={navLinkText}>Blog</Link>
                </li>
            </ul>
        </nav>
        <main>
            <h1 className={heading}>{pageTitle}</h1>
            <p>{children}</p>
        </main>
    </div>)
}
export default Layout