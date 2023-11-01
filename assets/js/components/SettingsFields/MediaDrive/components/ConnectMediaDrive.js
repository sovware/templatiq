import ConnectMediaDriveStyle from './styles/ConnectMediaDriveStyle';

export default function ConnectMediaDrive( props ) {
	const { label, icon, iconClass, description, isConnecting, onConnect } =
		props;

	function handleConnect() {
		if ( isConnecting ) {
			return;
		}

		if ( typeof onConnect === 'function' ) {
			onConnect();
		}
	}

	return (
		<ConnectMediaDriveStyle className="helpgent-media-driver-connect">
			<div className="helpgent-media-driver-connect-meta">
				{ icon && (
					<div
						className={ `helpgent-media-driver-connect-meta-icon helpgent-icon ${
							iconClass ? iconClass : ''
						}` }
					>
						{ icon }
					</div>
				) }

				{ ( label || description ) && (
					<div className="helpgent-media-driver-connect-meta-info">
						{ label && (
							<h3 className="helpgent-media-driver-connect-meta-title">
								{ label }
							</h3>
						) }
						{ description && (
							<p className="helpgent-media-driver-connect-meta-description">
								{ description }
							</p>
						) }
					</div>
				) }
			</div>

			<div className="helpgent-media-driver-connect-action">
				<button
					type="button"
					className="helpgent-btn helpgent-btn-dark"
					onClick={ handleConnect }
				>
					{ isConnecting ? 'Connecting' : 'Connect' }
				</button>
			</div>
		</ConnectMediaDriveStyle>
	);
}
