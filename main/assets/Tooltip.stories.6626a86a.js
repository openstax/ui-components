import{s as e,a as o,j as r}from"./index.dbff1511.js";import{T as m}from"./Tooltip.bfee7fbb.js";import"./theme.7a5a8684.js";import"./palette.15e4d008.js";import"./Button.module.f776f56a.js";import"./useFocusRing.module.adbe0f5c.js";import"./useButton.module.a9be1933.js";import"./OverlayArrow.module.effbeacc.js";import"./Info.bd7d3080.js";const n=e.div`
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
