import{R as c,b as x}from"./index.2382cb6f.js";const y=c.createContext(["root"]),m=(a,r)=>{const o=a.findIndex(e=>e===r);if(o===-1)return null;for(let e=o+1;e<a.length;e++){const n=a[e],d=n==="root"?document.body.querySelector("#root"):document.body.querySelector(`[data-portal-slot="${n}"]`);if(d)return d}return null},b=c.forwardRef(({children:a,className:r,role:o,slot:e,tagName:n,id:d,...f},s)=>{var p;const u=(p=n==null?void 0:n.toUpperCase())!=null?p:"DIV",i=c.useRef(document.createElement(u));i.current.tagName!==u&&(i.current=document.createElement(u)),s&&(typeof s=="function"?s(i.current):s.current=i.current);const l=c.useContext(y);return c.useLayoutEffect(()=>{const t=i.current;return r&&t.classList.add(...r.split(" ")),d&&(t.id=d),f["data-testid"]&&(t.dataset.testid=f["data-testid"]),o&&t.setAttribute("role",o),e&&(t.dataset.portalSlot=e),document.body.insertBefore(t,m(l,e)),()=>{t.parentNode&&t.parentNode.removeChild(t),e&&delete t.dataset.portalSlot,o&&t.removeAttribute("role"),r&&t.classList.remove(...r.split(" ")),d&&(t.id=""),f["data-testid"]&&delete t.dataset.testid}},[l,r,o,e,u]),x.exports.createPortal(a,i.current)});export{b as B,y as a};
