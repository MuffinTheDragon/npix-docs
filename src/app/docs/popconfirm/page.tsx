"use client";

import { Card } from "@/components/Card";
import { CodeBlock } from "@/components/CodeBlock";
import { Popconfirm } from "@/components/Popconfirm";
import { SimpleTable } from "@/components/SimpleTable";
import { Switch } from "@/components/Switch";
import { Button } from "@/components/Button";
import { useState } from "react";
import { Select } from "@/components/Select";
import { Example } from "@/components/Example";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Home() {
	const [placement, setPlacement] = useState<
		"left" | "top" | "right" | "bottom"
	>("top");

	const data = [
		{
			field: "title",
			description: "Title of the popconfirm",
			type: "React.ReactNode",
		},
		{
			field: "content",
			description: "Body content",
			type: "React.ReactNode",
		},
		{
			field: "icon",
			description:
				"Icon to render next to title. Uses exclamation mark icon by default",
			type: "React.ReactNode",
		},
		{
			field: "placement",
			description: "Placement of popconfirm. Top by default",
			type: '"left" | "top" | "right" | "bottom"',
		},
		{
			field: "onOk",
			description: "Action to take when the Confirm button is clicked",
			type: "Function",
		},
		{
			field: "okButtonProps",
			description: "Props for the confirm button",
			type: "Button props",
		},
		{
			field: "onCancel",
			description: "Action to take when the Cancel button is clicked",
			type: "Function",
		},
		{
			field: "cancelButtonProps",
			description: "Props for the Cancel button",
			type: "Button props",
		},
		{
			field: "okText",
			description:
				"Text for the Confirm button. Default value is Confirm",
			type: "string",
		},
		{
			field: "cancelText",
			description: "Text for the Cancel button. Default value is Cancel",
			type: "string",
		},
		{
			field: "className",
			description: "classNames to apply to popconfirm",
			type: "string",
		},
	];

	const example = (
		<Popconfirm
			title="Confirm Delete"
			placement={placement}
			content={"Are you sure you want to delete this?"}
			onOk={() => {}}
			onCancel={() => {}}
		>
			<Button type="danger">Delete</Button>
		</Popconfirm>
	);

	return (
		<div className="space-y-4">
			<h1 className="header">Popconfirm</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example}>
					<div>
						<p>Placement</p>
						<Select
							className="mt-2 w-full"
							onChange={(v) =>
								// @ts-ignore
								setPlacement(v.target.value)
							}
							options={[
								{ value: "top", label: "Top" },
								{ value: "right", label: "Right" },
								{ value: "left", label: "Left" },
								{ value: "bottom", label: "Bottom" },
							]}
						/>
					</div>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Popconfirm</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>
			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
		</div>
	);
}
