"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Modal, ModalDescription, ModalTitle } from "@/components/Modal";
import { SimpleTable } from "@/components/SimpleTable";
import { Switch } from "@/components/Switch";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Example } from "@/components/Example";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Input } from "@/components/Input";

export default function Home() {
	const [open, setOpen] = useState(false);
	const [backdrop, setBackdrop] = useState(false);

	const data = [
		{
			field: "open",
			description: "Whether the modal is open or not",
			type: "boolean",
		},
		{
			field: "onCancel",
			description: "What to do when the user clicks the 'X' button",
			type: "Function",
		},
		{
			field: "staticBackdrop",
			description:
				"If true, the modal can only be closed by clicking on one of the buttons",
			type: "boolean",
		},
		{
			field: "children",
			description: "Body content of the modal",
			type: "React.ReactNode",
		},
	];

	const example = (
		<>
			<Button onClick={() => setOpen(!open)}>Try me</Button>
			<Modal
				isOpen={open}
				onCancel={() => setOpen(false)}
				staticBackdrop={backdrop}
			>
				<div className="space-y-4">
					<header>
						<ModalTitle>Sign up for our newsletter</ModalTitle>
						<ModalDescription>
							You will get a 10% coupon on sign up.
						</ModalDescription>
					</header>
					<main className="space-y-2 text-sm">
						<label htmlFor="email">Enter your email</label>
						<Input id="email" placeholder="Email" type="email" />
					</main>
					<footer className="flex space-x-4 justify-end">
						<Button onClick={() => setOpen(false)}>Close</Button>
						<Button type="primary" onClick={() => setOpen(false)}>
							Confirm
						</Button>
					</footer>
				</div>
			</Modal>
		</>
	);
	return (
		<div className="space-y-4">
			<h1 className="header">Modal</h1>
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
						<p className="mb-2">Static backdrop</p>
						<Switch
							checked={backdrop}
							onChange={() => setBackdrop(!backdrop)}
						/>
					</div>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Modal</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>
			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
		</div>
	);
}
