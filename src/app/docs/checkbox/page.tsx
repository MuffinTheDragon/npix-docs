"use client";

import { Checkbox } from "@/components/Checkbox";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { SimpleTable } from "@/components/SimpleTable";
import { Switch } from "@/components/Switch";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Home() {
	const [checked, setChecked] = useState(false);

	const data = [
		{
			field: "checked",
			description: "Whether the checkbox is checked",
			type: "boolean",
		},
	];

	const example = (
		<>
			<Checkbox
				id="checkbox"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<label htmlFor="checkbox">
				I agree to the terms and conditions
			</label>
		</>
	);
	return (
		<div className="space-y-4">
			<h1 className="header">Checkbox</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example}>
					<div>
						<p className="mb-2">Checked</p>
						<Switch
							checked={checked}
							onChange={() => setChecked(!checked)}
						/>
					</div>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Checkbox</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>{reactElementToJSXString(example)}</CodeBlock>
			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
		</div>
	);
}
