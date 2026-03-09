import React, { useEffect, useRef } from 'react';

/** Supported placeholder ad dimensions (width x height). Tailwind classes for each. */
export const AD_PLACEHOLDER_SIZES = {
  '300x250': { width: 300, height: 250, className: 'w-[300px] h-[250px] max-w-full' },
  '320x100': { width: 320, height: 100, className: 'w-[320px] h-[100px] max-w-full' },
  '728x90': { width: 728, height: 90, className: 'w-full max-w-[728px] h-[90px]' },
  '160x600': { width: 160, height: 600, className: 'w-[160px] h-[600px] max-w-full' },
} as const;

export type AdPlaceholderSize = keyof typeof AD_PLACEHOLDER_SIZES;

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSlotProps {
  /** Ad slot ID from AdSense (e.g. 1234567890). When missing or when client is unset, placeholder is shown. */
  slotId?: string;
  /** Ad format: auto, rectangle, horizontal, vertical. */
  format?: string;
  /** Placeholder size key when in placeholder mode. */
  placeholderSize?: AdPlaceholderSize;
  /** Optional container class names. */
  className?: string;
  /** Force placeholder mode (e.g. for dev). */
  forcePlaceholder?: boolean;
}

const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined;

export const AdSlot: React.FC<AdSlotProps> = ({
  slotId,
  format = 'auto',
  placeholderSize = '300x250',
  className = '',
  forcePlaceholder = false,
}) => {
  const insRef = useRef<HTMLModElement>(null);
  const client = ADSENSE_CLIENT;
  const showLiveAd = Boolean(!forcePlaceholder && client && slotId);

  useEffect(() => {
    if (!showLiveAd || !insRef.current || typeof window.adsbygoogle === 'undefined') return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignore
    }
  }, [showLiveAd]);

  const dimensions = AD_PLACEHOLDER_SIZES[placeholderSize];
  const placeholderUrl = `https://placehold.co/${dimensions.width}x${dimensions.height}/1E293B/64748B?text=Ad&font=inter`;

  return (
    <aside
      className={className}
      aria-label="Advertisement"
    >
      <span className="block text-xs font-medium text-secondary-500 dark:text-secondary-400 mb-1 uppercase tracking-wider">
        Sponsored
      </span>
      {showLiveAd ? (
        <div className="glass-card overflow-hidden p-0 inline-block">
          <ins
            ref={insRef}
            className="adsbygoogle block"
            data-ad-client={client}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        </div>
      ) : (
        <div className={`glass-card overflow-hidden inline-block ${dimensions.className}`}>
          <img
            src={placeholderUrl}
            alt=""
            width={dimensions.width}
            height={dimensions.height}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </aside>
  );
};

export default AdSlot;
