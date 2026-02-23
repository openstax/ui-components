import{s as e,a as o,j as r}from"./index.ec4976af.js";import{T as m}from"./Tooltip.3b2ebda6.js";import"./theme.8fcd051d.js";import"./palette.5e342580.js";import"./Button.module.734cfed6.js";import"./useFocusRing.module.84a5b5bd.js";import"./context.module.50f863a4.js";import"./useButton.module.7278c0c5.js";import"./OverlayArrow.module.f4af96c7.js";import"./Info.8b0a9e20.js";const n=e.div`
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
