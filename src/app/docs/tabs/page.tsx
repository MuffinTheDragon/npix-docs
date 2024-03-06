"use client";
import { Button } from "@/components/Button";
import { Card, CardDescription, CardTitle } from "@/components/Card";
import { Checkbox } from "@/components/Checkbox";
import { CodeBlock } from "@/components/CodeBlock";
import { Example } from "@/components/Example";
import { Input } from "@/components/Input";
import { Tabs } from "@/components/Tabs";
import reactElementToJSXString from "react-element-to-jsx-string";

const example = (
	<Tabs className="w-[400px]">
		<div data-label="Sign in">
			<Card className="space-y-4 p-6">
				<CardTitle>Sign in</CardTitle>
				<CardDescription>Use your account</CardDescription>
				<div className="space-y-2">
					<label htmlFor="email">Email</label>
					<Input id="email" type="email" placeholder="Email" />
					<a href="#" className="text-sm text-indigo-400">
						Forgot email?
					</a>
				</div>
				<div className="space-y-2">
					<label htmlFor="password">Password</label>
					<Input
						id="password"
						type="password"
						placeholder="Password"
					/>
					<a href="#" className="text-sm text-indigo-400">
						Forgot password?
					</a>
				</div>
				<div>
					<Button>Sign in</Button>
				</div>
			</Card>
		</div>
		<div data-label="Register">
			<Card className="space-y-4 p-6">
				<CardTitle>Register</CardTitle>
				<CardDescription>
					Fill in the form below to create your account.
				</CardDescription>
				<div className="space-y-2">
					<label htmlFor="email">Email</label>
					<Input id="email" type="email" placeholder="Email" />
				</div>
				<div className="space-y-2">
					<label htmlFor="password">Password</label>
					<Input
						id="password"
						type="password"
						placeholder="Password"
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="cpassword">Confirm password</label>
					<Input
						id="cpassword"
						type="password"
						placeholder="Confirm password"
					/>
				</div>
				<div className="space-y-2 text-sm">
					<span className="flex items-center">
						<Checkbox id="terms" />
						<label htmlFor="terms">
							I agree to the Terms and Conditions
						</label>
					</span>
				</div>
				<div>
					<Button>Sign in</Button>
				</div>
			</Card>
		</div>
	</Tabs>
);

export default function Home() {
	return (
		<div className="space-y-4">
			<h1 className="header">Tabs</h1>
			<div className="sub-heading">Example</div>
			<div className="pt-2">
				<Example demo={example} />
			</div>
			<div className="sub-heading">Installation</div>
			<CodeBlock>npx npix@latest add Tabs</CodeBlock>
			<div className="sub-heading">Usage</div>
			<CodeBlock>{`${reactElementToJSXString(example)}`}</CodeBlock>
		</div>
	);
}
