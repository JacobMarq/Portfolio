import React, { createContext, useContext, useMemo, useState } from 'react';
import { useScrollSpy } from '../hooks/ScrollObserver';

const ScrollContext = createContext();

export const ScrollProvider = ({ children, sectionIds }) => {
  const [activeId, setActiveId] = useState("");
  const { scrollToSection } = useScrollSpy(sectionIds, 0.5, setActiveId);

  const memoizedValue = useMemo(() => ({
    sectionIds,
    activeId,
    scrollToSection
  }), [sectionIds, activeId, scrollToSection]);

  return (
    <ScrollContext.Provider value={memoizedValue}>
      {children}
    </ScrollContext.Provider>
  );
};

// helper to avoid importing 'useContext' and 'ScrollContext' per component.
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};