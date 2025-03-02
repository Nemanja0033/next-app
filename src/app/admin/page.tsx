"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkAdmin = async () => {
            const res = await fetch("/api/user");
            const data = await res.json();
            setIsAdmin(data.role === "admin");
        };

        checkAdmin();
    }, []);

    if (!isAdmin) return <h1 className="text-center mt-10 text-red-500">Access Denied</h1>;

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Welcome Admin!</h1>
            <p className="text-gray-600">This is a protected admin route.</p>
        </div>
    );
}
