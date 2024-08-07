import AuthLayout from '@layout/AuthLayout';
import SignInContent from '@modules/SignIn/SignInContent'; // Fix import statement

export default function SignInModule() {
	return (
		<AuthLayout>
			<div className="templatiq__content templatiq__content--auth">
				<SignInContent />
			</div>
		</AuthLayout>
	);
}
