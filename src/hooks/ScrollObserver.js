import { useEffect, useRef, useCallback } from 'react';

export function useScrollSpy(ids, onSectionChange) {
  const isManualScrolling = useRef(false);
  const currentActiveId = useRef("");
  const observerRef = useRef(null);

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

    if (onSectionChange) onSectionChange(id);

    // Unlock after scroll finishes
    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isManualScrolling.current = false;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    // fallback unlock
    setTimeout(() => {
      isManualScrolling.current = false;
    }, 500);
  }, [onSectionChange]);


  // NEW CODENOEEWENBAOIFNBW

  const createObserver = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;

        const visibleSection = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

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
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-30% 0px -40% 0px"
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
  }, [ids, onSectionChange]);

  // initialize
  useEffect(() => {
    createObserver();
    return () => observerRef.current?.disconnect();
  }, []);

  // expose refresh (for dynamic layout)
  const refreshObserver = useCallback(() => {
    createObserver();
  }, [createObserver]);

  return { scrollToSection, refreshObserver };
}
