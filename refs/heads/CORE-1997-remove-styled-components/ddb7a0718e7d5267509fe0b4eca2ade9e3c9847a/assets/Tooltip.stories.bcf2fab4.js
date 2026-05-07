import{s as e,a as o,j as r}from"./index.7e3e94d2.js";import{T as m}from"./Tooltip.37be9b45.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.e63dbbbd.js";import"./useFocusRing.module.031ad62f.js";import"./context.module.957e320f.js";import"./useButton.module.e0af28ba.js";import"./OverlayArrow.module.537fccaf.js";import"./Info.af75b6a9.js";const n=e.div`
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
