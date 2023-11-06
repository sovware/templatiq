import { registerModule, applyFilter } from '@modules/helpers';
import { lazy } from '@wordpress/element';
const FormTableModule = lazy( () => import( './FormTable' ) );
const PreMadeTemplateModule = lazy( () => import( './PreMadeTemplate' ) );
const PreMadeTemplatePreviewModule = lazy( () =>
	import( './PreMadeTemplatePreview' )
);
const SingleFormModule = lazy( () => import( './SingleForm' ) );
const ResponseModule = lazy( () => import( './Response' ) );
const TagModule = lazy( () => import( './Tag' ) );
const SummaryModule = lazy( () => import( './Summary' ) );
const SettingsModule = lazy( () => import( './Settings' ) );
const ChatBubbleModule = lazy( () => import( './ChatBubble' ) );
const ChatShortCodeModule = lazy( () => import( './ChatShortCode' ) );
import { updateGlobalState } from '@helper/utils.js';

registerModule( 'modules', {
	FormTableModule,
	PreMadeTemplateModule,
	PreMadeTemplatePreviewModule,
	SingleFormModule,
	ResponseModule,
	SummaryModule,
	TagModule,
	SettingsModule,
	ChatBubbleModule,
	ChatShortCodeModule,
	updateGlobalState
} );
