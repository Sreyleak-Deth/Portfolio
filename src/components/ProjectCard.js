import { Col } from "react-bootstrap";
import React from "react";
import PropTypes from 'prop-types';

export const ProjectCard = ({ title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} loading="lazy" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button 
            className="github-btn"
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, '_blank');
            }}
          >
            <i className="fab fa-github"></i> View Code
          </button>
        </div>
      </div>
    </Col>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired
};
