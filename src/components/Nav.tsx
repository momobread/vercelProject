function Nav() {
  return (
    <div className="flex w-full justify-center bg-slate-100">
      <ul className="flex gap-2">
        {/* lineheight 36 font 16 */}
        <li className="h-10 w-32 bg-zinc-200 text-center text-lg font-semibold leading-9">게시글</li>
        <li className="h-10 w-32 bg-zinc-200 text-center text-lg font-semibold leading-9">사진</li>
        <li className="h-10 w-32 bg-zinc-200 text-center text-lg font-semibold leading-9">문의</li>
      </ul>
    </div>
  );
}
export default Nav;
