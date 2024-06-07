import React, { useState, useEffect } from "react";
import BlogModal from "./BlogModal";
import "../css/blog.css";

const Blog = () => {
  const [articles] = useState([
    {
      id: 1,
      topic: "Article 1",
      bannerImage: "url_to_image_1.jpg",
      shortDescription: "Short description of article 1.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel gravida tellus. Cras id augue vestibulum, interdum tortor eget, vehicula lorem. Phasellus in fermentum nulla. Quisque tincidunt tellus in ante consectetur, eget fermentum felis hendrerit. Nam euismod nunc nec erat pulvinar dictum. Duis et turpis urna. Quisque accumsan lacus eros, nec vehicula turpis pharetra et. Fusce tempor libero eget rhoncus pellentesque. Vivamus id neque ut nulla ullamcorper posuere vel at urna. Nulla ut diam non sem dictum iaculis. Nam ac sapien sed lorem venenatis vehicula. Curabitur sagittis consequat sapien sit amet tempor. Donec varius, nulla in tincidunt convallis, mauris magna eleifend justo, et viverra nulla lectus eget velit. Maecenas sed accumsan lorem. Sed ultrices, sapien nec faucibus consectetur, ipsum metus dictum velit, id viverra dolor felis eu nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel gravida tellus. Cras id augue vestibulum, interdum tortor eget, vehicula lorem. Phasellus in fermentum nulla. Quisque tincidunt tellus in ante consectetur, eget fermentum felis hendrerit. Nam euismod nunc nec erat pulvinar dictum. Duis et turpis urna. Quisque accumsan lacus eros, nec vehicula turpis pharetra et. Fusce tempor libero eget rhoncus pellentesque. Vivamus id neque ut nulla ullamcorper posuere vel at urna. Nulla ut diam non sem dictum iaculis. Nam ac sapien sed lorem venenatis vehicula. Curabitur sagittis consequat sapien sit amet tempor. Donec varius, nulla in tincidunt convallis, mauris magna eleifend justo, et viverra nulla lectus eget velit. Maecenas sed accumsan lorem. Sed ultrices, sapien nec faucibus consectetur, ipsum metus dictum velit, id viverra dolor felis eu nisl.",
      
      linkedinLink: "linkedin_post_link_1",
    },
    {
      id: 2,
      topic: "Article 2",
      bannerImage: "url_to_image_2.jpg",
      shortDescription: "Short description of article 2.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel gravida tellus. Cras id augue vestibulum, interdum tortor eget, vehicula lorem. Phasellus in fermentum nulla. Quisque tincidunt tellus in ante consectetur, eget fermentum felis hendrerit. Nam euismod nunc nec erat pulvinar dictum. Duis et turpis urna. Quisque accumsan lacus eros, nec vehicula turpis pharetra et. Fusce tempor libero eget rhoncus pellentesque. Vivamus id neque ut nulla ullamcorper posuere vel at urna. Nulla ut diam non sem dictum iaculis. Nam ac sapien sed lorem venenatis vehicula. Curabitur sagittis consequat sapien sit amet tempor. Donec varius, nulla in tincidunt convallis, mauris magna eleifend justo, et viverra nulla lectus eget velit. Maecenas sed accumsan lorem. Sed ultrices, sapien nec faucibus consectetur, ipsum metus dictum velit, id viverra dolor felis eu nisl.",
      linkedinLink: "linkedin_post_link_2",
    },
    {
      id: 3,
      topic: "Article 3",
      bannerImage: "url_to_image_3.jpg",
      shortDescription: "Short description of article 3.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel gravida tellus. Cras id augue vestibulum, interdum tortor eget, vehicula lorem. Phasellus in fermentum nulla. Quisque tincidunt tellus in ante consectetur, eget fermentum felis hendrerit. Nam euismod nunc nec erat pulvinar dictum. Duis et turpis urna. Quisque accumsan lacus eros, nec vehicula turpis pharetra et. Fusce tempor libero eget rhoncus pellentesque. Vivamus id neque ut nulla ullamcorper posuere vel at urna. Nulla ut diam non sem dictum iaculis. Nam ac sapien sed lorem venenatis vehicula. Curabitur sagittis consequat sapien sit amet tempor. Donec varius, nulla in tincidunt convallis, mauris magna eleifend justo, et viverra nulla lectus eget velit. Maecenas sed accumsan lorem. Sed ultrices, sapien nec faucibus consectetur, ipsum metus dictum velit, id viverra dolor felis eu nisl.",
      linkedinLink: "linkedin_post_link_3",
    },
    {
      id: 4,
      topic: "Article 4",
      bannerImage: "url_to_image_4.jpg",
      shortDescription: "Short description of article 4.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel gravida tellus. Cras id augue vestibulum, interdum tortor eget, vehicula lorem. Phasellus in fermentum nulla. Quisque tincidunt tellus in ante consectetur, eget fermentum felis hendrerit. Nam euismod nunc nec erat pulvinar dictum. Duis et turpis urna. Quisque accumsan lacus eros, nec vehicula turpis pharetra et. Fusce tempor libero eget rhoncus pellentesque. Vivamus id neque ut nulla ullamcorper posuere vel at urna. Nulla ut diam non sem dictum iaculis. Nam ac sapien sed lorem venenatis vehicula. Curabitur sagittis consequat sapien sit amet tempor. Donec varius, nulla in tincidunt convallis, mauris magna eleifend justo, et viverra nulla lectus eget velit. Maecenas sed accumsan lorem. Sed ultrices, sapien nec faucibus consectetur, ipsum metus dictum velit, id viverra dolor felis eu nisl.",
      linkedinLink: "linkedin_post_link_4",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [articles.length]);

  const handleSeeMore = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    setShowModal(false);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <div className="blog-container">
      <div className="blog-slider">
        {articles.map((article, index) => (
          <div
            className={`blog-slide ${index === currentIndex ? "active" : ""}`}
            key={article.id}
          >
            <h2>{article.topic}</h2>
            <img src={article.bannerImage} alt={article.topic} />
            <p>{article.shortDescription}</p>
            <button className="see-more-btn" onClick={() => handleSeeMore(article)}>See More</button>
          </div>
        ))}
        <button className="prev-btn" onClick={handlePrevSlide}>
          <img src="left-arrow.png" alt="Previous" />
        </button>
        <button className="next-btn" onClick={handleNextSlide}>
          <img src="right-arrow.png" alt="Next" />
        </button>
      </div>
      {showModal && (
        <BlogModal article={selectedArticle} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Blog;
