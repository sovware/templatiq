import {
	lazy,
	Suspense,
	Fragment,
	useEffect,
	useState,
} from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import queryStore from '../../queryStore';
import useFetchData from '@hooks/useFetchData.js';
import CreatePopup from '@components/Form/CreatePopup';
import ContentLoading from '@components/ContentLoading';
import { FormTableStateProvider } from './context/FormTableStateContext';
import { useFormTableState } from './context/FormTableStateContext';
import Header from './components/Header';

const Table = lazy( () => import( './components/Table' ) );

const FormTable = ( props ) => {
	const { baseApiRoute } = props;
	const perPage = 10;
	const { formTableState, setFormTableState } = useFormTableState();
	const { currentPage } = formTableState;
	const fetchParams = {
		per_page: perPage,
		page: currentPage,
	};
	const {
		data: formData,
		isError: isFetchError,
		errorMessage: formErrorMessage,
	} = useFetchData(
		[ `helpgent-form-${ currentPage }` ],
		addQueryArgs( baseApiRoute, fetchParams )
	);

	const handlePageClick = ( event ) => {
		setFormTableState( {
			...formTableState,
			currentPage: event.selected + 1,
		} );
	};

	return (
		<div className="helpgent-page-inner">
			{ formData && (
				<Fragment>
					<Header forms={ formData.forms } />
					<Suspense fallback={ <ContentLoading /> }>
						<Table
							forms={ formData.forms }
							total={ formData.total }
							isFetchError={ isFetchError }
							formErrorMessage={ formErrorMessage }
							baseApiRoute={ baseApiRoute }
							perPage={ perPage }
							handlePageClick={ handlePageClick }
						/>
					</Suspense>

					<CreatePopup
						moduleState={ formTableState }
						setModuleState={ setFormTableState }
					/>
				</Fragment>
			) }
		</div>
	);
};

export default function FormTableModule( props ) {
	const [ dir, setDir ] = useState( 'ltr' );

	const theme = {
		direction: dir,
	};

	useEffect( () => {
		if ( document.documentElement.getAttribute( 'dir' ) === 'rtl' ) {
			setDir( 'rtl' );
		} else {
			setDir( 'ltr' );
		}
	}, [] );
	return (
		<QueryClientProvider client={ queryStore }>
			<FormTableStateProvider>
				<ThemeProvider theme={ theme }>
					<FormTable { ...props } />
				</ThemeProvider>
			</FormTableStateProvider>
		</QueryClientProvider>
	);
}
