"use client";
import { usePathname } from "next/navigation";
import { Bars4Icon } from "@heroicons/react/20/solid";
import { Button } from "./Button";
import { Drawer } from "./Drawer";
import { useState } from "react";
import Image from "next/image";
import logo from "@/app/icon-nobackground.png";

type Tabs = {
	name: string;
	path: string;
};

export const Sidebar = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const tabs: Tabs[] = [
		{
			name: "General",
			path: "",
		},
		{ name: "Introduction", path: "/docs/introduction" },
		{ name: "Installation", path: "/docs/installation" },
		{ name: "CLI", path: "/docs/cli" },
		{ name: "Theming", path: "/docs/theming" },
		{ name: "Credits", path: "/docs/credits" },
		{ name: "Components", path: "" },
		{ name: "Alert", path: "/docs/alert" },
		{ name: "Button", path: "/docs/button" },
		{ name: "Button Group", path: "/docs/button-group" },
		{ name: "Card", path: "/docs/card" },
		{ name: "Checkbox", path: "/docs/checkbox" },
		{ name: "Drawer", path: "/docs/drawer" },
		{ name: "Input", path: "/docs/input" },
		{ name: "Modal", path: "/docs/modal" },
		{ name: "Popconfirm", path: "/docs/popconfirm" },
		{ name: "Radio", path: "/docs/radio" },
		{ name: "Select", path: "/docs/select" },
		{ name: "Spinner", path: "/docs/spinner" },
		{ name: "Switch", path: "/docs/switch" },
		{ name: "Tabs", path: "/docs/tabs" },
		{ name: "Toast", path: "/docs/toast" },
		{ name: "Tooltip", path: "/docs/tooltip" },
	];

	const navbar = (
		<div className="grid gap-y-4 overflow-auto ps-4">
			{tabs.map((i) => {
				if (i.path === "")
					return (
						<b key={i.name} className="text-lg">
							{i.name}
						</b>
					);

				return (
					<a
						key={i.name}
						className={`hover:underline underline-offset-4 cursor-pointer text-sm font-medium ${
							pathname === i.path
								? "font-bold"
								: "text-muted-foreground"
						}`}
						href={i.path}
					>
						{i.name}
					</a>
				);
			})}
		</div>
	);
	return (
		<div>
			<Button
				type="ghost"
				className="md:hidden ms-1"
				onClick={() => setOpen(!open)}
			>
				<Bars4Icon className="w-5 h-5" />
			</Button>
			<Drawer
				isOpen={open}
				handleClose={() => setOpen(false)}
				placement="left"
			>
				<div className="-mt-1">
					<a
						className="font-bold inline-flex items-center ps-3 -mt-2"
						href="/"
					>
						<Image src={logo} alt="logo" width={24} height={24} />
						npix
					</a>
					{navbar}
				</div>
			</Drawer>
			<div className="max-md:hidden">{navbar}</div>
		</div>
	);
};
