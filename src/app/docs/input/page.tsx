"use client";

import { Button } from "@/components/Button";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Input } from "@/components/Input";
import Link from "next/link";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
	const example = (
		<>
			<Input placeholder="Text here" />
		</>
	);
	return (
		<div className="space-y-4">
			<h1 className="header">Input</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example} />
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Input</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>
			<div className="sub-heading">API</div>
			<p>Uses the same API as a regular HTML input</p>

			<div className="flex justify-between">
				<Link href="/docs/drawer">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
				<Link href="/docs/modal">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
