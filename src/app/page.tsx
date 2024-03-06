import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex p-24 md:p-36 lg:p-96 flex-col text-center border-b border-border justify-center items-center">
			<div className="m-auto">
				<h1 className="header text-2xl md:text-4xl lg:text-6xl">
					Fully customizable React UI Components
				</h1>
				<p className="mb-8">
					15+ Clean and minimal components you can use for your apps.
					Install the ones you need, make whatever changes you want.
				</p>
				<div className="mb-8">
					<Link href="/docs/introduction">
						<Button type="primary">Read docs</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
