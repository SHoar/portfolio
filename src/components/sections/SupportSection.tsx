import React from 'react';
import AdSlot from '../ads/AdSlot';

const SupportSection: React.FC = () => {
  const slotId = import.meta.env.VITE_ADSENSE_SLOT_SUPPORT as string | undefined;

  return (
    <section
      id="support"
      className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-cyan/30 rounded-full blur-2xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading text-secondary-900 dark:text-white">
            Support this site
          </h2>
          <div className="section-divider" />
          <p className="text-sm text-secondary-600 dark:text-secondary-400 max-w-md mx-auto mt-4">
            Sponsored content below helps keep this portfolio online.
          </p>
        </div>

        <div className="flex justify-center">
          <AdSlot
            slotId={slotId}
            placeholderSize="300x250"
            format="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
