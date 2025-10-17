import{s as e,a as o,j as r}from"./index.03d519e8.js";import{T as m}from"./Tooltip.b9727ab2.js";import"./theme.26768929.js";import"./palette.15e4d008.js";import"./Button.module.f7c982d8.js";import"./useFocusRing.module.9993e2ac.js";import"./context.module.65e0d974.js";import"./useButton.module.4f744438.js";import"./OverlayArrow.module.185b538e.js";import"./Info.32d55c0a.js";const n=e.div`
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
