"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import logo from "@/app/icon-nobackground.png";
import Image from "next/image";
import GithubDark from "@/app/github-mark-white.png";
import GithubLight from "@/app/github-mark.png";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

export const Topbar = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const changeTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	const img = theme === "light" || !mounted ? GithubLight : GithubDark;

	return (
		<div className="py-3 top-0 z-10 sticky border-b border-border/40 backdrop-blur bg-background/40">
			<div className="flex justify-between items-center m-auto md:max-w-[1400px] w-full">
				<a
					className="text-xl font-bold inline-flex items-center max-md:hidden ps-3"
					href="/"
				>
					<Image src={logo} alt="logo" width={24} height={24} />
					npix
				</a>
				<div className="md:hidden">
					<Sidebar />
				</div>
				<div className="flex gap-2 pe-3">
					<Link
						href="https://github.com/MuffinTheDragon/npix/"
						target="_blank"
					>
						<Button type="ghost">
							<Image
								src={img}
								width={20}
								height={6}
								alt="github"
							/>
						</Button>
					</Link>
					<Button
						type="ghost"
						onClick={changeTheme}
						className="focus:ring-0"
					>
						{theme === "light" || !mounted ? (
							<MoonIcon className="w-5 h-5" />
						) : (
							<SunIcon className="w-5 h-5" />
						)}
					</Button>
				</div>
			</div>
		</div>
	);
};
