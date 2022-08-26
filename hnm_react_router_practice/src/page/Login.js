import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { useState } from 'react';

const Login = ({setAuthenticate}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loginUser = (event) => { /* event를 받아온다 */
        event.preventDefault(); /* form에서는 사용해 주는것이 좋다. 페이지가 계속 refresh 되는것을 막을 수 있다. event에서 주는 이럴때 쓰는 함수이다. */
        console.log("login user function issue");
        dispatch(authenticateAction.login(id, password)); //dispatch는 미들웨어 함수를 호출한다. & id 와 password 값도 같이 호출
        navigate("/");
    };

    return (
        <Container>
            <Form onSubmit={(event) => loginUser(event)}> {/* 로그인 했을때 새로고침하는 것을 막기위해서 form에서 제공하는 event를 파라미터 값으로 받아온다. */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event)=>setId(event.target.value)} /> {/* onChange 부터는 form 에서 사용자가 입력할때마다 데이터를 읽어오는 방법이다. */}
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="danger" type="submit"> {/* variant를 바꿔서 button의 색깔과 디자인을 바꿀수 있다.  */}
                    로그인
                </Button>
            </Form>
        </Container>
    )
}

export default Login