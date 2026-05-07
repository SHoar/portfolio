import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import faqItems from '../../data/faq';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-secondary-900 dark:to-secondary-950 relative overflow-hidden transition-colors duration-300">
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading text-secondary-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mt-4">
            Clear answers so you know what to expect—no fine print
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-2">
            {faqItems.map((item) => (
              <Disclosure key={item.id} as="div" className="glass-card rounded-lg overflow-hidden">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between px-6 py-4 text-left text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors rounded-lg">
                      <span className="font-semibold pr-4">{item.question}</span>
                      <ChevronDownIcon
                        className={classNames('w-5 h-5 flex-shrink-0 text-primary-600 dark:text-primary-400 transition-transform', open && 'rotate-180')}
                        aria-hidden
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-6 pb-4 pt-0 text-secondary-700 dark:text-secondary-300 leading-relaxed">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
