import React from "react";

const JoinRoom = () => {
    return (
        <div className="join-block">
            <input
                type="text"
                placeholder="Room ID"
            />
            <input
                type="text"
                placeholder="Ваше имя"
            />
            <button className="btn btn-success">
                ВХОД
            </button>
        </div>
    )
}

export default JoinRoom;
