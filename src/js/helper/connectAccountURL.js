export default function getConnectAccountURL(slug) {
    const baseUrl = templatiq_obj.dashboard_url + (slug ? '&templateSlug=' + slug : '');
    const base64Url = btoa(baseUrl);
    const connectUrl = templatiq_obj.cloud_url + '?connect=true&return_to=' + base64Url;

    return connectUrl;
}