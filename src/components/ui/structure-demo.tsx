import { motion } from 'framer-motion';
import { Folder, FileText, FileCode2, FileJson, FileInput, FileOutput, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FolderStructureDemo() {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'root': true,
    'src': true,
    'app': true,
    'components': true,
    'ui': true,
    'config': true,
    'lib': true,
    'public': true
  });

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-24 w-full max-w-4xl mx-auto"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 font-poppins">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
          Project Architecture
        </span>
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 dark:bg-black/5 p-6 rounded-2xl border border-white/10 dark:border-black/10 backdrop-blur-sm shadow-lg overflow-hidden"
      >
        {/* Root Directory */}
        <motion.div
          className="mb-4"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="flex items-center gap-2 text-primary font-medium cursor-pointer hover:bg-white/5 px-2 py-1 rounded-lg transition-colors"
            onClick={() => toggleFolder('root')}
          >
            {expandedFolders['root'] ? (
              <ChevronDown className="w-4 h-4 text-primary/80" />
            ) : (
              <ChevronRight className="w-4 h-4 text-primary/80" />
            )}
            <Folder className="w-5 h-5 text-primary" />
            <span>my-app/</span>
          </div>

          {expandedFolders['root'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="ml-6 mt-1 space-y-1 pl-4 border-l-2 border-white/10"
            >
              <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                <FileJson className="w-4 h-4 text-yellow-400/80" />
                <span className="text-gray-800 dark:text-gray-300">package.json</span>
              </div>
              <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                <FileJson className="w-4 h-4 text-yellow-400/80" />
                <span className="text-gray-800 dark:text-gray-300">tailwind.config.js</span>
              </div>
              <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                <FileText className="w-4 h-4 text-blue-400/80" />
                <span className="text-gray-800 dark:text-gray-300">README.md</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* App Directory */}
        <motion.div
          className="mb-4"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div
            className="flex items-center gap-2 text-primary font-medium cursor-pointer hover:bg-white/5 px-2 py-1 rounded-lg transition-colors"
            onClick={() => toggleFolder('src')}
          >
            {expandedFolders['src'] ? (
              <ChevronDown className="w-4 h-4 text-primary/80" />
            ) : (
              <ChevronRight className="w-4 h-4 text-primary/80" />
            )}
            <Folder className="w-5 h-5 text-primary" />
            <span>src/</span>
          </div>

          {expandedFolders['src'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="ml-6 mt-1 space-y-2 pl-4 border-l-2 border-white/10"
            >
              {/* App Subdirectory */}
              <div>
                <div
                  className="flex items-center gap-2 cursor-pointer hover:bg-white/5 px-2 py-1 rounded transition-colors"
                  onClick={() => toggleFolder('app')}
                >
                  {expandedFolders['app'] ? (
                    <ChevronDown className="w-4 h-4 text-primary/80" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-primary/80" />
                  )}
                  <Folder className="w-4 h-4 text-primary" />
                  <span className="text-gray-800 dark:text-gray-300">app/</span>
                </div>

                {expandedFolders['app'] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="ml-6 space-y-1 pl-4 border-l-2 border-white/10"
                  >
                    <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                      <FileText className="w-4 h-4 text-blue-400/80" />
                      <span className="text-gray-800 dark:text-gray-300">layout.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                      <FileText className="w-4 h-4 text-blue-400/80" />
                      <span className="text-gray-800 dark:text-gray-300">page.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                      <FileText className="w-4 h-4 text-blue-400/80" />
                      <span className="text-gray-800 dark:text-gray-300">globals.css</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Components Subdirectory */}
              <div>
                <div
                  className="flex items-center gap-2 cursor-pointer hover:bg-white/5 px-2 py-1 rounded transition-colors"
                  onClick={() => toggleFolder('components')}
                >
                  {expandedFolders['components'] ? (
                    <ChevronDown className="w-4 h-4 text-primary/80" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-primary/80" />
                  )}
                  <Folder className="w-4 h-4 text-primary" />
                  <span className="text-gray-800 dark:text-gray-300">components/</span>
                </div>

                {expandedFolders['components'] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="ml-6 space-y-2 pl-4 border-l-2 border-white/10"
                  >
                    <div>
                      <div
                        className="flex items-center gap-2 cursor-pointer hover:bg-white/5 px-2 py-1 rounded transition-colors"
                        onClick={() => toggleFolder('ui')}
                      >
                        {expandedFolders['ui'] ? (
                          <ChevronDown className="w-4 h-4 text-primary/80" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-primary/80" />
                        )}
                        <Folder className="w-4 h-4 text-primary" />
                        <span className="text-gray-800 dark:text-gray-300">ui/</span>
                      </div>

                      {expandedFolders['ui'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 space-y-1 pl-4 border-l-2 border-white/10"
                        >
                          <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                            <FileCode2 className="w-4 h-4 text-purple-400/80" />
                            <span className="text-gray-800 dark:text-gray-300">hero-section.tsx</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                            <FileCode2 className="w-4 h-4 text-purple-400/80" />
                            <span className="text-gray-800 dark:text-gray-300">feature-card.tsx</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                            <FileCode2 className="w-4 h-4 text-purple-400/80" />
                            <span className="text-gray-800 dark:text-gray-300">structure-demo.tsx</span>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <div
                        className="flex items-center gap-2 cursor-pointer hover:bg-white/5 px-2 py-1 rounded transition-colors"
                        onClick={() => toggleFolder('config')}
                      >
                        {expandedFolders['config'] ? (
                          <ChevronDown className="w-4 h-4 text-primary/80" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-primary/80" />
                        )}
                        <Folder className="w-4 h-4 text-primary" />
                        <span className="text-gray-800 dark:text-gray-300">config/</span>
                      </div>

                      {expandedFolders['config'] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 space-y-1 pl-4 border-l-2 border-white/10"
                        >
                          <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                            <FileCode2 className="w-4 h-4 text-purple-400/80" />
                            <span className="text-gray-800 dark:text-gray-300">theme-toggle.tsx</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Lib Directory */}
              <div>
                <div
                  className="flex items-center gap-2 cursor-pointer hover:bg-white/5 px-2 py-1 rounded transition-colors"
                  onClick={() => toggleFolder('lib')}
                >
                  {expandedFolders['lib'] ? (
                    <ChevronDown className="w-4 h-4 text-primary/80" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-primary/80" />
                  )}
                  <Folder className="w-4 h-4 text-primary" />
                  <span className="text-gray-800 dark:text-gray-300">lib/</span>
                </div>

                {expandedFolders['lib'] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="ml-6 space-y-1 pl-4 border-l-2 border-white/10"
                  >
                    <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                      <FileInput className="w-4 h-4 text-green-400/80" />
                      <span className="text-gray-800 dark:text-gray-300">theme-config.ts</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Public Directory */}
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div
            className="flex items-center gap-2 text-primary font-medium cursor-pointer hover:bg-white/5 px-2 py-1 rounded-lg transition-colors"
            onClick={() => toggleFolder('public')}
          >
            {expandedFolders['public'] ? (
              <ChevronDown className="w-4 h-4 text-primary/80" />
            ) : (
              <ChevronRight className="w-4 h-4 text-primary/80" />
            )}
            <Folder className="w-5 h-5 text-primary" />
            <span>public/</span>
          </div>

          {expandedFolders['public'] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="ml-6 mt-1 space-y-1 pl-4 border-l-2 border-white/10"
            >
              <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                <FileText className="w-4 h-4 text-blue-400/80" />
                <span className="text-gray-800 dark:text-gray-300">next.svg</span>
              </div>
              <div className="flex items-center gap-2 text-sm hover:bg-white/5 px-2 py-1 rounded transition-colors">
                <FileText className="w-4 h-4 text-blue-400/80" />
                <span className="text-gray-800 dark:text-gray-300">vercel.svg</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Key Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <Folder className="w-4 h-4 text-primary" />
          <span className="text-gray-800 dark:text-gray-300">Directory</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <FileCode2 className="w-4 h-4 text-purple-400/80" />
          <span className="text-gray-800 dark:text-gray-300">Component</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <FileText className="w-4 h-4 text-blue-400/80" />
          <span className="text-gray-800 dark:text-gray-300">Page/Asset</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <FileJson className="w-4 h-4 text-yellow-400/80" />
          <span className="text-gray-800 dark:text-gray-300">Config</span>
        </div>
      </motion.div>
    </motion.section>
  );
}