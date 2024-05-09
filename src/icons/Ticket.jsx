import * as React from "react";

function Ticket(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 22 22" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_2555_10674)">
        <path
          d="M21.062 7.794l-1.896-1.896a.86.86 0 00-1.16-.043 1.324 1.324 0 01-1.79-.068 1.324 1.324 0 01-.07-1.791.86.86 0 00-.043-1.16L14.205.937a.856.856 0 00-1.208 0L9.974 3.96a1.713 1.713 0 00-.411.666.331.331 0 01-.208.207 1.71 1.71 0 00-.666.412L.938 12.997a.855.855 0 000 1.208l1.898 1.897a.86.86 0 001.16.043 1.319 1.319 0 011.86 1.86.86.86 0 00.043 1.16l1.896 1.896a.855.855 0 001.209 0l7.751-7.752c.187-.187.328-.415.412-.665a.33.33 0 01.208-.209c.25-.083.478-.224.665-.41L21.063 9a.856.856 0 000-1.207zM11.25 6.52a.687.687 0 01-.973 0l-.494-.494a.687.687 0 01.972-.972l.495.494a.686.686 0 010 .972zm1.89 1.891a.687.687 0 01-.972 0l-.472-.473a.688.688 0 11.972-.972l.473.473a.687.687 0 010 .973v-.001zm1.89 1.89a.686.686 0 01-.971 0l-.473-.472a.687.687 0 01.972-.972l.473.473a.688.688 0 01.002.974l-.002-.002zm1.91 1.915a.686.686 0 01-.972 0l-.492-.495a.689.689 0 11.975-.97l.492.494a.687.687 0 010 .973l-.003-.002z"
          fill="#5A5A5A"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_2555_10674">
          <path fill="#fff" d="M0 0h22v22H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoTicket = React.memo(Ticket);
export default MemoTicket;