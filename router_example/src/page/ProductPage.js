//useSearchParams은 react useState 훅사용하는 것과 비슷하다. 

import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductPage = () => {
    let [query, setQuery] = useSearchParams()
    console.log("ddd", query.get("page"));
    return (
        <div>
            <h1>Show All products!</h1>
        </div>
    )
}

export default ProductPage;