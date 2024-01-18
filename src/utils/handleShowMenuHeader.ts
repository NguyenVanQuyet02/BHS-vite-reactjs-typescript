import { useState } from 'react'

// // handle show menu into header
// export default function handleShowMenuHeader(): void {
//   const menu = document.getElementById('menu')
//   menu?.classList.toggle('active')
//   if (menu?.classList.contains('active')) {
//     disableScroll()
//   } else {
//     enableScroll()
//   }
// }

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
