import{s as e,a as o,j as r}from"./index.81d014d3.js";import{T as m}from"./Tooltip.06f0ccd4.js";import"./theme.58ffc3b2.js";import"./palette.15e4d008.js";import"./Button.module.c2fdf0a4.js";import"./context.module.7e12a5da.js";import"./focusSafely.module.e3f23ed5.js";import"./useFocusRing.module.4b46cd86.js";import"./OverlayArrow.module.c54fee80.js";import"./Info.c30ef4e4.js";const n=e.div`
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