import React from "react";
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";


const About = ({ data }) => {

  const { strapiAboutPage: info  } = data

  return (
    <Layout>
      <div className='xs:pl-4 xs:pr-4'>
        <div className='flex xs:flex-col md:flex-row justify-evenly mb-6'>
          <Img className='rounded-full h-36 w-36 flex items-center justify-center' fluid={info.pic.childImageSharp.fluid} />
          <div className='flex flex-col items-center align-center xs:pt-6 md:pt-0'>
            <h2> Hi, my name is {info.Name}.  </h2>
            <h3> I am a {info.Profession}</h3>
          </div>
        </div>
        <ReactMarkdown source={info.text} escapeHtml={true} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  
  {
    strapiAboutPage {
        Name
        Profession
        text
        pic {
          childImageSharp {
          fluid(grayscale: true) {
            ...GatsbyImageSharpFluid
          }
          }
        }
      }
  }
  
`

export default About;
