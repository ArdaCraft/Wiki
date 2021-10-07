/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Pages</h5>
            <a href={this.docUrl('installation.html', this.props.language)}>
              Installation
            </a>
            <a href={this.docUrl('commands.html', this.props.language)}>
              Commands
            </a>
            <a href={this.docUrl('plants_nature.html', this.props.language)}>
              Guides
            </a>
            <a href={this.docUrl('arnor_ruins.html', this.props.language)}>
              Build Guides
            </a>
          </div>
          <div>
            <h5>Website</h5>
            <a
              href="https://forums.ardacraft.me/"
              target="_blank"
              rel="noreferrer noopener">
              Forums
            </a>
            <a
              href="https://ardacraft.me/modpack/"
              target="_blank"
              rel="noreferrer noopener">
              Modpack
            </a>
            <a
              href="https://ardacraft.me/map/"
              target="_blank"
              rel="noreferrer noopener">
              Map
            </a>
            <a
              href="https://discord.gg/fykFabG"
              target="_blank"
              rel="noreferrer noopener">
              Discord
            </a>
          </div>
          <div>
            <h5>Social</h5>
            <a href="https://twitter.com/ArdaCraft_" target="_blank">Twitter</a>
            <a href="https://www.youtube.com/c/ardacraftmc/" target="_blank">Youtube</a>
            <a href="https://www.reddit.com/r/ardacraft" target="_blank">Reddit</a>
            <a href="http://www.planetminecraft.com/server/ardacraft-3119330/" target="_blank">Planet Minecraft</a>
            <a href="https://github.com/ArdaCraft" target="_blank">GitHub</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
