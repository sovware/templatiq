import { lazy } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

const TextField = lazy( () => import( '../components/fields/TextField' ) );
const BunnyDriveField = lazy( () =>
	import( '../components/fields/BunnyDriveField' )
);
const GoogleDriveField = lazy( () =>
	import( '../components/fields/GoogleDriveField' )
);

const fieldComponents = applyFilters( 'helpgent-settings-field-components', {
	text: TextField,
	bunnyDrive: BunnyDriveField,
	googleDrive: GoogleDriveField,
} );

export default fieldComponents;
