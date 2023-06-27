import React from "react";
import "../css/chat.css";
import InboxPeople from "../components/InboxPeople";
import Messages from "../components/Messages";

const ChatPage = () => {
  return (
    <>
      <div className="messaging">
        <div className="inbox_msg">
          <InboxPeople />
          <Messages />
        </div>
      </div>
    </>
  );
};

export default ChatPage;
