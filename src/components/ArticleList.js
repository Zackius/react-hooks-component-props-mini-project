import React from "react";
import Article from "./Article";

function ArticleList({ posts })  {
  const content = posts. map ((post) => {
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.mintues}
    />;
  });
  return <main>{content}</main>;
}
export default ArticleList;
