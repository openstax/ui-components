import{R as i,b as a}from"./index.06bd856d.js";const p=i.createContext(["root"]),x=(d,r)=>{const o=d.findIndex(t=>t===r);if(o===-1)return null;for(let t=o+1;t<d.length;t++){const c=d[t],n=c==="root"?document.body.querySelector("#root"):document.body.querySelector(`[data-portal-slot="${c}"]`);if(n)return n}return null},m=i.forwardRef(({children:d,className:r,role:o,slot:t,tagName:c},n)=>{var l;const f=(l=c==null?void 0:c.toUpperCase())!=null?l:"DIV",u=i.useRef(document.createElement(f));u.current.tagName!==f&&(u.current=document.createElement(f)),n&&(typeof n=="function"?n(u.current):n.current=u.current);const s=i.useContext(p);return i.useLayoutEffect(()=>{const e=u.current;return r&&e.classList.add(...r.split(" ")),o&&e.setAttribute("role",o),t&&(e.dataset.portalSlot=t),document.body.insertBefore(e,x(s,t)),()=>{e.parentNode&&e.parentNode.removeChild(e),t&&delete e.dataset.portalSlot,o&&e.removeAttribute("role"),r&&e.classList.remove(...r.split(" "))}},[s,r,o,t,f]),a.exports.createPortal(d,u.current)});export{m as B};
