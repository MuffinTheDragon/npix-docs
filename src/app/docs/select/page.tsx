"use client";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Select } from "@/components/Select";
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
		</div>
	);
}
