//api는 useEffect를 이용해서 불러온다. 
//useEffect는 2개의 파라미터(매개변수)를 가진다. 1.함수, 2.배열
//console.log에 찍을게 아니고 UI에 보여주기 위해서는 useState에 저장해야 한다.

import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from '../component.js/ProductCard';
import { Container, Row , Col} from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import {productAction} from "../redux/actions/productAction" 
import {useDispatch, useSelector} from "react-redux";

const ProductAll = () => {
    const productList = useSelector((state) => state.product.productList); //store의 product 안에 있는 productList를 달라고 해야 에러가 안뜸.
    /* const [productList, setProductList] = useState([]); */
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const getProducts = () => { /* async 달아주는거 잊지 말기  */
        let searchQuery = query.get("q") || ""; /* q라고 시작되는 것의 아이템을 가져다가 searchQuery에 넣어주기 & q 쿼리값이 없는 경우에는 디폴트로 빈 스트링 넣어주기 */
        console.log("쿼리값은?", searchQuery);
        dispatch(productAction.getProducts(searchQuery));//dispatch가 미들웨어를 거쳐서 가기 위해서 미들웨어 함수를 넣어주어 함수 getProducts를 호출한다. & searchQuery 값이 필요하다.~ 함수에 필요한 정보를 전달하려면 매개변수 값을 이용하면 된다. 
        //미들웨어를 불러줘야 한다. 
        /*let url = `https://my-json-server.typicode.com/jkea1/hnm/products?q=${searchQuery}`;
        let response = await fetch(url);  //url을 fetch 한다. 
        let data = await response.json();  //respose에서 json을 뽑아오기 
        setProductList(data); //productList에 data를 넣어준것이다.  */
    };
    
    useEffect(() => { //useEffect는 맨 처음 프로젝트가 실행되어 렌더후(UI 그려준 후)에 딱 한번 실행된다. 하지만 우리가 원하는 건 쿼리값이 바뀔때 마다 getProducts가 실행되는 것이다. 배열에 우리가 주시해야 하는 query를 넣는다.
        getProducts();
    }, [query]);

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