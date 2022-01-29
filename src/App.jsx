import React, {useReducer} from "react";
import JoinRoom from "./components/JoinRoom";
import reducer from "./reducer";
import socket from './socket';

const initialState = {
  joined: false,
  userName: null,
  roomId: null
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onLogin = (data) => {
    dispatch({type: 'JOINED', payload: data});

    socket.emit('ROOM:JOIN', data);
  }

  console.log(state)

  return (
    <div className="wrapper">
      {!state.joined && <JoinRoom onLogin={onLogin} />}
    </div>
  )
}

export default App;
