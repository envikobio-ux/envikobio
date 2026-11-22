import Script from 'next/script';

/**
 * Apollo Website Tracker
 * Identifies companies globally and people (U.S. only) visiting the website.
 * Supports both company-level and person-level tracking.
 */
export default function ApolloTracker() {
  return (
    <Script
      id="apollo-website-tracker"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"6a503506be2295000c7d9960"})},
document.head.appendChild(o)}initApollo();`,
      }}
    />
  );
}