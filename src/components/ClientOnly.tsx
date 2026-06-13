"use client";

import { useEffect, useState } from "react";

/**
 * Renders its children only in the browser (after the component has mounted).
 *
 * Use this to wrap decorative things that depend on Math.random() (or anything
 * that differs between server and client). On the server and on the first
 * client render it renders nothing, so the HTML matches and React does not
 * throw a hydration error. The content then appears right after mount.
 */
export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
