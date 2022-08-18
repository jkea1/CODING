import './App.css';

function App() {
  const mbtiList = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
  ]
  return (
    <div>
      <div>
        {mbtiList.map((mbti) => (
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToppz55Pdmw3ijkiuOuiOkmDZvMIxPSh6ZGg&usqp=CAU" alt="애플로고" />
          <div>{mbti}</div>
          )
          )}
      </div>
    </div>
  );
}

export default App;
