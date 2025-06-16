import{s as e,a as o,j as r}from"./index.c3f899c4.js";import{T as m}from"./Tooltip.66bf0b3c.js";import"./theme.e03456da.js";import"./palette.15e4d008.js";import"./Button.module.dd5fb9fe.js";import"./useFocusRing.module.dbb75c3b.js";import"./context.module.00a2ee0b.js";import"./useButton.module.b758843c.js";import"./OverlayArrow.module.8ec02937.js";import"./Info.bf56a621.js";const n=e.div`
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
