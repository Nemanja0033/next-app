"use client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router.push("/login"); // Vraćamo korisnika na login
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">
                Logout
            </button>
        </div>
    );
}
