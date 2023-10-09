<!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
    <title>cirrent_global_search</title>
    <script type="module"
        src="https://static.cloud.coveo.com/atomic-hosted-page/v0/atomic-hosted-page/atomic-hosted-page.esm.js"></script>
    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-M5ZB79RR');</script>
    <!-- End Google Tag Manager -->
    <script>


        (async () => {
            await customElements.whenDefined("atomic-hosted-page");

            const pageOptions_s = {
                pageId: '48f41ff4-4765-4d4c-8a20-0979bc1764a5',
                accessToken: 'xx7c6c6863-cc14-4c77-8caf-ee58823e617d',
                organizationId: 'webscraping0dry4ija',
            }
            const page_s = document.querySelector('#searchpage');
            await page_s.initialize({
                pageId: pageOptions_s.pageId,
                accessToken: pageOptions_s.accessToken,
                organizationId: pageOptions_s.organizationId,
                organizationEndpoints: await page_s.getOrganizationEndpoints(pageOptions_s.organizationId, '')
            });
        })();
    </script>
    <style>
        atomic-external>atomic-search-box {
            width: 165px;
            margin: auto;
        }
    </style>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5ZB79RR" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <atomic-hosted-page id="searchpage"></atomic-hosted-page>

</body>

</html>
