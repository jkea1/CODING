import React from 'react';
import { useParams } from 'react-router-dom'; /* 파라미터인 id값이나 num값을 가져올수 있다. */

const ProductDetailPage = () => {
    const {id} = useParams();  /* destructuring : object를 return 값으로 받을때 거기 안에 있는 key값을 mention하고 싶다면 {id} 해도 된다. */
    return (
        <div>
            <h1>Show Product Detail{id}</h1> {/* id 값을 읽어올수 있게 됐다. */}
        </div>
    )
}

export default ProductDetailPage;