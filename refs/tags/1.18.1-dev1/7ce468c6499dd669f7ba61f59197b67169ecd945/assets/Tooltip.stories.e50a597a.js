import{s as e,a as o,j as r}from"./index.98fd84f0.js";import{T as m}from"./Tooltip.0731bfd7.js";import"./theme.e882f7e9.js";import"./palette.15e4d008.js";import"./Button.module.bb2cb322.js";import"./useFocusRing.module.8717aa62.js";import"./context.module.d45076f2.js";import"./useButton.module.25ba33c2.js";import"./OverlayArrow.module.59544863.js";import"./Info.63d6ea1e.js";const n=e.div`
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
