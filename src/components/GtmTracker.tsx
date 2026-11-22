import Script from 'next/script';

/**
 * Google Tag Manager (GTM) Website Tracker
 * Loads the GTM container (GTM-5CTPD89M) and initializes the dataLayer
 * for tag management, analytics, and marketing event tracking.
 */
export default function GtmTracker() {
  return (
    <>
      {/* GTM dataLayer 初始化（在 gtm.js 之前执行） */}
      <Script
        id="gtm-dataLayer"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
        }}
      />
      {/* GTM 容器脚本 */}
      <Script
        id="gtm-container"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-5CTPD89M"
      />
      {/* GTM noscript 兜底（无 JS 环境） */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5CTPD89M"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}