export default function getPurchaseConnectAccountURL(slug, template_id) {
    const checkoutUrl = `${templatiq_obj.cloud_checkout}?edd_action=add_to_cart&download_id=${template_id}`;
    const baseUrl = templatiq_obj.dashboard_url + (slug ? '&templateSlug=' + slug : '');
    const base64Url = btoa(baseUrl);
    const connectUrl = checkoutUrl + '?connect=true&return_to=' + base64Url;

    return connectUrl;
}