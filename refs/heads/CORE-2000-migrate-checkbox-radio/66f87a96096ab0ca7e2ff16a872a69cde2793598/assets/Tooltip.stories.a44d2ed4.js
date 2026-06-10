import{s as e,a as o,j as r}from"./index.1cf5dae3.js";import{T as m}from"./Tooltip.799a6ac6.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.fd578976.js";import"./useFocusRing.module.b2ed1de7.js";import"./context.module.39966e8e.js";import"./useButton.module.a52bf05b.js";import"./OverlayArrow.module.9bfd8cab.js";import"./Info.31752c11.js";const n=e.div`
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
