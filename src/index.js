/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class SocialMedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      ogTitle: '',
      hostName: '',
      error: false,
    };
  }

  fetchMetadata = (url) => {
    if (url === '') return;

    axios.post('http://13.112.111.78:3001/ogbot', { url, json: 0 })
      .then((data) => {
        const meta = data.data.meta[0];
        this.setState({ image: meta.image, ogTitle: meta.title, hostName: meta.host_name });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { direction, url, title } = this.props;
    const {
      image, ogTitle, hostName, error,
    } = this.state;

    if (error) return null;

    return (
      <div className="social-media">
        <div className={`social-media--${direction}`}>
          <img alt="" src={image} />

          <div className="info">
            <div className="info__title">{title === '' ? ogTitle : title}</div>
            <div className="info__host-name">{hostName}</div>
          </div>
        </div>

        <div className="social-media__delete-btn">x</div>
      </div>
    );
  }
}

SocialMedia.propTypes = {
  direction: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
};

SocialMedia.defaultProps = {
  direction: 'horizontal',
  url: '',
  title: '',
};
