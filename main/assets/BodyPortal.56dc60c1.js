import{R as s,b as l}from"./index.5f747d11.js";const a=s.createContext(["root"]),p=(d,r)=>{const o=d.findIndex(t=>t===r);if(o===-1)return null;for(let t=o+1;t<d.length;t++){const c=d[t],n=c==="root"?document.body.querySelector("#root"):document.body.querySelector(`[data-portal-slot="${c}"]`);if(n)return n}return null},m=({children:d,className:r,role:o,slot:t,tagName:c})=>{var f;const n=(f=c==null?void 0:c.toUpperCase())!=null?f:"DIV",u=s.useRef(document.createElement(n));u.current.tagName!==n&&(u.current=document.createElement(n));const i=s.useContext(a);return s.useLayoutEffect(()=>{const e=u.current;return r&&e.classList.add(...r.split(" ")),o&&e.setAttribute("role",o),t&&(e.dataset.portalSlot=t),document.body.insertBefore(e,p(i,t)),()=>{e.parentNode&&e.parentNode.removeChild(e),t&&delete e.dataset.portalSlot,o&&e.removeAttribute("role"),r&&e.classList.remove(...r.split(" "))}},[i,r,o,t,n]),l.exports.createPortal(d,u.current)};export{m as B};
