import { Fragment } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

const Blog = ({ blog: { title, coverUrl, coverUrlAlt, contents } }) => {
  return (
    <div className="blog">
      <img
        src={coverUrl}
        alt={coverUrlAlt}
        className="blog-img"
        style={{ backgroundColor: "#DEE1E6", minHeight: coverUrl ? 0 : 400 }}
      />
      <h2>{title}</h2>
      {contents.map(({ type, text, imageUrl, imageUrlAlt }, index) => (
        <Fragment key={index}>
          {type === "paragraph" ? (
            <p>{text}</p>
          ) : type === "code" ? (
            <div className="code-content">
              <SyntaxHighlighter language="javascript" style={syntaxStyle}>
                {text}
              </SyntaxHighlighter>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={imageUrlAlt}
              className="blog-img"
              style={{ backgroundColor: "#DEE1E6" }}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Blog;
