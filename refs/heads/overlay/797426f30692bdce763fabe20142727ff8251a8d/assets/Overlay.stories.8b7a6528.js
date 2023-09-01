import{s as o,j as a,a as t,r as l}from"./index.0334e385.js";import{d,C as c,e as m}from"./Modal.ec3dedee.js";import"./theme.6d0039b6.js";import"./palette.15e4d008.js";const e="2rem",u=o(d)`
  background-color: rgba(0, 0, 0, 0.89);
  top: ${e};
  bottom: ${e};
  left: ${e};
  right: ${e};
  height: calc(100% - (${e} * 2));
  width: calc(100% - (${e} * 2));
`,h=o(c)`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 0;
  top: 0;
`,p=o(m)`
  color: #fff;
  padding: 4rem;
`,f=o.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,y=({className:r,onModalClose:n,children:s,show:i})=>i?a(p,{className:r,children:[a(f,{children:[t(h,{onClick:n,variant:"inverted-circle"}),s]}),t(u,{})]}):null,M=()=>{const[r,n]=l.exports.useState(!0);return t(y,{onModalClose:()=>n(!1),show:r,children:t("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{M as Default};
