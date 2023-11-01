import { applyFilters } from '@wordpress/hooks';
import ReactSVG from 'react-inlinesvg';
import serverSolid from '@icon/server-solid.svg';

const defaultMedeaDriverOptions = {
	defaultDriveKey: 'local',
	activeDriverFieldKey: 'active_media_driver',
	apiRoutes: {
		storageStatusRoute: 'helpgent/attachment/storage-summary',
		startMigrationRoute:
			'helpgent/attachment-transfer-queues/start-migration',
		retryMigrationRoute:
			'helpgent/attachment-transfer-queues/retry-migration',
		resetMigrationRoute:
			'helpgent/attachment-transfer-queues/reset-migration',
		stopMigrationRoute:
			'helpgent/attachment-transfer-queues/stop-migration',
		migratioStatusRoute:
			'helpgent/attachment-transfer-queues/migration-status',
	},
};

const fields = applyFilters( 'helpgent-settings-panel-fields', {
	defaultMedeaDriverOptions,
	user_dashboard_page: {
		type: 'wp-page-select',
		label: 'User Dashboard Page',
		value: '',
		rules: { require: true },
	},
	attachment_auto_remove: {
		type: 'attachment-auto-remove',
		childFields: {
			removeAfterDays: {
				label: 'Attachment remove after days',
				key: 'attachment_remove_after_days',
				default: 30,
			},
		},
		label: 'Attachment Auto Remove',
		value: true,
	},
	allowed_email: {
		type: 'email-throttle',
		label: 'Max Allowed Email',
		api: {
			getTotalSentEmail: 'helpgent/admin/email-throttle',
			resetThrottle: 'helpgent/admin/email-throttle/reset',
		},
		value: 1000,
	},
	active_media_driver: {
		type: 'select',
		label: 'Select Active Media Driver',
		value: 'local',
		options: [
			{ label: 'Local Drive', value: 'local' },
			{ label: 'Google Drive', value: 'google_drive' },
			{ label: 'Bunny Drive', value: 'bunny_drive' },
		],
	},
	local: {
		type: 'local-drive',
		group: 'media-drive',
		label: 'Server',
		iconClass: 'icon-primary',
		icon: <ReactSVG src={ serverSolid } />,
		value: '',
		...defaultMedeaDriverOptions,
	},
} );

export default fields;
