import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
		marginTop: "1rem",
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  return (
    <div style={styles}>
      {/* <p>{msg}</p> */}
			<p dangerouslySetInnerHTML={{__html:msg}}/>
    </div>
  );
};

export default Message;
