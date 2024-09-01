import JwtPayload from "@/app/api/user/types/jwtPayload";
import { AuthService } from "@/services/auth.service";
import { verifyToken } from "@/utils/jwt";
import { cookies } from "next/headers";
import LogOutBtn from "./logOutBtn";

export default async function NavBar() {
  function getData() {
    const cookieStore = cookies();
    const userToken = cookieStore.get('token')?.value;
    if (!userToken) return;

    let jwt = verifyToken(userToken);
    if (!jwt.valid || !jwt.payload) return;

    return jwt.payload;
  }

  let userData = await getData();

  return (
    <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-blue-500 text-white">
      {/* Ссылка "На главную" */}
      <div className="text-lg font-semibold mb-4 md:mb-0">
        <a href="/">NextJS Calculator</a>
      </div>

      {/* Правый блок с аутентификацией */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        {userData ? (
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <span>{userData.email}</span>
            <LogOutBtn/>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="/auth/login" className="hover:underline">
              Login
            </a>
            <a href="/auth/register" className="hover:underline">
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
