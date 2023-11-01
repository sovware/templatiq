import { registerModule, applyFilter } from '@modules/helpers';
import { lazy } from '@wordpress/element';
const FormTableModule = lazy( () => import( './FormTable' ) );
const ResponseModule = lazy( () => import( './Response' ) );
const TagModule = lazy( () => import( './Tag' ) );
const SettingsModule = lazy( () => import( './Settings' ) );
const ChatBubbleModule = lazy( () => import( './ChatBubble' ) );
const ChatShortCodeModule = lazy( () => import( './ChatShortCode' ) );
import { updateGlobalState } from '@helper/utils.js';

registerModule( 'modules', {
	FormTableModule,
	SingleFormModule,
	ResponseModule,
	SummaryModule,
	TagModule,
	SettingsModule,
	ChatBubbleModule,
	ChatShortCodeModule,
	updateGlobalState
} );
