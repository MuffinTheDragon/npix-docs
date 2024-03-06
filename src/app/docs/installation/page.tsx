"use client";

import { Button } from "@/components/Button";
import { CodeBlock } from "@/components/CodeBlock";
import Link from "next/link";

export default function Installation() {
	return (
		<div className="space-y-6">
			<h1 className="header">Installation</h1>
			<div className="sub-heading">1. Create project</div>
			<p> To get started, create a new project using Next.js</p>
			<CodeBlock>
				npx create-next-app@latest my-app --typescript --tailwind
				--eslint
			</CodeBlock>

			<div className="sub-heading">
				2. Initialize your project with npix
			</div>
			<CodeBlock>npx npix@latest init</CodeBlock>
			<p className="font-bold">
				Note: Run this from the root of your project. This will
				overwrite your <code>global.css</code> and{" "}
				<code>tailwind.config.ts</code>
			</p>

			<div className="sub-heading">
				3. Install the components you want
			</div>
			<CodeBlock>npx npix@latest add Drawer Modal Toast ...</CodeBlock>
			<div>
				<div className="border-l border-border h-8 ms-4"></div>
				<div className="font-medium text-gray-500 text-2xl my-2">
					OR
				</div>
				<div className="border-l border-border h-8 ms-4"></div>
			</div>
			<p>You can install all the components at once</p>
			<CodeBlock>npx npix@latest add --all</CodeBlock>
			<p>
				For more info on how to install, check out the{" "}
				<a className="underline text-indigo-400" href="/docs/cli">
					CLI
				</a>{" "}
				page
			</p>
		</div>
	);
}
