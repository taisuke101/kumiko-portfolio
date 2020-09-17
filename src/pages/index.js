import React from "react"

import Layout from  '../components/Layout';
import Hero from '../components/hero/hero';
import About from '../components/about/about';


export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}
