export default function scrollFunction(): void {
  const scrollBtnElement: HTMLElement | null =
    document.getElementById('scrollBtn')

  if (scrollBtnElement) {
    if (
      document.body.scrollTop > 640 ||
      document.documentElement.scrollTop > 640
    ) {
      scrollBtnElement.style.display = 'flex'
    } else {
      scrollBtnElement.style.display = 'none'
    }
  }
}
