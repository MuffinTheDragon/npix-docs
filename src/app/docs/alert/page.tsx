"use client";

import { Alert as AlertComponent, AlertType } from "@/components/Alert";
import { Button } from "@/components/Button";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { SimpleTable } from "@/components/SimpleTable";
import Link from "next/link";
import { useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

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
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>

			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
			<div className="flex justify-between">
				<Link href="/docs/credits">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
				<Link href="/docs/button">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
