import AuthLayout from "@layout/AuthLayout";

import SignUpContent from "./SignUp";

export default function SignUpModule() {
	return (
		<AuthLayout>
			<div className="templatiq__content templatiq__content--auth"> 
				<SignUpContent />
			</div>
		</AuthLayout>
	);
}
