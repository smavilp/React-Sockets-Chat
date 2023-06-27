import React from "react";
import SidebarChatItem from "./SidebarChatItem";

const Sidebar = () => {
  const chats = [1, 2, 3];
  return (
    <div className="inbox_chat">
      {chats.map((chat) => (
        <SidebarChatItem key={chat} />
      ))}

      <div className="extra_space"></div>
    </div>
  );
};

export default Sidebar;
