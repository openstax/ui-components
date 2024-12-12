import{s as e,a as o,j as r}from"./index.b9c09adb.js";import{T as m}from"./Tooltip.a210f850.js";import"./theme.c264535b.js";import"./palette.15e4d008.js";import"./Button.module.4da4e84c.js";import"./context.module.5c42d2ed.js";import"./useFocusRing.module.9e820a97.js";import"./OverlayArrow.module.a48c5059.js";import"./Info.6afe1d93.js";const n=e.div`
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
`,h=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Default};
