import MediaDriverCardStyle from './styles/MediaDriverCardStyle';

export default function MediaDriverCard( props ) {
	const {
		children,
		label,
		icon,
		iconClass,
		headerActions,
		isActiveMigration,
	} = props;

	return (
		<MediaDriverCardStyle className="helpgent-media-driver-card">
			<div className="helpgent-media-driver-card-header">
				<div className="helpgent-media-driver-card-header-info">
					{ ( label || icon ) && (
						<div className="helpgent-media-driver-card-header-title">
							{ icon && (
								<div
									className={ `helpgent-icon helpgent-media-driver-icon ${
										iconClass ? iconClass : ''
									}` }
								>
									{ icon }
								</div>
							) }

							{ label && (
								<h3 className="helpgent-title">{ label }</h3>
							) }
						</div>
					) }
				</div>

				{ ! isActiveMigration && headerActions.length && (
					<div className="helpgent-media-driver-card-header-action">
						{ headerActions.map( ( Component, index ) => {
							return (
								<div
									className="helpgent-media-driver-card-header-action-item"
									key={ index }
								>
									<Component data={ props } />
								</div>
							);
						} ) }
					</div>
				) }
			</div>

			{ children && (
				<div className="helpgent-media-driver-card-body">
					{ children }
				</div>
			) }
		</MediaDriverCardStyle>
	);
}
