import React from "react";

const types = {
  success: { className: "bg-green-600", title: "Success!" },
  danger: { className: "bg-orange-700", title: "Error!" },
  info: { className: "bg-lightBlue-600", title: "Info:" },
};

const Message = ({ type, text }) => {
  const { className: backgroundColorClass, title } = types[type] || {
    className: "",
    title: "",
  };

  return (
    <div className="fixed bottom-5 right-5 w-screen h-screen pointer-events-none select-none flex items-end justify-end">
      <div className={`p-4 rounded text-white ${backgroundColorClass}`}>
        <span>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
