import React, {useState, useMemo} from "react";
import api from '../api/index';

const JoinRoom = ({onLogin}) => {
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');
    const disabledButton = useMemo(() => roomId === '' || userName === '', [roomId, userName]);

    const send = () => {
        const roomData = {roomId, userName};

        api.sendRoomData(roomData)
            .then(() => {
                onLogin(roomData);
                setRoomId('');
                setUserName('');
            })
            .catch((err) => {
                console.log('Error', err)
            });
    };

    return (
        <div className="join-block">
            <input
                type="text"
                placeholder="Room ID"
                value={roomId}
                onInput={(e) => setRoomId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Ваше имя"
                value={userName}
                onInput={(e) => setUserName(e.target.value)}
            />
            <button 
                className="btn btn-success"
                onClick={send}
                disabled={disabledButton}
            >
                ВХОД
            </button>
        </div>
    )
}

export default JoinRoom;
