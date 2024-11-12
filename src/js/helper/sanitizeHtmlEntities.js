// Sanitize HTML Entities
export default function sanitizeHtmlEntities(text) {
	return text
		.replace(/&#8211;/g, '–')
		.replace(/&amp;/g, '&');
}