import { lazy } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

const TextField = lazy( () => import( './../components/TextField' ) );
import AttachmentAutoRemove from './../components/AttachmentAutoRemove';
import EmailThrottle from './../components/EmailThrottle';
import WPPageSelectField from './../components/WPPageSelectField';

const fieldComponents = applyFilters( 'helpgent-settings-field-components', {
	text: TextField,
	'wp-page-select': WPPageSelectField,
	'attachment-auto-remove': AttachmentAutoRemove,
	'email-throttle': EmailThrottle,
} );

export default fieldComponents;
