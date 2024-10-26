function Header() {
  return (
    //테두리 밑이 안먹힘
    <div className="h-header flex w-full items-center justify-center border-b-2 border-slate-950">
      <p className="h-fit w-fit p-3">
        <span className="text-3xl font-bold text-amber-200">우리집 고양이</span>
      </p>
    </div>
  );
}
export default Header;
