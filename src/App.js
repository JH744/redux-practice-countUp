import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./components/Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: { num: 2 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "user1", password: "1234" } });
  };

  return (
    <div className="App">
      <h1>카운트</h1>
      <h1>{count}</h1>
      <button onClick={increase}>+5증가</button>
      <button onClick={decrement}>-2감소</button>
      <button onClick={login}>로그인</button>
      <Box />
      <h4>
        유저 아이디 비밀번호 {id} {password}
      </h4>
    </div>
  );
}

export default App;
