import React from "react";

const students = [
    {
        id: 1, //학생의 id가 key 값으로 사용된다. 
        name: "재민",
    },
    {
        id: 2,
        name: "유리",
    },
    {
        id: 3,
        name: "재혁",
    },
    {
        id: 4,
        name: "혜인",
    }
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li>{student.id}</li>; //key를 포맷팅 된 문자열 또는 index를 키로 사용할 수 있다. 
            })}
        </ul>
    );
}

export default AttendanceBook;