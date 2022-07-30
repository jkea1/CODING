import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1, 
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅 시작입니다.",
    },
];

var timer;

//NotificationList 컴포넌트는 Notification 컴포넌트를 목록형태로 보여주기 위한 컴포넌트이다. 
//state를 선언하고 사용하는 부분을 눈여겨 보자. 
class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            notifications: [], //처음 생성자에서 notification이라는 빈 배열을 state에 넣었다. 이 처럼 생성자에서는 앞으로 사용할 데이터를 state에 넣어서 초기화한다. 
        };
    }

    componentDidMount() { //class 컴포넌트의 생명주기 함수인 componentDidMount 함수에서는 js의 setinterval 함수를 이용하여 1초마다 아해의 작업을 수행하게 한다.  
        const { notifications } = this.state;
        timer = setInterval( () => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ //state를 업데이트 하기 위해서 setState함수를 이용했다. 
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [], //콘솔에서 unmount 로그를 보기위해, 알림이 모두 끝나면 notifications 배열을 비우도록 하기. 
                })
            }
        }, 1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                    <Notification 
                        key={notification.id}
                        id={notification.id}
                        message={notification.message} 
                        />
                    );    
                })}
            </div>
        );
    }    
}

export default NotificationList;