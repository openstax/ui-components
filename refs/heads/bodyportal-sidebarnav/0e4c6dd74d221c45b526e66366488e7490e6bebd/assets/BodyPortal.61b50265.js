import{R as a,b as m}from"./index.b1c0c990.js";const y=a.createContext(["root"]),b=(i,r)=>{const o=i.findIndex(e=>e===r);if(o===-1)return null;for(let e=o+1;e<i.length;e++){const n=i[e],d=n==="root"?document.body.querySelector("#root"):document.body.querySelector(`[data-portal-slot="${n}"]`);if(d)return d}return null},C=({children:i,className:r,role:o,slot:e,tagName:n,externalRef:d,id:u,...f})=>{var p;const s=(p=n==null?void 0:n.toUpperCase())!=null?p:"DIV",c=d!=null?d:a.useRef(document.createElement(s));c.current.tagName!==s&&(c.current=document.createElement(s));const l=a.useContext(y);return a.useLayoutEffect(()=>{const t=c.current;return r&&t.classList.add(...r.split(" ")),u&&(t.id=u),o&&t.setAttribute("role",o),e&&(t.dataset.portalSlot=e),f["data-testid"]&&(t.dataset.testid=f["data-testid"]),document.body.insertBefore(t,b(l,e)),()=>{t.parentNode&&t.parentNode.removeChild(t),e&&delete t.dataset.portalSlot,o&&t.removeAttribute("role"),r&&t.classList.remove(...r.split(" ")),u&&(t.id=""),f["data-testid"]&&delete t.dataset.testid}},[l,r,o,e,s]),m.exports.createPortal(i,c.current)};export{C as B,y as a};
