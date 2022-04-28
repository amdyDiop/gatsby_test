import * as React from 'react'

import { graphql } from 'gatsby'

const HomePage = ({ data }) => {
    return (
        <p>
            { /* Use the data in your component*/ }
            { data.site.siteMetadata.description }
        </p>
    )
}

// Export a page query
export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default HomePage