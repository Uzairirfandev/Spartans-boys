import { motion } from 'framer-motion';
import { Folder, FileText, FileCode2, FileJson, FileInput, FileOutput } from 'lucide-react';

export default function FolderStructureDemo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-24 w-full max-w-4xl"
    >
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-12 font-poppins">
        <span className="text-primary bg-clip-text">
          Project Structure
        </span>
      </h2>

      <div className="bg-cardBgLight dark:bg-cardBgDark p-6 rounded-xl border border-border overflow-hidden">
        {/* Root Directory */}
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 text-primary font-medium">
            <Folder className="w-5 h-5" />
            <span>my-app/</span>
          </div>

          <div className="ml-6 mt-2 space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <FileJson className="w-4 h-4 text-yellow-500" />
              <span>package.json</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FileJson className="w-4 h-4 text-yellow-500" />
              <span>tailwind.config.js</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4 text-blue-500" />
              <span>README.md</span>
            </div>
          </div>
        </motion.div>

        {/* App Directory */}
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 text-primary font-medium">
            <Folder className="w-5 h-5" />
            <span>src/</span>
          </div>

          <div className="ml-6 mt-2 space-y-1">
            {/* App Subdirectory */}
            <div className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-primary" />
              <span>app/</span>
            </div>

            <div className="ml-6 space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-blue-500" />
                <span>layout.tsx</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-blue-500" />
                <span>page.tsx</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FileText className="w-4 h-4 text-blue-500" />
                <span>globals.css</span>
              </div>
            </div>

            {/* Components Subdirectory */}
            <div className="flex items-center gap-2 mt-2">
              <Folder className="w-4 h-4 text-primary" />
              <span>components/</span>
            </div>

            <div className="ml-6 space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <Folder className="w-4 h-4 text-primary" />
                <span>ui/</span>
              </div>
              <div className="ml-6 space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <FileCode2 className="w-4 h-4 text-purple-500" />
                  <span>hero-section.tsx</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileCode2 className="w-4 h-4 text-purple-500" />
                  <span>feature-card.tsx</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileCode2 className="w-4 h-4 text-purple-500" />
                  <span>structure-demo.tsx</span>
                </div>
              </div>
            </div>
            <div className="ml-6 space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <Folder className="w-4 h-4 text-primary" />
                <span>config/</span>
              </div>
              <div className="ml-6 space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <FileCode2 className="w-4 h-4 text-purple-500" />
                  <span>theme-toggle.tsx</span>
                </div>
              </div>


            </div>
            {/* Config Subdirectory */}
            <div className="flex items-center gap-2 mt-2">
              <Folder className="w-4 h-4 text-primary" />
              <span>lib/</span>
            </div>

            <div className="ml-6 space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <FileInput className="w-4 h-4 text-green-500" />
                <span>theme-config.tsx</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Public Directory */}
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-primary font-medium">
            <Folder className="w-5 h-5" />
            <span>public/</span>
          </div>

          <div className="ml-6 mt-2 space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4 text-blue-500" />
              <span>next.svg</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4 text-blue-500" />
              <span>vercel.svg</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Key Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-6 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-grayTextLight dark:text-grayTextDark"
      >
        <div className="flex items-center gap-2">
          <Folder className="w-4 h-4 text-primary" />
          <span>Directory</span>
        </div>
        <div className="flex items-center gap-2">
          <FileCode2 className="w-4 h-4 text-purple-500" />
          <span>Component</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-500" />
          <span>Page/Asset</span>
        </div>
        <div className="flex items-center gap-2">
          <FileJson className="w-4 h-4 text-yellow-500" />
          <span>Config</span>
        </div>
      </motion.div>
    </motion.section>
  );
}