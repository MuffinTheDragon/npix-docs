"use client";

import { ButtonProps, ButtonType, ButtonSize } from "@/components/Button";
import { ButtonGroup, ButtonGroupButton } from "@/components/ButtonGroup";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Select } from "@/components/Select";
import { Switch } from "@/components/Switch";
import { useEffect, useRef, useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

export default function Home() {
	const [props, setProps] = useState<ButtonProps>();

	const example = (
		<ButtonGroup>
			<ButtonGroupButton {...props}>One</ButtonGroupButton>
			<ButtonGroupButton {...props}>Two</ButtonGroupButton>
			<ButtonGroupButton {...props}>Three</ButtonGroupButton>
		</ButtonGroup>
	);
	return (
		<div className="space-y-4">
			<h1 className="header">Button Group</h1>
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
			<CodeBlock>npx npix@latest add ButtonGroup</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>{reactElementToJSXString(example)}</CodeBlock>
			<div className="sub-heading">API</div>
			<p>
				Each <code>ButtonGroupButton</code> is the regular{" "}
				<a href="/button" className="text-indigo-500 underline">
					Button
				</a>{" "}
				component and uses the same API
			</p>
		</div>
	);
}
