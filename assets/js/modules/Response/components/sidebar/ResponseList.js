import { useEffect } from '@wordpress/element';
import { useInView } from 'react-intersection-observer';
import { ResponseListStyle } from './style';
import helpgent from '@icon/helpgent.svg';

import ResponseItem from './ResponseItem';

export default function ResponseList( props ) {
	const {
		data,
		isSuccess,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
		isClientModeActive,
		baseApiRoute,
	} = props;
	const { ref, inView } = useInView();
	useEffect( () => {
		if ( inView && hasNextPage ) {
			fetchNextPage();
		}
	}, [ inView, fetchNextPage, hasNextPage ] );
	return (
		<ResponseListStyle className="helpgent-scrollbar-style">
			{ isSuccess &&
				data &&
				data.pages.map( ( page ) =>
					page.map( ( response, index ) => {
						if ( page.length === index + 1 ) {
							return (
								<ResponseItem
									ref={ ref }
									key={ index }
									data={ data }
									response={ response }
									isClientModeActive={ isClientModeActive }
									baseApiRoute={ baseApiRoute }
								/>
							);
						}
						return (
							<ResponseItem
								key={ index }
								data={ data }
								response={ response }
								isClientModeActive={ isClientModeActive }
								baseApiRoute={ baseApiRoute }
							/>
						);
					} )
				) }
			{ isFetchingNextPage && <span>Loading</span> }
		</ResponseListStyle>
	);
}
