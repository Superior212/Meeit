import * as React from "react";

function Event(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 44 44" fill="none" {...props}>
      <path
        d="M34.833 34.834V14.667H9.167v20.167h25.666zm-5.5-33H33v3.667h1.833A3.667 3.667 0 0138.5 9.167v25.667a3.654 3.654 0 01-3.667 3.667H9.167A3.667 3.667 0 015.5 34.834V9.167a3.654 3.654 0 013.667-3.666H11V1.834h3.667v3.667h14.666V1.834zm-9.166 15.583h3.666v5.5h5.5v3.667h-5.5v5.5h-3.666v-5.5h-5.5v-3.667h5.5v-5.5z"
        fill="#2B293D"
      />
    </svg>
  );
}

const MemoEvent = React.memo(Event);
export default MemoEvent;
