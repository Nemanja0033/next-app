"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username }),
        });

        if (res.ok) {
            router.push("/dashboard");
        } else {
            setError("Login failed!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border px-4 py-2 rounded-lg"
                />
                <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
}
