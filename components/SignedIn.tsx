"use client";

import { authClient } from "@/lib/auth-client";
import { Skeleton } from "./ui/skeleton";

export default function SignedIn({ children }: { children: React.ReactNode }) {
    const {
        data: session,
        isPending
    } = authClient.useSession();

    if (isPending) {
        return (
            <>
                <Skeleton className="h-14" />
            </>
        )
    }

    if (!session) {
        return null
    }

    return children
}