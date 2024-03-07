import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-6 md:max-w-[1400px] m-auto my-4">
			<Sidebar />
			<div className="col-span-5 md:border-s border-border px-4 md:px-8">
				{children}
			</div>
		</div>
	);
}
