import AuthLayout from "@layout/AuthLayout";

import SignUpContent from "./Signup";

export default function SignUpModule() {
	return (
		<AuthLayout>
			<div className="templatiq__content templatiq__content--auth"> 
				<SignUpContent />
			</div>
		</AuthLayout>
	);
}
