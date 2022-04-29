import * as React from 'react'
import Layout from '../components/layout'
import { container, profilePic, intro } from './index.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className={container}>
        <article className={intro}>software developer. sometimes an artist. part-time cyclist </article>
      <StaticImage className={profilePic}
        alt="Samantha, bare-faced, beautiful as ever"
        src="https://i.imgur.com/9N8wRiD.jpg"
        height={250}
        width={250}
      />
      </div>
    </Layout>
  )
}

export default IndexPage