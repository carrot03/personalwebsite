// ScrollSpy.js
import { useEffect } from "react";

const ScrollSpy = ({ sectionIds, onSectionChange }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          window.history.replaceState(null, "", `#${id}`);
          onSectionChange?.(id); // <-- update currentSection
        }
      },
      {
        threshold: 0.6,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, onSectionChange]);

  return null;
};

export default ScrollSpy;
