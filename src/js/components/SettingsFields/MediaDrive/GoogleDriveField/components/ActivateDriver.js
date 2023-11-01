import { useState, useRef } from '@wordpress/element';

import ConnectMediaDrive from '../../components/ConnectMediaDrive';
import { getAuthorizationURL } from '../helpers/googleAPI';

export default function ActivateDriver( props ) {
	const { inputKey, form, save } = props;

	const [ isConnecting, setIsConnecting ] = useState( false );

	const googleDriveAuthWindowRef = useRef();
	const googleDriveAuthWindowTimerRef = useRef();

	function onConnect() {
		setIsConnecting( true );

		window.removeEventListener( 'message', afterAuthentication );
		window.addEventListener( 'message', afterAuthentication );

		const popupConfig = {
			title: 'Sign in - Google Accounts',
			url: getAuthorizationURL(),
		};

		googleDriveAuthWindowRef.current = openPopupWondowCenter( popupConfig );

		if ( googleDriveAuthWindowTimerRef.current ) {
			clearInterval( googleDriveAuthWindowTimerRef.current );
		}

		googleDriveAuthWindowTimerRef.current = setInterval(
			dissmisGoogleDriveAuth,
			1000
		);
	}

	function openPopupWondowCenter( { url, title, width, height } ) {
		url = typeof url !== 'undefined' ? url : '';
		title = typeof title !== 'undefined' ? title : '';
		width = typeof width !== 'undefined' ? width : 500;
		height = typeof height !== 'undefined' ? height : 500;

		const dualScreenLeft =
			window.screenLeft !== undefined
				? window.screenLeft
				: window.screenX;
		const dualScreenTop =
			window.screenTop !== undefined ? window.screenTop : window.screenY;

		const screenWidth = window.innerWidth
			? window.innerWidth
			: document.documentElement.clientWidth
			? document.documentElement.clientWidth
			: screen.width;
		const screenHeight = window.innerHeight
			? window.innerHeight
			: document.documentElement.clientHeight
			? document.documentElement.clientHeight
			: screen.height;

		const systemZoom = screenWidth / window.screen.availWidth;
		const left = ( screenWidth - width ) / 2 / systemZoom + dualScreenLeft;
		const top = ( screenHeight - height ) / 2 / systemZoom + dualScreenTop;
		const features = `width=${ width / systemZoom }, height=${
			height / systemZoom
		}, top=${ top }, left=${ left }`;

		const newWindow = window.open( url, title, features );

		if ( window.focus ) {
			newWindow.focus();
		}

		return newWindow;
	}

	function afterAuthentication( event ) {
		if ( 'https://app.helpgent.com' !== event.origin ) {
			return;
		}

		window.removeEventListener( 'message', afterAuthentication );

		const message = event.data.message
			? event.data.message
			: 'Something went wrong, please try again';

		if ( ! event.data.success ) {
			if ( ! event.data.canceled ) {
				alert( message );
			}

			setIsConnecting( false );
			dissmisGoogleDriveAuth();
			return;
		}

		const accessToken =
			event.data.data && event.data.data.access_token
				? event.data.data.access_token
				: '';
		const refreshToken =
			event.data.data && event.data.data.refresh_token
				? event.data.data.refresh_token
				: '';

		// If Access Token Is Not Available
		if ( ! accessToken ) {
			alert( message );
			setIsConnecting( false );
			dissmisGoogleDriveAuth();
			return;
		}

		// If Refresh Token Is Not Available
		if ( ! refreshToken ) {
			alert(
				'This email is already connected to another site, so please use a different email or disconnect the current email from the previous site before connecting it here'
			);
			setIsConnecting( false );
			dissmisGoogleDriveAuth();
			return;
		}

		form.setValue( inputKey, { accessToken, refreshToken } );

		dissmisGoogleDriveAuth();
		setIsConnecting( false );
		save();
	}

	function dissmisGoogleDriveAuth() {
		if ( ! googleDriveAuthWindowRef.current.closed ) {
			return;
		}

		setIsConnecting( false );

		clearInterval( googleDriveAuthWindowTimerRef.current );
		window.removeEventListener( 'message', afterAuthentication );
	}

	return (
		<ConnectMediaDrive
			{ ...props }
			onConnect={ onConnect }
			isConnecting={ isConnecting }
		/>
	);
}
