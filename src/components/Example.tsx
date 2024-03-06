import { Card } from "./Card";

type Props = {
	demo: React.ReactNode;
	children?: React.ReactNode;
};

export const Example = (props: Props) => {
	const { demo, children } = props;

	return (
		<Card className="p-0 bg-gradient-to-r from-[#f5f5f5] dark:bg-gradient-to-r dark:from-[#0f1318]">
			<div className="grid grid-cols-1 md:grid-cols-4 p-0">
				<div
					className={`inline-flex items-center justify-center p-4 ${
						children ? "col-span-3" : "col-span-4"
					}`}
				>
					{demo}
				</div>
				{children && (
					<div className="md:border-l border-t md:border-t-0 border-border bg-muted">
						<div className="grid grid-cols-1 space-y-4 p-4">
							<div className="sub-heading">Props</div>
							{children}
						</div>
					</div>
				)}
			</div>
		</Card>
	);
};
