import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        I'm a software developer.
      </h1>
      <p>I write PHP and JavaScript at <a target="_blank" href="https://www.framestore.com">Framestore</a>.</p>
      <p>I'm on <a target="_blank" href="https://github.com/magnusvaughan">Github</a> and <a target="_blank" href="https://twitter.com/magnusvaughan">Twitter.</a></p>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
