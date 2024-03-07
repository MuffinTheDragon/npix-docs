import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
	return (
		<div className="space-y-4">
			<h1 className="header">Credits</h1>
			<p>
				Inspiration and credits for this project go to the following
				amazing projects:
			</p>
			<ul className="list-disc ms-12">
				<li>
					<a
						href="https://ui.shadcn.com/"
						target="_blank"
						className="underline text-indigo-400"
					>
						shadcn/ui
					</a>
				</li>
				<li>
					<a
						href="https://formation.fyi/"
						target="_blank"
						className="underline text-indigo-400"
					>
						Formation UI
					</a>
				</li>
				<li>
					<a
						href="https://ant.design/"
						target="_blank"
						className="underline text-indigo-400"
					>
						Ant Design
					</a>
				</li>
			</ul>
			<div className="flex justify-between">
				<Link href="/docs/theming">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
				<Link href="/docs/alert">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
