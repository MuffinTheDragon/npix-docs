"use client";
import { Button } from "@/components/Button";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Select } from "@/components/Select";
import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Home() {
	const example = (
		<>
			<Select
				options={[
					{ label: "Choose an option", value: undefined },
					{ label: "Label 1", value: "1" },
					{ label: "Label 2", value: "2" },
				]}
			/>
		</>
	);
	return (
		<div className="space-y-4">
			<h1 className="header">Select</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example} />
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Select</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>
			<div className="sub-heading">API</div>
			<p>Uses the HTML select props.</p>

			<div className="flex justify-between">
				<Link href="/docs/radio">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
				<Link href="/docs/spinner">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
