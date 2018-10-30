import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = ({ data }) => {
  console.log('data is',data);
  return (
    <Layout>
      <h1>This is my about page</h1>
    </Layout>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter
    }
  }
`