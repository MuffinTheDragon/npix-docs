import { Button } from "@/components/Button";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Theming() {
	return (
		<div className="space-y-4">
			<h1 className="header">Theming</h1>
			<p>
				You can add theming to your project using the same steps as
				outlined in the{" "}
				<a
					href="https://ui.shadcn.com/docs/dark-mode/next"
					target="_blank"
					className="underline text-blue-500"
				>
					shadcn/ui
				</a>{" "}
				docs
			</p>
			<div className="flex justify-between">
				<Link href="/docs/cli">
					<Button className="flex space-x-2">
						<ArrowLeftIcon className="w-5 h-5" />
						<p>Previous</p>
					</Button>
				</Link>
				<Link href="/docs/credits">
					<Button className="flex space-x-2">
						<p>Next</p>
						<ArrowRightIcon className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
