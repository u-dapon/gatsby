/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (
        <div className={`container ${showMenu ? "is-open" : ""}`}>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <div className="container__sidebar">
            <div className="sidebar">
              <img class="main-image" src="https://pbs.twimg.com/profile_images/1112504074459480064/2ylym9Ff_400x400.jpg" alt=""/>
                <h6 className="sidebar__title name">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </h6>
              <div
                className="sidebar__intro"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsHome.introTextNode.childMarkdownRemark.html
                }}
              />

              <p className="sidebar__social">
                {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                  <a
                    key={profile.profileType}
                    href={profile.url}
                    target="blank"
                    className={`social social--${profile.profileType.toLowerCase()}`}
                  >
                    {" "}
                  </a>
                ))}
              </p>
              <div className="sidebar__copyright">
                {data.datoCmsHome.copyright}
              </div>
            </div>
          </div>
          <div className="container__body">
            <div className="container__mobile-header">
              <div className="mobile-header">
                <div className="mobile-header__menu">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setShowMenu(!showMenu);
                    }}
                  />
                </div>
                <div className="mobile-header__logo name">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
