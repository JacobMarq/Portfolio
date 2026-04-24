import { useEffect, useRef, useCallback } from 'react';

export function useScrollSpy(ids, threshold = 0.5, onSectionChange) {
  const isManualScrolling = useRef(false);
  const currentActiveId = useRef("");

  // Wrap this in useCallback so it's stable if passed to memoized components
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    isManualScrolling.current = true;
    currentActiveId.current = id;
    
    // Update URL immediately for the target
    if (id === "home") {
      window.history.replaceState(null, "", "");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.history.replaceState(null, "", `#${id}`);
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if (onSectionChange) {
      onSectionChange(id);
    }

    // Unlock after scroll finishes
    const handleScrollEnd = () => {
      isManualScrolling.current = false;
      window.removeEventListener('scrollend', handleScrollEnd);
    };
    window.addEventListener('scrollend', handleScrollEnd);
    
    // Fallback for older browsers (Safari < 17.4)
    setTimeout(() => { isManualScrolling.current = false; }, 1000);
  }, [onSectionChange]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;

        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          const newId = visibleSection.target.id;

          if (newId !== currentActiveId.current) {
            currentActiveId.current = newId;
            if (newId === 'home') {
              window.history.replaceState(null, "", " ");
            } else {
              window.history.replaceState(null, "", `#${newId}`);
            }

            if (onSectionChange) {
              onSectionChange(newId);
            }
          }
        }
      },
      { threshold }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, threshold, onSectionChange]);

  return { scrollToSection };
}
