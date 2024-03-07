"use client";
import { Button } from "@/components/Button";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Switch } from "@/components/Switch";
import Link from "next/link";
import { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Home() {
	const [checked, setChecked] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const example = (
		<>
			<Switch
				checked={checked}
				disabled={disabled}
				onChange={() => setChecked(!checked)}
			/>
		</>
	);

	return (
		<div className="space-y-4">
			<h1 className="header">Switch</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example}>
					<p>Checked</p>
					<Switch
						checked={checked}
						onChange={() => setChecked(!checked)}
					/>
					<p>Disabled</p>
					<Switch
						checked={disabled}
						onChange={() => setDisabled(!disabled)}
					/>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Switch</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>
			<div className="sub-heading">API</div>
			<p>Uses the standard HTML input element props.</p>

			<div className="flex justify-between">
				<Link href="/docs/spinner">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
				<Link href="/docs/tabs">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
