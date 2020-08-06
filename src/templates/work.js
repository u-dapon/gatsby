import React, { useState } from "react";
import Slider from "react-slick";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Work({ data }) {
  const [active, setAvtive] = useState(false);

  return (
    <Layout>
      <article className="sheet">
        <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
        <div className="sheet__inner">
          <h1 className="sheet__title name">
            {data.datoCmsWork.title} | UDAPON.TOKYO
          </h1>
          <div className="sheet__gallery">
            <Img fluid={data.datoCmsWork.coverImage.fluid} />
          </div>
          <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
            }}
          />
          <div className="sheet__slider">
            <Slider infinite={true} slidesToShow={1} arrows>
              {data.datoCmsWork.gallery.map(({ fluid }) => (
                <img
                  alt={data.datoCmsWork.title}
                  key={fluid.src}
                  src={fluid.src}
                />
              ))}
            </Slider>
          </div>

          <div className="sheet__reaction">
            <p className={active ? "liked like" : "like"}>Thank you!</p>
            <button
              className={active ? "c-button c-button--active" : "c-button"}
              onClick={() => setAvtive(active ? false : true)}
            >
              <svg
                className="c-button-svg"
                version="1.1"
                x="0px"
                y="0px"
                style={{
                  width: "40px",
                  fill: active ? "rgb(249, 96, 135)" : "#879fbe",
                }}
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path d="M346,0c-5.522,0-10,4.478-10,10v46c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10V10C356,4.478,351.522,0,346,0z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M116,312c-5.52,0-10,4.48-10,10c0,5.52,4.48,10,10,10s10-4.48,10-10C126,316.48,121.52,312,116,312z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M486,292c0-22.056-17.944-40-40-40h-74.652c11.557-29.603,16.235-64.447,15.333-95.464
                			c-0.172-5.919-0.399-9.342-0.706-11.497C385.458,123.432,367.716,106,346,106c-22.056,0-40,17.944-40,40v10
                			c0,63.246-81.214,98.781-142.504,114.019C158.862,259.425,148.284,252,136,252H36c-5.522,0-10,4.478-10,10v240
                			c0,5.522,4.478,10,10,10h100c12.202,0,22.719-7.327,27.401-17.809c5.075,1.302,9.786,2.532,14.135,3.668
                			C212.451,506.978,231.684,512,278.46,512H386c22.056,0,40-17.944,40-40c0-8.224-2.497-15.874-6.77-22.238
                			C434.678,444.359,446,429.599,446,412c0-8.194-2.436-15.869-6.696-22.262C454.684,384.326,466,369.6,466,352
                			c0-8.224-2.497-15.874-6.77-22.238C474.678,324.359,486,309.599,486,292z M146,482c0,5.514-4.486,10-10,10H46V272h90
                			c5.514,0,10,4.486,10,10V482z M446,312c-21.449,0-26.562,0-50,0c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h30
                			c11.028,0,20,8.972,20,20c0,11.046-8.954,20-20,20h-50c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h30
                			c10.897,0,20,8.705,20,20c0,11.046-8.954,20-20,20c-21.449,0-26.562,0-50,0c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h30
                			c11.028,0,20,8.972,20,20s-8.972,20-20,20H278.46c-44.207,0-61.473-4.509-95.87-13.492c-5.039-1.316-10.566-2.759-16.59-4.295
                			V290.025C238.368,272.787,326,230.711,326,156v-10c0-11.028,8.972-20,20-20c11.008,0,19.979,8.958,20,19.969V146
                			c0,4.346,5.424,57.683-16.326,106H316c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10c6.983,0,118.602,0,130,0
                			c11.028,0,20,8.972,20,20C466,303.046,457.046,312,446,312z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M116,352c-5.522,0-10,4.478-10,10v80c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-80C126,356.478,121.522,352,116,352
                			z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M266,126h-40c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h40c5.522,0,10-4.478,10-10C276,130.478,271.522,126,266,126
                			z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M466,126h-40c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h40c5.522,0,10-4.478,10-10C476,130.478,471.522,126,466,126
                			z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M437.921,44.079c-3.906-3.904-10.236-3.904-14.143,0l-28.279,28.279c-3.905,3.905-3.905,10.237,0,14.143
                			c3.907,3.905,10.236,3.904,14.143,0l28.279-28.279C441.826,54.317,441.826,47.985,437.921,44.079z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M296.501,72.358l-28.279-28.279c-3.906-3.904-10.236-3.904-14.143,0c-3.905,3.905-3.905,10.237,0,14.143l28.279,28.279
                			c3.908,3.905,10.237,3.904,14.143,0C300.406,82.596,300.406,76.264,296.501,72.358z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span
                className="c-button-label"
                style={{
                  fontWeight: "bold",
                  marginTop: "4px",
                  color: active ? "rgb(249, 96, 135)" : "#879fbe",
                }}
              >
                LIKE
              </span>
            </button>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
