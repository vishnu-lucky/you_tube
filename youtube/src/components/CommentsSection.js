// CommentsSection.js
import React from 'react';


function CommentsSection({ comments }) {
  return (
    <div className="commentsSection">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p><strong>{comment.user}</strong></p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsSection;
