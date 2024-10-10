export default function getConnectAccountURL(slug) {
    const base64Url = btoa(templatiq_obj.dashboard_url + (slug ? '#/template/' + slug : ''));
    const connectUrl = templatiq_obj.cloud_url + '?connect=true&return_to=' + base64Url;

    return connectUrl;
}