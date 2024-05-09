import * as React from "react";

function IntrestStar(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 19 18" fill="none" {...props}>
      <path
        d="M9.024.464a.5.5 0 01.952 0l1.77 5.446a.5.5 0 00.475.345h5.726a.5.5 0 01.294.905l-4.633 3.366a.5.5 0 00-.181.559l1.77 5.446a.5.5 0 01-.77.56l-4.633-3.367a.5.5 0 00-.588 0L4.573 17.09a.5.5 0 01-.77-.559l1.77-5.446a.5.5 0 00-.181-.56L.759 7.16a.5.5 0 01.294-.905h5.726a.5.5 0 00.476-.345L9.025.464z"
        fill="#4539B4"
      />
    </svg>
  );
}

const MemoIntrestStar = React.memo(IntrestStar);
export default MemoIntrestStar;
