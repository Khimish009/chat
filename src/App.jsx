import React, {useReducer} from "react";
import JoinRoom from "./components/JoinRoom";
import reducer from "./reducer";

const initialState = {
  joined: false,
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onLogin = () => {
    dispatch({type: 'JOINED', payload: true})
  }

  console.log(state)

  return (
    <div className="wrapper">
      {!state.joined && <JoinRoom onLogin={onLogin} />}
    </div>
  )
}

export default App;
