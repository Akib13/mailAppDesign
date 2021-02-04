import { Avatar, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Chat.css";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StartOutlineIcon from "@material-ui/icons/StarOutline";

function Chat() {
    const [seed, setSeed] = useState("");
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);
    return (
        <div className = "chat">
            <div className = "chat_header">
            <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className = "chat_headerInfo">
                <h3>Designmodo</h3>
                <p>dmoto@yahoo.com</p>
            </div>
            <div className = "chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <DeleteOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
            </div>
            </div>
            
            <div className = "chat_body">
                <StartOutlineIcon />
                <p className="chat_message">
                <span className = "chat_name">Designmodo to me</span>
                Enjoy 50% discount
                <span className = "chat_timestamp">2014-06-05 12:45 </span>
                </p>
                <img src = "https://picsum.photos/200/300"></img>
                <p>
                    <span className = "chat_details">Designmodo</span>
                    <span className = "chat_details" style= {{fontWeight: "bold"}}>Exclusive deal</span>
                    <span className = "chat_details">View In the Browser</span>
                </p>
                <div className="chat_extra">
                    <p style = {{textAlign: "center", marginBottom:"20px", fontSize: "20px", fontWeight:"bold"}}>Last Day 50% off startup framework</p>
                    <p style = {{textAlign: "center", marginBottom:"20px"}}>We offer you a 50% discount on <a href = "\"> Startup Design Framework.</a></p>
                    <p>Startup Framework is a tool to help create websites and is a nice</p>
                </div>
            </div>
            <div className = "chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input type = "text" placeholder = "Say Thanks?"/>
                    <button>Send Reply</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;