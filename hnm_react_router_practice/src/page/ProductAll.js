//api는 useEffect를 이용해서 불러온다. 
//useEffect는 2개의 파라미터(매개변수)를 가진다. 1.함수, 2.배열
//console.log에 찍을게 아니고 UI에 보여주기 위해서는 useState에 저장해야 한다.

import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../component.js/ProductCard';
import { Container, Row , Col} from 'react-bootstrap';

const ProductAll = () => {
    let [productList, setProductList] = useState([]);
    const getProducts = async () => { /* async 달아주는거 잊지 말기  */
        let url = `http://localhost:4000/products`;
        let response = await fetch(url); /* url을 fetch 한다. */ 
        let data = await response.json(); /* respose에서 json을 뽑아오기 */
        setProductList(data); //productList에 data를 넣어준것이다. 
    };
    
    useEffect(() => {
        getProducts();
    },[]);

    return (
        <div>
            <Container> {/* 부트스트랩에서 contiainer의 역할 : 아이템이 가운데로 모이게 해준다. */} 
                <Row>
                    {productList.map((menu) => ( /* productList에 있는 item의 개수만큼 productcard 가 만들어진다. */
                        <Col lg={3}>
                            <ProductCard item={menu} /> {/* props로 item을 만들어서 menu를 넘겨준다. */}
                        </Col> 
                    ))}
                </Row>
            </Container> 
        </div>
    )
}

export default ProductAll