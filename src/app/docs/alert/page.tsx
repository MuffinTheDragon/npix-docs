"use client";

import { Alert as AlertComponent, AlertType } from "@/components/Alert";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { SimpleTable } from "@/components/SimpleTable";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Alert() {
	const [type, setType] = useState<AlertType>("success");
	const [title, setTitle] = useState("Success!");

	const data = [
		{ field: "title", description: "Title of the alert", type: "string" },
		{
			field: "type",
			description: "Type of the alert",
			type: "'success' | 'warning' | 'info' | 'danger",
		},
		{
			field: "children",
			description: "Alert body",
			type: "React.ReactNode",
		},
	];

	const example = (
		<div className="w-full">
			<AlertComponent title={title} type={type}>
				Payment successful.
			</AlertComponent>
		</div>
	);

	return (
		<div className="space-y-4">
			<h1 className="header">Alert</h1>

			<div className="sub-heading">Example</div>

			<div className="pt-2">
				<Example demo={example}>
					<div>
						<p>Type</p>
						<Select
							className="mt-2 w-full"
							onChange={(v) =>
								setType(v.target.value as AlertType)
							}
							options={[
								{
									value: "success",
									label: "Success",
								},
								{
									value: "warning",
									label: "Warning",
								},
								{ value: "info", label: "Info" },
								{
									value: "danger",
									label: "Danger",
								},
							]}
						/>
					</div>
					<div>
						<p>Title</p>
						<Input
							className="mt-2 w-full"
							value={title}
							onChange={(v) => setTitle(v.target.value)}
						/>
					</div>
				</Example>
			</div>

			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Alert</CodeBlock>

			<div className="sub-heading">Usage</div>
			<CodeBlock>{reactElementToJSXString(example)}</CodeBlock>

			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
		</div>
	);
}
