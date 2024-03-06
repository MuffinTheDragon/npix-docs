"use client";

import { Button as ButtonComponent } from "@/components/Button";
import { CodeBlock } from "@/components/CodeBlock";
import { Select } from "@/components/Select";
import { SimpleTable } from "@/components/SimpleTable";
import { Switch } from "@/components/Switch";
import { ButtonProps, ButtonSize, ButtonType } from "@/components/Button";
import { useState } from "react";
import { Example } from "@/components/Example";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Home() {
	const [props, setProps] = useState<ButtonProps>();

	const data = [
		{
			field: "type",
			description: "Type of button",
			type: '"primary" | "default" | "danger" | "link" | "ghost"',
		},
		{
			field: "size",
			description: "Size of button",
			type: ' "small" | "medium" | "large"',
		},
		{
			field: "disabled",
			description: "Whether button is disabled",
			type: "boolean",
		},
		{
			field: "isLoading",
			description: "Whether to show button as loading",
			type: "boolean",
		},
		{
			field: "children",
			description: "Content of the button",
			type: "React.ReactNode",
		},
	];

	const example = <ButtonComponent {...props}>Save</ButtonComponent>;

	return (
		<div className="space-y-4">
			<h1 className="header">Button</h1>

			<div className="sub-heading">Example</div>

			<div className="pt-2">
				<Example demo={example}>
					<div>
						<p>Type</p>
						<Select
							className="mt-2 w-full"
							onChange={(v) =>
								setProps({
									...props,
									type: v.target.value as ButtonType,
								})
							}
							options={[
								{ value: "default", label: "Default" },
								{ value: "primary", label: "Primary" },
								{ value: "danger", label: "Danger" },
								{ value: "link", label: "Link" },
								{ value: "ghost", label: "Ghost" },
							]}
						/>
					</div>
					<div>
						<p>Size</p>
						<Select
							className="mt-2 w-full"
							onChange={(v) =>
								setProps({
									...props,
									size: v.target.value as ButtonSize,
								})
							}
							options={[
								{ value: "medium", label: "Medium" },
								{ value: "small", label: "Small" },
								{ value: "large", label: "Large" },
							]}
						/>
					</div>
					<div>
						<p className="mb-2">Disabled</p>
						<Switch
							checked={props?.disabled ?? false}
							onChange={(v) =>
								setProps({
									...props,
									disabled: !props?.disabled,
								})
							}
						/>
					</div>
					<div>
						<p className="mb-2">Loading</p>
						<Switch
							checked={props?.isLoading ?? false}
							onChange={(v) =>
								setProps({
									...props,
									isLoading: !props?.isLoading,
								})
							}
						/>
					</div>
				</Example>
			</div>

			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Button</CodeBlock>

			<div className="sub-heading">Usage</div>
			<CodeBlock>{reactElementToJSXString(example)}</CodeBlock>

			<div className="sub-heading">API</div>
			<SimpleTable data={data} />
		</div>
	);
}
