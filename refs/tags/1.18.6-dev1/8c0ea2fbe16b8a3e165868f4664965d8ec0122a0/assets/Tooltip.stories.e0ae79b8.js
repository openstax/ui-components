import{s as e,a as o,j as r}from"./index.2b29e577.js";import{T as m}from"./Tooltip.d9a26ece.js";import"./theme.50e01b74.js";import"./palette.15e4d008.js";import"./Button.module.1c66fcdc.js";import"./useFocusRing.module.a989acc4.js";import"./context.module.777c8a6f.js";import"./useButton.module.3445bb3e.js";import"./OverlayArrow.module.7334cdeb.js";import"./Info.d272f12d.js";const n=e.div`
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
