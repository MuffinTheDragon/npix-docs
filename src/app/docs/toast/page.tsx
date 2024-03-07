"use client";

import { Button } from "@/components/Button";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Select } from "@/components/Select";
import { SimpleTable } from "@/components/SimpleTable";
import { toast } from "@/components/Toast";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Home() {
	const [placement, setPlacement] = useState<
		"top-left" | "top-right" | "bottom-left" | "bottom-right"
	>("top-right");

	const data = [
		{
			field: "title",
			description: "Title",
			type: "React.ReactNode",
		},
		{
			field: "icon",
			description: "Icon to show next to title",
			type: "React.ReactNode",
		},
		{
			field: "placement",
			description: "Placement of toast. By default is top-right",
			type: '"top-left" | "top-right" | "bottom-left" | "bottom-right"',
		},
		{
			field: "children",
			description: "Body content for the toast",
			type: "React.ReactNode",
		},
	];

	const example = (
		<>
			<Button
				onClick={() =>
					toast({
						title: "Form submitted!",
						placement,
						icon: (
							<CheckCircleIcon
								fill="#76c12b"
								className="w-6 h-6"
							/>
						),
					})
				}
			>
				Try me
			</Button>
		</>
	);

	return (
		<div className="space-y-4">
			<h1 className="header">Toast</h1>
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
									value: "top-right",
									label: "Top right",
								},
								{
									value: "top-left",
									label: "Top left",
								},
								{
									value: "bottom-left",
									label: "Bottom left",
								},
								{
									value: "bottom-right",
									label: "Bottom right",
								},
							]}
						/>
					</div>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Toast</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>{`<>
	<Button
		onClick={() =>
			toast({
				title: "Form submitted!",
				placement,
				icon: <CheckCircleIcon fill="#76c12b" className="w-6 h-6" />,
			})
		}
	>
		Try me
	</Button>
</>`}</CodeBlock>
			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
		</div>
	);
}
