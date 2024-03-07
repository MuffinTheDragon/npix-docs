"use client";

import { Button } from "@/components/Button";
import { CodeBlock } from "@/components/CodeBlock";
import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
	return (
		<div className="space-y-4">
			<h1 className="header">CLI</h1>
			<div className="sub-heading">Initialize your project with npix</div>
			<CodeBlock>npx npix@latest init</CodeBlock>
			<p className="font-bold">
				Note: Run this from the root of your project. This will
				overwrite your <code>global.css</code> and{" "}
				<code>tailwind.config.ts</code>
			</p>

			<div className="sub-heading">Adding components</div>
			<p>
				Use the <code>add</code> command to install components
			</p>
			<p>You can pass in the following parameters:</p>
			<p>
				<code className="flex p-6 w-fit bg-[#1d2127] text-white">
					[components]: Space separated list of components to add
					<br />
					-a OR --all: Add all components <br />
					-o OR --overwrite: Overwrite existing files <br />
					-p OR --path: Path of where to install components
				</code>
			</p>

			<p>
				For example, the following will install the Button and Toast
				components under the ui folder from the current working
				directory:
			</p>
			<CodeBlock>npx npix@latest add -p ./ui Button Toast</CodeBlock>

			<div className="flex justify-between">
				<Link href="/docs/installation">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
				<Link href="/docs/theming">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
