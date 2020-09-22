import React from "react"
import { graphql } from 'gatsby';

import Layout from  '../components/Layout';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import Portfolio from "../components/portfolio/portfolio";


const Home = ({data}) => {
  const {allAirtable:{nodes:projects}} = data
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio projects={projects}/>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}, limit: 6, sort: {fields: data___date, order: DESC}) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Home