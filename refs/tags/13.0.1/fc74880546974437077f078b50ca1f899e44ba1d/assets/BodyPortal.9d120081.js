import{R as s,b as y}from"./index.89484feb.js";const m=s.createContext(["root"]),R=(i,r)=>{const o=i.findIndex(e=>e===r);if(o===-1)return null;for(let e=o+1;e<i.length;e++){const d=i[e],n=d==="root"?document.body.querySelector("#root"):document.body.querySelector(`[data-portal-slot="${d}"]`);if(n)return n}return null},B=s.forwardRef(({children:i,className:r,role:o,slot:e,tagName:d,id:n,...x},u)=>{var p;const f=(p=d==null?void 0:d.toUpperCase())!=null?p:"DIV",c=s.useRef(document.createElement(f));c.current.tagName!==f&&(c.current=document.createElement(f)),u&&(typeof u=="function"?u(c.current):u.current=c.current);const l=s.useContext(m),a=x["data-testid"];return s.useLayoutEffect(()=>{const t=c.current;return r&&t.classList.add(...r.split(" ")),n&&(t.id=n),a&&(t.dataset.testid=a),o&&t.setAttribute("role",o),e&&(t.dataset.portalSlot=e),document.body.insertBefore(t,R(l,e)),()=>{t.parentNode&&t.parentNode.removeChild(t),e&&delete t.dataset.portalSlot,o&&t.removeAttribute("role"),r&&t.classList.remove(...r.split(" ")),n&&(t.id=""),a&&delete t.dataset.testid}},[l,r,n,o,e,f,a]),y.exports.createPortal(i,c.current)});export{B,m as a};
