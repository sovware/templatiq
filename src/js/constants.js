import ReactSVG from 'react-inlinesvg';
import { v4 as uuidv4 } from 'uuid';

export const KB_IN_BYTES = 1024;
export const MB_IN_BYTES = 1024 * KB_IN_BYTES;
export const GB_IN_BYTES = 1024 * MB_IN_BYTES;

export const SECOND_IN_MILLISECONDS = 1000;
export const MIN_IN_SECONDS = 60;

import facebook from '@icon/facebook.svg';
import twitter from '@icon/twitter.svg';
import youtube from '@icon/youtube.svg';
import instagram from '@icon/instagram.svg';

import chartBar from '@icon/chart-bar.svg';
import bar from '@icon/bar.svg';
import hash from '@icon/hash.svg';
import button from '@icon/button.svg';
import upload from '@icon/upload.svg';
import slider from '@icon/sliders.svg';
import date from '@icon/calendar-day.svg';
import star from '@icon/star.svg';
import meter from '@icon/meter.svg';
import marker from '@icon/marker.svg';
import address from '@icon/address-book.svg';
import envelope from '@icon/envelope.svg';
import phone from '@icon/phone-flip.svg';
import url from '@icon/link-alt.svg';
import openEnded from '@icon/open-ended.svg';
import horizontalBar from '@icon/chart-simple-horizontal.svg';
import video from '@icon/video.svg';
import comment from '@icon/comment.svg';
import scrubber from '@icon/scrubber.svg';
import checkbox from '@icon/checkbox.svg';
import angleCircle from '@icon/angle-circle.svg';
import toggle from '@icon/toggle.svg';
import picture from '@icon/picture.svg';
import pdf from '@icon/file-pdf.svg';
import arrowSquareRight from '@icon/arrow-square-right.svg';
import arrowSquareLeft from '@icon/arrow-square-left.svg';
import chartSimple from '@icon/chart-simple.svg';
import useUnLock from '@icon/user-unlock.svg';
import text from '@icon/text.svg';
import videoCamera from '@icon/video-camera-alt.svg';
import screenRecord from '@icon/screen-record.svg';
import mic from '@icon/mic.svg';
import redo from '@icon/redo.svg';

import starSolid from '@icon/star-alt.svg';
import heart from '@icon/heart.svg';
import heartSolid from '@icon/heart-solid.svg';
import bulb from '@icon/bulb.svg';
import bulbSolid from '@icon/bulb-solid.svg';
import thumbs from '@icon/thumbs-up.svg';
import thumbsSolid from '@icon/thumbs-up-solid.svg';
import user from '@icon/user.svg';
import userSolid from '@icon/user-solid.svg';
import trophy from '@icon/trophy.svg';
import trophySolid from '@icon/trophy-solid.svg';
import flag from '@icon/flag.svg';
import flagSolid from '@icon/flag-solid.svg';

const iconList = {
	chartBar: chartBar,
	bar: bar,
	hash: hash,
	button: button,
	upload: upload,
	slider: slider,
	date: date,
	star: star,
	meter: meter,
	marker: marker,
	address: address,
	envelope: envelope,
	phone: phone,
	url: url,
	openEnded: openEnded,
	horizontalBar: horizontalBar,
	video: video,
	comment: comment,
	scrubber: scrubber,
	checkbox: checkbox,
	angleCircle: angleCircle,
	toggle: toggle,
	picture: picture,
	arrowSquareRight: arrowSquareRight,
	arrowSquareLeft: arrowSquareLeft,
	chartSimple: chartSimple,
	useUnLock: useUnLock,
	text: text,
	video: videoCamera,
	screen: screenRecord,
	voice: mic,
	redo: redo,
};

const ratingIcons = {
	star: {
		normal: star,
		solid: starSolid,
	},
	heart: {
		normal: heart,
		solid: heartSolid,
	},
	bulb: {
		normal: bulb,
		solid: bulbSolid,
	},
	thumbs: {
		normal: thumbs,
		solid: thumbsSolid,
	},
	user: {
		normal: user,
		solid: userSolid,
	},
	trophy: {
		normal: trophy,
		solid: trophySolid,
	},
	flag: {
		normal: flag,
		solid: flagSolid,
	},
};

const mimeTypeIcons = {
	'image/jpeg': picture,
	'image/gif': picture,
	'image/png': picture,
	'image/bmp': picture,
	'image/tiff': picture,
	'image/webp': picture,
	'image/x-icon': picture,
	'image/heic': picture,

	'video/x-ms-asf': videoCamera,
	'video/x-ms-wmv': videoCamera,
	'video/x-ms-wmx': videoCamera,
	'video/x-ms-wm': videoCamera,
	'video/avi': videoCamera,
	'video/divx': videoCamera,
	'video/x-flv': videoCamera,
	'video/quicktime': videoCamera,
	'video/mp4': videoCamera,
	'video/ogg': videoCamera,
	'video/webm': videoCamera,
	'video/x-matroska': videoCamera,
	'video/3gpp': videoCamera,
	'video/3gpp2': videoCamera,

	'audio/mpeg': mic,
	'audio/aac': mic,
	'audio/x-realaudio': mic,
	'audio/ogg': mic,
	'audio/flac': mic,
	'audio/midi': mic,
	'audio/x-ms-wma': mic,
	'audio/x-ms-wax': mic,
	'audio/x-matroska': mic,

	'application/pdf': pdf,
};

const mimeTypes = {
	'image/jpeg': 'picture',
	'image/gif': 'picture',
	'image/png': 'picture',
	'image/bmp': 'picture',
	'image/tiff': 'picture',
	'image/webp': 'picture',
	'image/x-icon': 'picture',
	'image/heic': 'picture',

	'video/x-ms-asf': 'video',
	'video/x-ms-wmv': 'video',
	'video/x-ms-wmx': 'video',
	'video/x-ms-wm': 'video',
	'video/avi': 'video',
	'video/divx': 'video',
	'video/x-flv': 'video',
	'video/quicktime': 'video',
	'video/mp4': 'video',
	'video/ogg': 'video',
	'video/webm': 'video',
	'video/x-matroska': 'video',
	'video/3gpp': 'video',
	'video/3gpp2': 'video',

	'audio/mpeg': 'voice',
	'audio/aac': 'voice',
	'audio/x-realaudio': 'voice',
	'audio/ogg': 'voice',
	'audio/flac': 'voice',
	'audio/midi': 'voice',
	'audio/x-ms-wma': 'voice',
	'audio/x-ms-wax': 'voice',
	'audio/x-matroska': 'voice',

	'application/pdf': 'pdf',
};


const socialIcons = {
	facebook: <ReactSVG src={ facebook } />,
	twitter: <ReactSVG src={ twitter } />,
	youtube: <ReactSVG src={ youtube } />,
	instagram: <ReactSVG src={ instagram } />,
};

export {
	iconList,
	// previewComponents,
	socialIcons,
	mimeTypeIcons,
	mimeTypes,
	// isProActive,
	ratingIcons,
};
