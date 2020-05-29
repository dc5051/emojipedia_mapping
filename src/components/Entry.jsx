import React from "react";
import Emoji from "./Emoji";
import Info from "./Info";
import Meaning from "./Meaning";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <Emoji emoji={props.emoji} />
        <Info detail={props.name} />
      </dt>
      <Meaning detail={props.meaning} />
    </div>
  );
}

export default Entry;
