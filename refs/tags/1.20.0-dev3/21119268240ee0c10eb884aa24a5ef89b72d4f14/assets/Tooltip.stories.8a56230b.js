import{s as e,a as o,j as r}from"./index.c51a7bcd.js";import{T as m}from"./Tooltip.fa7c140d.js";import"./theme.d091109d.js";import"./palette.5e342580.js";import"./Button.module.acbe1597.js";import"./useFocusRing.module.20828055.js";import"./context.module.3c7ea2c8.js";import"./useButton.module.6f1ed581.js";import"./OverlayArrow.module.f4336192.js";import"./Info.7c7f5f20.js";const n=e.div`
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
