import AuthLayout from "./AuthLayout";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function AuthModule() {
	return (
		<AuthLayout>
			<div className="templatiq__content templatiq__content--auth"> 
				<SignIn />
				{/* <SignUp /> */}
			</div>
		</AuthLayout>
	);
}
