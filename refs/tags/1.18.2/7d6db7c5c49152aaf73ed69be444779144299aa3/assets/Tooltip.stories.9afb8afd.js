import{s as e,a as o,j as r}from"./index.87822e44.js";import{T as m}from"./Tooltip.f1ad2854.js";import"./theme.32c65e48.js";import"./palette.15e4d008.js";import"./Button.module.00e026d7.js";import"./useFocusRing.module.2f07d33c.js";import"./context.module.27ddeb9d.js";import"./useButton.module.9aaf5e8e.js";import"./OverlayArrow.module.6a695bdb.js";import"./Info.731689d2.js";const n=e.div`
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
