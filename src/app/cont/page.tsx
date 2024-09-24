import { useSession } from "next-auth/react";
import SignOutBtn from "./components/SignOutBtn";

export default async function Page() {
  return (
    <>
      <h1>Welcome to page!</h1>
      <SignOutBtn />
    </>
  );
}
