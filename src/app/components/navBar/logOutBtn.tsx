"use client";

import useLogOut from "@/app/hooks/useLogOut";

export default function LogOutBtn() {
    const logOut = useLogOut();

    return (<>
        <button onClick={() => { logOut(); }} className="hover:text-black">Log Out</button>
    </>)
}