import{s as e,a as o,j as r}from"./index.d8fdcec6.js";import{T as m}from"./Tooltip.08399ccc.js";import"./theme.7b7c4c4a.js";import"./palette.15e4d008.js";import"./Button.module.1faf95b1.js";import"./useFocusRing.module.08ff59c3.js";import"./context.module.058314f3.js";import"./useButton.module.7843c65c.js";import"./OverlayArrow.module.fd4c77ed.js";import"./Info.ba949952.js";const n=e.div`
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
