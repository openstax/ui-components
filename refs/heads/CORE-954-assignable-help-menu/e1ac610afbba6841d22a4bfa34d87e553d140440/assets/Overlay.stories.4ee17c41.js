import{s as o,a as e,j as l,r as d}from"./index.82170460.js";import{d as c,C as m,e as p}from"./Modal.27cbc848.js";import{k as u}from"./Dialog.module.2ccae1e3.js";import"./theme.fb1fd088.js";import"./palette.15e4d008.js";import"./VisuallyHidden.module.7fc74035.js";import"./useFocusRing.module.4ab47471.js";import"./OverlayArrow.module.6ad572a2.js";import"./context.module.341bdf06.js";import"./Button.module.078e1228.js";import"./useButton.module.b8fa1bea.js";import"./Collection.module.a04540a5.js";import"./useTreeState.module.8b2e93a1.js";const f=o(c)`
  background-color: rgba(0, 0, 0, 0.89);
`,h=o(m)`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: 2em;
  top: 2em;
`,y=o(p)`
  color: #fff;
`,w=o(u)`
  position: relative;
  flex-grow: 1;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
`,v=({className:r,onClose:t,children:n,show:i,...s})=>i?e(f,{className:r,isDismissable:!0,onOpenChange:a=>!a&&t(),...s,children:l(y,{defaultOpen:!0,children:[e(h,{onClick:t,variant:"inverted-circle"}),e(w,{children:n})]})}):null,W=()=>{const[r,t]=d.exports.useState(!0);return e(v,{onClose:()=>t(!1),show:r,children:e("h1",{children:"Overlay"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{W as Default};
