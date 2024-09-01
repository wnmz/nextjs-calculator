"use client";

import { AuthService } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import AuthResponse from "@/app/api/user/types/authResponse";

export default function AuthLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleAuthClick = async () => {
        setError('');

        try {
            const resp: AuthResponse = await AuthService.login(email, password);

            if (!resp.success) {
                setError(resp.error || 'Something went wrong. Please try again.');
            } else {
                console.log('Login successful:', resp.data);
                Cookies.set("token", resp.data?.accessToken ?? "");
                
                Cookies.set("currentUser", JSON.stringify(resp.data) ?? "{}");

                // с router.push не ререндерит NavBar
                window.location.href = "/";
            }
        } catch (err) {
            setError('Unknown error. Please try again later.');
        }
    };

    return (
        <>
            <div className="min-h-screen w-full flex items-center justify-center text-black bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-full min-w-[400px] max-w-sm">
                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                    <div className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 p-2 w-full border rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Auth Button */}
                        <button
                            type="submit"
                            onClick={handleAuthClick}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Auth
                        </button>
                    </div>

                    {/* Register Link */}
                    <p className="mt-4 text-sm text-center text-gray-600">
                        Don&apos;t have an account?
                        <a href="/auth/register" className="ml-2 text-blue-500 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
