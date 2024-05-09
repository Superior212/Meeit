import * as React from "react";

function Square(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 5 5" fill="none" {...props}>
      <circle cx={2.5} cy={2.5} r={2.5} fill="#5A5A5A" />
    </svg>
  );
}

const MemoSquare = React.memo(Square);
export default MemoSquare;
