import{r as t,R as n,b as c}from"./index.f8d78af2.js";import{p as d}from"./context.module.98b3790d.js";if(typeof HTMLTemplateElement<"u"){const e=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild").get;Object.defineProperty(HTMLTemplateElement.prototype,"firstChild",{configurable:!0,enumerable:!0,get:function(){return this.dataset.reactAriaHidden?this.content.firstChild:e.call(this)}})}const i=t.exports.createContext(!1),l=typeof DocumentFragment<"u"?new DocumentFragment:null;function f(e){let r=t.exports.useContext(i),o=d();if(r)return n.createElement(n.Fragment,null,e.children);let a=n.createElement(i.Provider,{value:!0},e.children);return o?n.createElement("template",{"data-react-aria-hidden":!0},a):c.exports.createPortal(a,l)}function m(e){let r=(o,a)=>t.exports.useContext(i)?null:e(o,a);return r.displayName=e.displayName||e.name,t.exports.forwardRef(r)}function b(){return t.exports.useContext(i)}export{m as $,f as a,b};
