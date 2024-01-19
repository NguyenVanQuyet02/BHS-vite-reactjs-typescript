export function disableScroll(): void {
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}
// handle enable scroll
export function enableScroll(): void {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}

// export const handleShowMenuHome = handleShowMenuHome;
