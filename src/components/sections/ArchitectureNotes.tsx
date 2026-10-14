import React from 'react';
import architectureNotes from '../../data/architectureNotes';

const ArchitectureNotes: React.FC = () => {
  return (
    <section
      id="architecture"
      className="py-20 bg-white dark:bg-secondary-900 transition-colors duration-300"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Architecture Notes</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto mt-4">
            The public Architect Trilogy: GitOps control planes, agent-safe products, and
            deterministic tooling—where LLMs are bounded tools, not autonomous operators.
          </p>
          <a
            href="https://github.com/SHoar/architect-case-studies"
            className="inline-block mt-6 text-primary-600 dark:text-primary-400 font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/SHoar/architect-case-studies →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architectureNotes.map((note, index) => (
            <a
              key={note.id}
              href={note.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in block group"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="text-xl font-bold mb-3 text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {note.title}
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed">
                {note.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureNotes;
