// Sanitize HTML Entities
export default function sanitizeHtmlEntities(text) {
	console.log('sanitizeHtmlEntities', text);
	return text
		.replace(/&#8211;/g, '–')
		.replace(/&amp;/g, '&');
}