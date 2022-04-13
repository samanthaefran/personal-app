import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Software Developer</p>
      <StaticImage
        alt="Samantha, bare-faced, beautiful as ever"
        src="https://i.imgur.com/9N8wRiD.jpg"
      />
    </Layout>
  )
}

export default IndexPage