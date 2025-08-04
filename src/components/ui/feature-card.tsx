import { motion } from 'framer-motion';

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-cardBgLight dark:bg-cardBgDark p-4 sm:p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all"
    >
      <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 font-poppins">{title}</h3>
      <p className="text-grayTextLight dark:text-grayTextDark">{description}</p>
    </motion.div>
  );
}