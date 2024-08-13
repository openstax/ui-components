import{s as t,j as n,a as e,r as i}from"./index.029a6614.js";import{d as l,C as d,e as c}from"./Modal.7a5b98e8.js";import"./theme.96c068a4.js";import"./palette.15e4d008.js";import"./BodyPortal.f54d2791.js";const u=t(l)`
  background-color: rgba(0, 0, 0, 0.89);
`,m=t(d)`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 0;
  top: 0;
`,p=t(c)`
  color: #fff;
  padding: 4rem;
`,f=t.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,h=({className:o,onClose:r,children:a,show:s})=>s?n(p,{className:o,slot:"overlay",children:[n(f,{children:[e(m,{onClick:r,variant:"inverted-circle"}),a]}),e(u,{})]}):null,O=()=>{const[o,r]=i.exports.useState(!0);return e(h,{onClose:()=>r(!1),show:o,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{O as Default};
