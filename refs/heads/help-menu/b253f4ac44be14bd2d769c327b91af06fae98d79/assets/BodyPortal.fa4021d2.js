import{R as c,b as y}from"./index.2eec5f8b.js";const b=c.createContext(["root"]),R=(s,r)=>{const o=s.findIndex(e=>e===r);if(o===-1)return null;for(let e=o+1;e<s.length;e++){const i=s[e],n=i==="root"?document.body.querySelector("#root"):document.body.querySelector(`[data-portal-slot="${i}"]`);if(n)return n}return null},C=c.forwardRef(({children:s,className:r,role:o,slot:e,tagName:i,id:n,ariaLabel:u,...x},f)=>{var m;const a=(m=i==null?void 0:i.toUpperCase())!=null?m:"DIV",d=c.useRef(document.createElement(a));d.current.tagName!==a&&(d.current=document.createElement(a)),f&&(typeof f=="function"?f(d.current):f.current=d.current);const p=c.useContext(b),l=x["data-testid"];return c.useLayoutEffect(()=>{const t=d.current;return r&&t.classList.add(...r.split(" ")),n&&(t.id=n),l&&(t.dataset.testid=l),o&&t.setAttribute("role",o),e&&(t.dataset.portalSlot=e),u&&t.setAttribute("aria-label",u),document.body.insertBefore(t,R(p,e)),()=>{t.parentNode&&t.parentNode.removeChild(t),e&&delete t.dataset.portalSlot,o&&t.removeAttribute("role"),u&&t.removeAttribute("aria-label"),r&&t.classList.remove(...r.split(" ")),n&&(t.id=""),l&&delete t.dataset.testid}},[p,r,n,o,e,u,a,l]),y.exports.createPortal(s,d.current)});export{b as B,C as a};
