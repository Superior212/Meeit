import * as React from "react";

function StarFilledIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 26 26" fill="none" {...props}>
      <path
        d="M12.049 1.202c.3-.92 1.603-.92 1.902 0l2.355 7.248a1 1 0 00.95.69h7.62c.97 0 1.372 1.24.589 1.81L19.3 15.428a1 1 0 00-.363 1.118l2.354 7.247c.3.92-.755 1.687-1.538 1.118l-6.165-4.48a1 1 0 00-1.176 0l-6.165 4.48c-.783.569-1.838-.197-1.538-1.118l2.354-7.247a1 1 0 00-.363-1.119L.535 10.95c-.783-.569-.38-1.809.588-1.809h7.62a1 1 0 00.951-.69l2.355-7.248z"
        fill="#2B293D"
      />
    </svg>
  );
}

const MemoStarFilledIcon = React.memo(StarFilledIcon);
export default MemoStarFilledIcon;
