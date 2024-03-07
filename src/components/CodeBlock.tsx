"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
	gradientDark,
	githubGist,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Button } from "./Button";
import { useTheme } from "next-themes";

export const CodeBlock = ({ children }: { children: string }) => {
	const [copied, setCopy] = useState(false);
	const { theme } = useTheme();

	const handleCopy = async () => {
		setCopy(!copied);
		await navigator.clipboard.writeText(children?.toString() ?? "");
	};
	return (
		<div className="relative w-full rounded-md bg-muted p-4 inline-flex justify-between items-start max-h-[400px] overflow-auto">
			<SyntaxHighlighter
				language="javascript"
				style={theme === "light" ? githubGist : gradientDark}
				customStyle={{ background: "none" }}
			>
				{children}
			</SyntaxHighlighter>
			<Button
				type="ghost"
				size="small"
				onClick={handleCopy}
				className="focus:ring-0 hover:bg-gray-600"
			>
				<div className="w-4 h-4 text-foreground">
					{copied ? <CheckIcon /> : <DocumentDuplicateIcon />}
				</div>
			</Button>
		</div>
	);
};
