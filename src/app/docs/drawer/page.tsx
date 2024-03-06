"use client";

import { CodeBlock } from "@/components/CodeBlock";
import {
	Drawer,
	DrawerDescription,
	DrawerProps,
	DrawerTitle,
} from "@/components/Drawer";
import { Select } from "@/components/Select";
import { SimpleTable } from "@/components/SimpleTable";
import { Switch } from "@/components/Switch";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Example } from "@/components/Example";
import reactElementToJSXString from "react-element-to-jsx-string";
import {
	Cog6ToothIcon,
	EnvelopeIcon,
	ExclamationCircleIcon,
	HeartIcon,
	TrashIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
	const [open, setOpen] = useState(false);
	const [backdrop, setBackdrop] = useState(true);
	const [placement, setPlacement] = useState<
		"left" | "top" | "right" | "bottom"
	>("right");

	const data = [
		{
			field: "open",
			description: "Whether the drawer is open or not",
			type: "boolean",
		},
		{
			field: "handleClose",
			description:
				"What to do when the user clicks the 'X' button or presses Esc to close the drawer",
			type: "Function",
		},
		{
			field: "backdrop",
			description:
				"If true, darken the area outside of the drawer to create a backdrop",
			type: "boolean",
		},
		{
			field: "placement",
			description: "Where to place the drawer",
			type: '"left" | "top" | "right" | "bottom"',
		},
	];

	const example = (
		<>
			<Button onClick={() => setOpen(!open)}>Try me</Button>
			<Drawer
				isOpen={open}
				handleClose={() => setOpen(false)}
				backdrop={backdrop}
				placement={placement}
			>
				<header>
					<DrawerTitle>John Smith</DrawerTitle>
					<DrawerDescription>jhon.smith@xyz.com</DrawerDescription>
				</header>
				<main className="my-4 border-t border-b border-border px-2 py-4 grow block">
					<div className="flex space-x-8 items-center hover:bg-accent-hover rounded-md p-2 hover:cursor-pointer">
						<EnvelopeIcon className="w-5 h-5" />
						<div className="col-span-5">Inbox</div>
					</div>
					<div className="flex space-x-8 items-center hover:bg-accent-hover rounded-md p-2 hover:cursor-pointer">
						<HeartIcon className="w-5 h-5" />
						<div className="col-span-5">Favorites</div>
					</div>

					<div className="flex space-x-8 items-center hover:bg-accent-hover rounded-md p-2 hover:cursor-pointer">
						<ExclamationCircleIcon className="w-5 h-5" />
						<div className="col-span-5">Spam</div>
					</div>

					<div className="flex space-x-8 items-center hover:bg-accent-hover rounded-md p-2 hover:cursor-pointer">
						<TrashIcon className="w-5 h-5" />
						<div className="col-span-5">Trash</div>
					</div>

					<div className="flex space-x-8 items-center hover:bg-accent-hover rounded-md p-2 hover:cursor-pointer">
						<Cog6ToothIcon className="w-5 h-5" />
						<div className="col-span-5">Settings</div>
					</div>
				</main>
				<footer>
					<Button type="danger">Report an issue</Button>
				</footer>
			</Drawer>
		</>
	);
	return (
		<div className="space-y-4">
			<h1 className="header">Drawer</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example}>
					<div>
						<p className="mb-2">Open</p>
						<Switch
							checked={open}
							onChange={() => setOpen(!open)}
						/>
					</div>
					<div>
						<p className="mb-2">Backdrop</p>
						<Switch
							checked={backdrop}
							onChange={() => setBackdrop(!backdrop)}
						/>
					</div>
					<div>
						<p>Placement</p>
						<Select
							className="mt-2 w-full"
							onChange={(v) =>
								// @ts-ignore
								setPlacement(v.target.value)
							}
							options={[
								{ value: "right", label: "Right" },
								{ value: "top", label: "Top" },
								{ value: "left", label: "Left" },
								{ value: "bottom", label: "Bottom" },
							]}
						/>
					</div>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Drawer</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>
			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
		</div>
	);
}
