"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = () => {
        document.cookie = "token=valid_token; path=/"; // Simulacija prijave
        router.push("/dashboard"); // Preusmeravanje nakon "prijave"
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Login Page</h1>
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
            </button>
        </div>
    );
}
