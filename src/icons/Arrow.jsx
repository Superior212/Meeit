import * as React from "react";

function Arrow(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 35 30" fill="none" {...props}>
      <path
        d="M2 15h30m0 0L17 2m15 13L17 28"
        stroke="#FFE047"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoArrow = React.memo(Arrow);
export default MemoArrow;
