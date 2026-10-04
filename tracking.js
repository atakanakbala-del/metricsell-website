/*
 * MetricSell — consent-gated tracking (GTM, Meta Pixel, GA4, Google Ads)
 * Loaded in <head> of every page. Tracking scripts only load after the visitor
 * accepts cookies (KVKK). Pages that already have their own #cookieBanner keep it;
 * pages without one get the same banner injected here.
 */
(function () {
    var GTM_ID = 'GTM-MKW7SQTG';
    var META_PIXEL_ID = '1827487517954836';
    var GA4_ID = 'G-0FKXPN6YGP';
    var GOOGLE_ADS_ID = 'AW-17868667342';
    var CONSENT_KEY = 'ms_cookie_consent';

    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
    }

    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
    }

    window.msLoadTracking = function () {
        if (window.msTrackingLoaded) return;
        window.msTrackingLoaded = true;

        // Google Tag Manager
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',GTM_ID);

        // Meta Pixel
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', META_PIXEL_ID);
        fbq('track', 'PageView');

        // GA4 + Google Ads
        var gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
        document.head.appendChild(gaScript);
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){dataLayer.push(arguments);};
        gtag('js', new Date());
        gtag('config', GA4_ID);
        gtag('config', GOOGLE_ADS_ID);
    };

    if (getConsent() === 'accepted') {
        window.msLoadTracking();
    }

    // WhatsApp clicks count as a contact conversion on every page
    document.addEventListener('click', function (e) {
        var link = e.target.closest && e.target.closest('a[href*="wa.me/"], a[href*="api.whatsapp.com"]');
        if (!link) return;
        if (typeof fbq === 'function') fbq('track', 'Contact');
        if (typeof gtag === 'function') gtag('event', 'whatsapp_click', { 'link_url': link.href, 'page_path': location.pathname });
    });

    // Inject the cookie banner on pages that don't ship their own
    function injectBanner() {
        if (document.getElementById('cookieBanner')) return;

        var style = document.createElement('style');
        style.textContent =
            '.ms-cookie-banner{position:fixed;left:20px;right:20px;bottom:20px;max-width:680px;margin:0 auto;background:#091A2F;color:#fff;border-radius:16px;padding:24px 28px;box-shadow:0 20px 60px rgba(0,0,0,.3);z-index:100000;display:flex;flex-direction:column;gap:16px;font-family:inherit}' +
            '.ms-cookie-banner[hidden]{display:none}' +
            '.ms-cookie-banner p{font-size:14px;line-height:1.6;opacity:.85;margin:0}' +
            '.ms-cookie-banner a{color:#FFA733}' +
            '.ms-cookie-banner-actions{display:flex;gap:12px;justify-content:flex-end}' +
            '.ms-cookie-banner-actions button{padding:10px 20px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;border:none;font-family:inherit}' +
            '.ms-cookie-reject{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)!important}' +
            '.ms-cookie-accept{background:linear-gradient(135deg,#FF8C00 0%,#FFA733 100%);color:#fff}' +
            '@media (max-width:480px){.ms-cookie-banner{left:12px;right:12px;bottom:12px;padding:20px}.ms-cookie-banner-actions{flex-direction:column-reverse}.ms-cookie-banner-actions button{width:100%}}';
        document.head.appendChild(style);

        var banner = document.createElement('div');
        banner.className = 'ms-cookie-banner';
        banner.id = 'cookieBanner';
        banner.hidden = true;
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-live', 'polite');
        banner.setAttribute('aria-label', 'Çerez izni');
        banner.innerHTML =
            '<p>Sitemizde deneyiminizi geliştirmek ve reklam performansını ölçmek için çerezler kullanıyoruz. Detaylı bilgi için <a href="cerez-politikasi.html">Çerez Politikası</a>\'nı inceleyebilirsiniz.</p>' +
            '<div class="ms-cookie-banner-actions">' +
                '<button type="button" class="ms-cookie-reject" id="cookieReject">Reddet</button>' +
                '<button type="button" class="ms-cookie-accept" id="cookieAccept">Kabul Et</button>' +
            '</div>';
        document.body.appendChild(banner);

        if (!getConsent()) banner.hidden = false;

        document.getElementById('cookieAccept').addEventListener('click', function () {
            setConsent('accepted');
            banner.hidden = true;
            window.msLoadTracking();
        });
        document.getElementById('cookieReject').addEventListener('click', function () {
            setConsent('rejected');
            banner.hidden = true;
        });
        var settingsLink = document.getElementById('cookieSettingsLink');
        if (settingsLink) {
            settingsLink.addEventListener('click', function (e) {
                e.preventDefault();
                banner.hidden = false;
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectBanner);
    } else {
        injectBanner();
    }
})();
