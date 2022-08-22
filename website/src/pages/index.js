import Layout from "@theme/Layout";
import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import classnames from 'classnames';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <Layout>
      <div className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
      <div>
        <div className="container padding-vert--xl text--left">
          <div className="row">
            <div className="col col--3 col--offset-1">
              <img
                className={styles.featureImage}
                src={withBaseUrl('img/undraw_Profile_data.svg')}
              />
              <h2>
                <div>
                  <span>
                    <p>IRP</p>
                  </span>
                </div>
              </h2>
              <div>
                <span>
                  <p>Irish Residence Permit</p>
                </span>
              </div>
            </div>
            <div className="col col--3 col--offset-1">
              <img
                className={styles.featureImage}
                src={withBaseUrl('img/undraw_Around_the_world.svg')}
              />
              <h2>
                <div>
                  <span>
                    <p>VISA</p>
                  </span>
                </div>
              </h2>
              <div>
                <span>
                  <p>Short Stay, Long Stay, Re-Entry Visas</p>
                </span>
              </div>
            </div>
            <div className="col col--3 col--offset-1">
              <img
                className={styles.featureImage}
                src={withBaseUrl('img/undraw_businessman.svg')}
              />
              <h2>
                <div>
                  <span>
                    <p>Work Permit</p>
                  </span>
                </div>
              </h2>
              <div>
                <span>
                  <p>Critical Skills, General, Intra-Company Permits</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
      