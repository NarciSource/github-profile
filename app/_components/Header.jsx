"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const [name, setName] = useState("");
    const router = useRouter();

    return (
        <div>
            <i />
            <input
                value={name}
                placeholder="User Search"
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        router.push(`users/${name}`);
                    }
                }}
            />
        </div>
    );
}
