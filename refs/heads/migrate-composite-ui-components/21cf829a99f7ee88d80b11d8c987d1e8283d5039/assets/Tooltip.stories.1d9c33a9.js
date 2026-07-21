import{s as e,a as o,j as r}from"./index.c39542ce.js";import{T as m}from"./Tooltip.cedf1086.js";import"./Button.module.fe43f4a9.js";import"./useFocusRing.module.4b3c8f38.js";import"./Hidden.module.e7a81615.js";import"./useButton.module.66943ff5.js";import"./OverlayArrow.module.e2e96f63.js";import"./context.module.af17b1db.js";import"./Info.a3e1e22c.js";import"./palette.5e342580.js";const n=e.div`
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
