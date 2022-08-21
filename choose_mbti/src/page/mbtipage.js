import React from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom";

export const Mbtipage = () => {
    const mbtiList_E = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
    ];

    const mbtiList_I = [
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16'
    ];

    const navigate = useNavigate();
    const goToNextPage = () => {
        navigate("/preference");
    };

    return (
        <div>
            <div className='MBTI'>
            <div className='E'>
            {mbtiList_E.map((mbti_E) => (
                <div onClick= {goToNextPage} className='E_items'>
                    <img className='E_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToppz55Pdmw3ijkiuOuiOkmDZvMIxPSh6ZGg&usqp=CAU" alt="애플로고" />
                    <div className='mbti_name'>{mbti_E}</div>
                </div>
            ))}
            </div>
            <div className='I'>
                {mbtiList_I.map((mbti_I) => (
                    <div className='I_items'>
                        <img className='I_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0tlTGSiNYlJPEcVRDu5xM158wTgPy88FbQ&usqp=CAU" alt="피스로고" />
                        <div className='mbti_name'>{mbti_I}</div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Mbtipage;