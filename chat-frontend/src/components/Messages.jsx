import React from "react";
import SendMessage from "../components/SendMessage";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";

const Messages = () => {
  return (
    <div className="mesgs">
      {/* <!-- Historia inicio --> */}
      <div className="msg_history">
        <IncomingMessage />
        <OutgoingMessage />
      </div>
      {/* <!-- Historia Fin --> */}
      <SendMessage />
    </div>
  );
};

export default Messages;
