import { STEPS } from '../steps/util';
import { getURLParmsValue } from '../utils/url-params';

let currentIndexKey = 0;
let builderKey = 'gutenberg';

if ( templatiqSitesVars.default_page_builder ) {
	currentIndexKey = 1;
	builderKey =
		templatiqSitesVars.default_page_builder === 'brizy'
			? 'gutenberg'
			: templatiqSitesVars.default_page_builder;
}

export const initialState = {
	currentIndex: currentIndexKey,
	currentCustomizeIndex: 0,
	siteLogo: {
		id: '',
		thumbnail: '',
		url: '',
		width: 120,
	},
	activePaletteSlug: 'default',
	activePalette: {},
	typography: {},
	typographyIndex: 0,
	stepsLength: Object.keys( STEPS ).length,

	// builder: builderKey,
	siteType: '',
	siteOrder: 'popular',
	siteBusinessType: '',
	selectedMegaMenu: '',
	siteSearchTerm: getURLParmsValue( window.location.search, 's' ) || '',
	showSidebar: true,
	tryAgainCount: 0,
	pluginInstallationAttempts: 0,
	confettiDone: false,

	// Template Information.
	templateId: 0,
	templateResponse: null,
	requiredPlugins: null,
	fileSystemPermissions: null,
	selectedTemplateID: '',
	selectedTemplateName: '',
	selectedTemplateType: '',

	// Import Persona Data
	importPersonaData: {},
	importPersonaDataDone: false,

	currentActivatingPluginSlug: '',

	// Import statuses.
	reset: 'yes' === starterTemplates.firstImportStatus ? true : false,
	themeStatus: false,
	importStatusLog: '',
	importStatus: '',
	xmlImportDone: false,
	requiredPluginsDone: false,
	notInstalledList: [],
	notActivatedList: [],
	resetData: [],
	importStart: false,
	importEnd: false,
	importPercent: 0,
	importError: false,
	importErrorMessages: {
		primaryText: '',
		secondaryText: '',
		errorCode: '',
		errorText: '',
		solutionText: '',
		tryAgain: false,
	},
	importErrorResponse: [],

	customizerImportFlag:
		templatiqSitesVars.default_page_builder === 'fse' ? false : true,
	themeActivateFlag:
		templatiqSitesVars.default_page_builder === 'fse' ? false : true,
	contentImportFlag: true,
	analyticsFlag: starterTemplates.analytics !== 'yes' ? true : false,
	shownRequirementOnce: false,

	// Staging connected.
	stagingConnected:
		templatiqSitesVars.staging_connected !== 'yes'
			? ''
			: '&draft=' + templatiqSitesVars.staging_connected,

};

const reducer = ( state = initialState, { type, ...rest } ) => {
	switch ( type ) {
		case 'set':
			return { ...state, ...rest };
		default:
			return state;
	}
};

export default reducer;
