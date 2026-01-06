import{s as e,a as o,j as r}from"./index.9f98f890.js";import{T as m}from"./Tooltip.961256e4.js";import"./theme.94c332cc.js";import"./palette.15e4d008.js";import"./Button.module.33575a69.js";import"./useFocusRing.module.d2849c4d.js";import"./context.module.a4391884.js";import"./useButton.module.ffefb0a4.js";import"./OverlayArrow.module.0b63e44b.js";import"./Info.a75896c8.js";const n=e.div`
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
