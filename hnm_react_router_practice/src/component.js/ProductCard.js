import React from 'react';

const ProductCard = ({item}) => { /* item이라는 props는 productAll.js에서 ProductCard 컨테이너에서 추가하였다.  */
    return (
        <div>
            <img width={264} height={396} src={item?.img} /> {/* item? item이 있는지 확안하고 있다면 item의 img를 불러오는 느낌이다. */}
            <div>Conscious Choice</div>
            <div>{item?.title}</div>
            <div>₩{item?.price}</div>
            <div>{item?.new == true ? "신세품" : ""}</div>
        </div>
    )
}

export default ProductCard;