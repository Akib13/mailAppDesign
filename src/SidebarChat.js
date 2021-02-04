import { Avatar } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import "./SidebarChat.css";
import StartOutlineIcon from "@material-ui/icons/StarOutline";

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter an Email Address");

        if(roomName) {
            //database
        }
    };

    return !addNewChat ? (
        <div className = "sidebarChat">
            <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>
                    Designmodo
                </h2>
                <p style = {{marginLeft:"200px"}}>yesterday</p>
                <p>subject</p>
                <StartOutlineIcon />
                <p>Please check out our...</p>
            </div>
        </div>
    ) : (
        <div onClick = {createChat} className = "sidebarChat">
            <h2>Add New Mail</h2>
        </div>
    );
}

export default SidebarChat;