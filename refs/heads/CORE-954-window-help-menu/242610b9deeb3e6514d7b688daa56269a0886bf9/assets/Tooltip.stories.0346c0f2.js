import{s as e,a as o,j as r}from"./index.a3efb7d3.js";import{T as m}from"./Tooltip.aafd8192.js";import"./theme.651ccb6e.js";import"./palette.15e4d008.js";import"./Button.module.bb38a1eb.js";import"./useFocusRing.module.7877cdca.js";import"./context.module.efdc0192.js";import"./useButton.module.6b63b0df.js";import"./OverlayArrow.module.7fa64f51.js";import"./Info.e10b5d22.js";const n=e.div`
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
