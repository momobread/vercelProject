import styled from "styled-components";

function Nav() {
  return (
    <div id="nav" className="flex w-full border-b border-t border-zinc-400 bg-neutral-100">
      <ul className="flex w-full justify-center">
        {/* lineheight 36 font 16 */}
        <li className="h-10 w-40 border-l border-zinc-400 text-center font-semibold leading-9">게시글</li>
        <li className="h-10 w-40 border-x border-zinc-400 text-center font-semibold leading-9">사진</li>
        <li className="h-10 w-40 border-r border-zinc-400 text-center font-semibold leading-9">문의</li>
      </ul>
    </div>
  );
}

export default Nav;
