import { Suspense } from "react";
import { userType } from "../../types/user";

export async function userCreate(userNewInform: userType) {
  let success = false;
  const USERURL = import.meta.env.VITE_USER_URL;
  try {
    const response = await fetch(`${USERURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInform),
    });
    if (!response.ok) throw new Error("user 생성 실패");

    success = true;
    return success;
  } catch (e) {
    console.log(e);
    return success;
  }
}
