import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AdSlot from '../ads/AdSlot';
import { adsEnabled } from '../../config/ads';

interface LayoutProps {
  children: React.ReactNode;
}

const railSlotId = import.meta.env.VITE_ADSENSE_SLOT_RAIL as string | undefined;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="page-top" className="min-h-screen flex flex-col">
      <Header />
      {adsEnabled ? (
        <div className="flex-grow flex flex-col xl:flex-row xl:items-start">
          <div className="hidden xl:block flex-1 min-w-0" aria-hidden />
          <main className="min-w-0 w-full xl:w-[80rem] xl:max-w-7xl xl:shrink-0">
            {children}
          </main>
          <aside
            className="hidden xl:flex flex-1 min-w-0 xl:justify-start xl:pl-6 xl:pt-24"
            aria-label="Sponsored content"
          >
            <div className="xl:w-52 flex-shrink-0">
              <AdSlot
                slotId={railSlotId}
                placeholderSize="160x600"
                format="vertical"
              />
            </div>
          </aside>
        </div>
      ) : (
        <main className="flex-grow">
          {children}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Layout; 