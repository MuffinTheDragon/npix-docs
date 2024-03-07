import Image from "next/image";
import logo from "@/app/icon.png";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
	return (
		<div className="space-y-4">
			<h1 className="header">Introduction</h1>

			<Image src={logo} alt="logo" />
			<p>
				<code>npix</code> is a simple to use, fully customizable
				collection of 15+ React UI components.
			</p>
			<p>
				Install only the components you need and make whatever changes
				you want.
			</p>
			<p>This is just a side project I worked on for a couple reasons:</p>
			<ol className="list-decimal ms-8">
				<li>
					I wanted to have a convenient way to re-use components I
					have made in the past on future projects
				</li>
				<li>Get some exposure to CLI scripting</li>
				<li>Do some UI testing</li>
			</ol>

			<div className="float-right">
				<Link href="/docs/installation">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
