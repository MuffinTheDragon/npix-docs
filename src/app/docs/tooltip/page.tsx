"use client";

import { Tooltip } from "@/components/Tooltip";
import { CodeBlock } from "@/components/CodeBlock";
import { SimpleTable } from "@/components/SimpleTable";
import { Select } from "@/components/Select";
import { useState } from "react";
import { Example } from "@/components/Example";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
	const [placement, setPlacement] = useState<
		"left" | "top" | "right" | "bottom"
	>("top");

	const data = [
		{
			field: "placement",
			description: "Placement of tooltip. Default is top",
			type: '"left" | "top" | "right" | "bottom"',
		},
		{
			field: "title",
			description: "Title of tooltip",
			type: "React.ReactNode",
		},
		{
			field: "className",
			description: "className styles to apply on tooltip",
			type: "string",
		},
		{
			field: "children",
			description:
				"Tooltip is displayed when the child content is hovered. Could be an icon, text, etc.",
			type: "React.ReactNode",
		},
	];

	const example = (
		<>
			<Tooltip title="Tooltip content" placement={placement}>
				Hover here
			</Tooltip>
		</>
	);

	return (
		<div className="space-y-4">
			<h1 className="header">Tooltip</h1>
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
								{
									value: "top",
									label: "Top",
								},
								{
									value: "left",
									label: "Left",
								},
								{
									value: "right",
									label: "Right",
								},
								{
									value: "bottom",
									label: "Bottom",
								},
							]}
						/>
					</div>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Tooltip</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>
			<div className="sub-heading">API</div>
			<SimpleTable data={data} />

			<div className="flex justify-between">
				<Link href="/docs/toast">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
			</div>
		</div>
	);
}
