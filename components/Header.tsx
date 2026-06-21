"use client"

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { UserButton } from "./auth/user/user-button"

export function Header() {
    return (
        <>
            <header className="flex h-14 border-b">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink render={
                                <Link href={"/"}>
                                    <img src="favicon.ico" alt="Home" className="h-8" />
                                </Link>}>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <UserButton />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
        </>

    )
}
