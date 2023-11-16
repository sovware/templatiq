import { register } from '@wordpress/data';

function customStore() {
	return {
		name: 'custom-data',
		instantiate: () => {
			const listeners = new Set();
			const prices = { hammer: 7.5 };

			function storeChanged() {
				for ( const listener of listeners ) {
					listener();
				}
			}

			function subscribe( listener ) {
				listeners.add( listener );
				return () => listeners.delete( listener );
			}

			const selectors = {
				getPrice( itemName ) {
					return prices[ itemName ];
				},
			};

			const actions = {
				setPrice( itemName, price ) {
					prices[ itemName ] = price;
					storeChanged();
				},
			};

			return {
				getSelectors: () => selectors,
				getActions: () => actions,
				subscribe,
			};
		},
	};
}

register( customStore );