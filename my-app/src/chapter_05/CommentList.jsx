//여러개의 댓글을 포함하고 있는 댓글 목록 컴포넌트
import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "정진경",
        comment: "안녕하세요, 정진경 입니다."
    },
    {
        name: "우영우",
        comment: "안녕! 나는 우영우야."
    },
    {
        name: "손석구",
        comment: "리액트 재미있어요!"
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;