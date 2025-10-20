import{s as e,a as o,j as r}from"./index.dccd3f26.js";import{T as m}from"./Tooltip.ca392137.js";import"./theme.8adfa14c.js";import"./palette.15e4d008.js";import"./Button.module.3a5a2b56.js";import"./useFocusRing.module.75b16bd8.js";import"./context.module.9e75aead.js";import"./useButton.module.51f7691a.js";import"./OverlayArrow.module.0b8d6312.js";import"./Info.810cc9b6.js";const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
