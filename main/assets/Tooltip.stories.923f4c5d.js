import{s as e,a as o,j as r}from"./index.4d4cf18c.js";import{T as m}from"./Tooltip.3bb526eb.js";import"./theme.8184f45d.js";import"./palette.15e4d008.js";import"./Button.module.94bbed62.js";import"./useFocusRing.module.802ab750.js";import"./context.module.c3a2cf17.js";import"./useButton.module.718b7797.js";import"./OverlayArrow.module.78f63e3b.js";import"./Info.ae22431f.js";const n=e.div`
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
