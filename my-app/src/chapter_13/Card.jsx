//Card 컴포넌트는 하위 컴포넌트를 감싸서 카드 형태로 보여주는 컴포넌트이다. 
//containment 와 specialization을 모두 사용해서 구현했다. 
//children을 사용한 부분이 containment 이고, title 과 backgroundColor를 사용한 부분이 specialization 이다. 
//Card 컴포넌트는 범용적으로 재사용이 가능한 컴포넌트인데 이걸 사용해서 프로필카드 컴포넌트를 만들어보자.
function Card(props) {
    const {title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                backgroundColor: backgroundColor || "white",
            }}
            >
                {title && <h1>{title}</h1>}
                {children}
        </div>
    );
}

export default Card;