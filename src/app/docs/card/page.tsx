"use client";

import { Button } from "@/components/Button";
import { Card, CardDescription, CardTitle } from "@/components/Card";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Input } from "@/components/Input";
import { SimpleTable } from "@/components/SimpleTable";
import { Switch } from "@/components/Switch";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Home() {
	const [interactive, setInteractive] = useState(false);

	const data = [
		{
			field: "interactive",
			description:
				"Whether the card is interactive (i.e. show shadow and pointer cursor on hover) or not",
			type: "boolean",
		},
		{
			field: "children",
			description: "Card content",
			type: "React.ReactNode",
		},
	];

	const example = (
		<Card className="space-y-4 w-[400px]" interactive={interactive}>
			<div>
				<CardTitle>Sign in</CardTitle>
				<CardDescription>Use your account</CardDescription>
			</div>
			<div className="space-y-2">
				<label htmlFor="email">Email</label>
				<Input id="email" type="email" placeholder="Email" />
				<a href="#" className="text-sm text-indigo-400">
					Forgot email?
				</a>
			</div>
			<div className="space-y-2">
				<label htmlFor="password">Password</label>
				<Input id="password" type="password" placeholder="Password" />
				<a href="#" className="text-sm text-indigo-400">
					Forgot password?
				</a>
			</div>
			<div>
				<Button>Sign in</Button>
			</div>
		</Card>
	);

	return (
		<div className="space-y-4">
			<h1 className="header">Card</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example}>
					<div>
						<p className="mb-2">Interactive</p>
						<Switch
							checked={interactive}
							onChange={() => setInteractive(!interactive)}
						/>
					</div>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Card</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>{reactElementToJSXString(example)}</CodeBlock>
			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
		</div>
	);
}
