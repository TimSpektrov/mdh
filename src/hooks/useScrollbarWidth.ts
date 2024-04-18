export const useScrollbarWidth = () => {
  return typeof window !== 'undefined' && window.innerWidth - document.body.clientWidth;
};
