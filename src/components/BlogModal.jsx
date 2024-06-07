import React from "react";
import "../css/blogModal.css";

const BlogModal = ({ article, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>{article.topic}</h2>
        <img src={article.bannerImage} alt={article.topic} />
        <p>{article.fullDescription}</p>
      </div>
    </div>
  );
};

export default BlogModal;
