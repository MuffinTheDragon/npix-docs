"use client";

import { CodeBlock } from "@/components/CodeBlock";
import { SimpleTable } from "@/components/SimpleTable";
import { Spinner } from "@/components/Spinner";
import { Select } from "@/components/Select";
import { useState } from "react";
import { Example } from "@/components/Example";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
	const [size, setSize] = useState<"default" | "large">("default");

	const data = [
		{
			field: "size",
			description: "Size of spinner",
			type: "'default' | 'large'",
		},
	];

	const example = (
		<>
			<Spinner size={size} />
		</>
	);
	return (
		<div className="space-y-4">
			<h1 className="header">Spinner</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example}>
					<div>
						<p>Size</p>
						<Select
							className="mt-2 w-full"
							// @ts-ignore
							onChange={(v) => setSize(v.target.value)}
							options={[
								{ value: "default", label: "Default" },
								{ value: "large", label: "Large" },
							]}
						/>
					</div>
				</Example>
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Spinner</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>
				{reactElementToJSXString(example, { showFunctions: true })}
			</CodeBlock>
			<div className="sub-heading">API</div>
			<SimpleTable data={data} />

			<div className="flex justify-between">
				<Link href="/docs/select">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
				<Link href="/docs/switch">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
