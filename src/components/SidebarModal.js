import React from "react";

const SidebarModal = ({options = [], onClickLink}) => {
  return (
    <div className="sidebar-modal">
      <ul>
        {options.map((option, index) => (
          <li onClick={() => onClickLink(option.link)} key={index}>{option.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarModal;