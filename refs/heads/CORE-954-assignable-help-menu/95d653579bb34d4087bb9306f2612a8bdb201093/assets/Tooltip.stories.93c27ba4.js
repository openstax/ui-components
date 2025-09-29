import{s as e,a as o,j as r}from"./index.c72783d2.js";import{T as m}from"./Tooltip.345b6caf.js";import"./theme.09220cf1.js";import"./palette.15e4d008.js";import"./Button.module.4666d548.js";import"./useFocusRing.module.fb6cdfe4.js";import"./context.module.5c49e7c5.js";import"./useButton.module.d31fa088.js";import"./OverlayArrow.module.669eb4a2.js";import"./Info.26b59531.js";const n=e.div`
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
