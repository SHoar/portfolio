/**
 * Google Ads feature flag. When "true", Support section and right rail render
 * and the AdSense script is loaded. Default: off.
 */
export const adsEnabled = import.meta.env.VITE_ADS_ENABLED === 'true';

const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;

/** Inject AdSense script once when ads are enabled. Call early (e.g. main.tsx). */
export function injectAdSenseScriptIfEnabled(): void {
  if (!adsEnabled || !ADSENSE_CLIENT) return;
  if (document.querySelector('script[src*="adsbygoogle.js"]')) return;

  const script = document.createElement('script');
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_CLIENT)}`;
  document.head.appendChild(script);
}
