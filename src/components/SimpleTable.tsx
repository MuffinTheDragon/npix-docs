type Props = {
	data: { field: string; description: string; type: string }[];
};

export const SimpleTable = (props: Props) => {
	const cols = ["Field", "Description", "Type"];
	const { data } = props;
	return (
		<div>
			<div className="md:hidden">
				{data.map((row, rowIndex) => (
					<div key={rowIndex}>
						<p className="bg-secondary/40 rounded-md p-2 w-fit">
							{row.field}
						</p>
						<div>
							<pre className="text-gray-400">{row.type}</pre>
							<p>{row.description}</p>
						</div>
						<hr className="border-border my-4" />
					</div>
				))}
			</div>
			<div className="max-md:hidden border border-border rounded-md overflow-auto">
				<table className="min-w-full divide-y divide-border">
					<thead>
						<tr>
							{cols.map((i) => (
								<th
									key={i}
									className="px-6 py-3 text-sm text-start"
								>
									{i}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="divide-y divide-border">
						{data.map((row, rowIndex) => (
							<tr key={rowIndex}>
								<td className="px-6 py-4 text-sm">
									{row.field}
								</td>
								<td className="px-6 py-4 text-sm">
									{row.description}
								</td>
								<td className="px-6 py-4 text-sm">
									{row.type}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
