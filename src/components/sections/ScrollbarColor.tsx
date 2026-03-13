// "use client";
// import { useEffect } from "react";

// export default function ScrollbarColor() {
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.id = "scrollbar-dynamic";
//     document.head.appendChild(style);

//     const update = () => {
//       const scrollTop = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const progress = scrollTop / maxScroll;

//       let color;
//       if (scrollTop === 0) {
//         color = "#0000FE";
//       } else if (progress < 0.85) {
//         color = "#018001";
//       } else {
//         color = "#FE0000";
//       }

//       style.textContent = `
//         ::-webkit-scrollbar { width: 6px; }
//         ::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 999px; }
//         ::-webkit-scrollbar-thumb { background: ${color}; border-radius: 999px; transition: background 0.4s ease; }
//         ::-webkit-scrollbar-thumb:hover { background: ${color}; border-radius: 999px; }
//       `;
//     };

//     update();
//     window.addEventListener("scroll", update, { passive: true });
//     return () => window.removeEventListener("scroll", update);
//   }, []);

//   return null;
// }
