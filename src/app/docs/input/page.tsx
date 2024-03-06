"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Input } from "@/components/Input";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Home() {
	const example = <Input placeholder="Text here" />;
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
			<CodeBlock>{reactElementToJSXString(example)}</CodeBlock>
			<div className="sub-heading">API</div>
			<p>Uses the same API as a regular HTML input</p>
		</div>
	);
}
