export const getFilterStyles = (isActive: boolean) => {
  return isActive
    ? 'hover:bg-hover-green bg-green text-white md:transition-colors'
    : 'bg-white text-black hover:bg-off-white';
};
