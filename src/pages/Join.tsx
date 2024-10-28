function Join() {
  const userInform = [{ userId: "momo", password: "1234", userNum: "1", nickname: "모모링" }];

  window.sessionStorage.setItem("user", JSON.stringify(userInform));
  // window.sessionStorage.setItem("password", "1234");
  //   window.
  return <div className="">회원가입 페이지 입니다</div>;
}
export default Join;
