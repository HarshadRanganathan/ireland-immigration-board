/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <React.Fragment>
        <div className="fb-comments" align="center" data-href={`https://${this.props.config.cname}/`} data-numposts="5" data-width="750"></div>
        <footer className="nav-footer" id="footer">
          <section className="copyright">{this.props.config.copyright}</section>
        </footer>
      </React.Fragment>
    );
  }
}

module.exports = Footer;
