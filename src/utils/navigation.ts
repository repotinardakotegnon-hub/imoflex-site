export function scrollToSection(id: string) {
  // Give it a tiny delay to ensure the DOM is ready if we just navigated
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
}
