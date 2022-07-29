//여러개의 댓글을 포함하고 있는 댓글 목록 컴포넌트
import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return (
        <div>
            <Comment />
        </div>
    );
}

export default CommentList;