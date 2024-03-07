"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
	gradientDark,
	githubGist,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useTheme } from "next-themes";

export const CodeBlock = ({ children }: { children: string }) => {
	const [copied, setCopy] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleCopy = async () => {
		setCopy(!copied);
		await navigator.clipboard.writeText(children?.toString() ?? "");
	};
	return (
		<div className="relative w-full rounded-md bg-[#1d2127] p-1 md:p-2 inline-flex justify-between items-start max-h-[400px] overflow-auto">
			<SyntaxHighlighter
				language="javascript"
				style={gradientDark}
				customStyle={{ background: "none" }}
			>
				{children}
			</SyntaxHighlighter>
			<Button
				type="ghost"
				size="small"
				onClick={handleCopy}
				className="focus:ring-0 hover:bg-gray-700 mt-2	"
			>
				<div className="w-4 h-4 text-white">
					{copied ? <CheckIcon /> : <DocumentDuplicateIcon />}
				</div>
			</Button>
		</div>
	);
};
