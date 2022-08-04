//글의 제목만 표시해 주면 된다. 
//<TitleText>를 이용해서 props로 받은 post 객체에 들어있는 title 문자열을 표시해 준다. 

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props) {
    const {post, onClick} = props;

    return (
        <Wrapper onClick = {onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;