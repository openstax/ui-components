import{R as s,b as a}from"./index.da1c4242.js";const p=s.createContext(["root"]),x=(c,o)=>{const u=c.findIndex(t=>t===o);if(u===-1)return null;for(let t=u+1;t<c.length;t++){const r=c[t],n=r==="root"?document.body.querySelector("#root"):document.body.querySelector(`[data-portal-slot="${r}"]`);if(n)return n}return null},y=({children:c,className:o,ref:u,role:t,slot:r,tagName:n})=>{var l;const i=(l=n==null?void 0:n.toUpperCase())!=null?l:"DIV",d=s.useRef(document.createElement(i));d.current.tagName!==i&&(d.current=document.createElement(i)),u&&(u.current=d.current);const f=s.useContext(p);return s.useLayoutEffect(()=>{const e=d.current;return o&&e.classList.add(...o.split(" ")),t&&e.setAttribute("role",t),r&&(e.dataset.portalSlot=r),document.body.insertBefore(e,x(f,r)),()=>{e.parentNode&&e.parentNode.removeChild(e),r&&delete e.dataset.portalSlot,t&&e.removeAttribute("role"),o&&e.classList.remove(...o.split(" "))}},[f,o,t,r,i]),a.exports.createPortal(c,d.current)};export{y as B};