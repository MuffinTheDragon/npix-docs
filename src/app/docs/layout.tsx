import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Topbar } from "@/components/Topbar";
import { Sidebar } from "@/components/Sidebar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-6 gap-4 my-4 md:px-8">
			<div>
				<Sidebar />
			</div>
			<div className="col-span-5 md:border-s border-border/40 px-4 md:px-8">
				{children}
			</div>
		</div>
	);
}
