import{s as e,a as o,j as r}from"./index.14a97abd.js";import{T as m}from"./Tooltip.dd387933.js";import"./theme.bc278bd7.js";import"./palette.15e4d008.js";import"./Button.module.31e3f809.js";import"./useFocusRing.module.0130d255.js";import"./context.module.fcf81413.js";import"./useButton.module.76d86e94.js";import"./OverlayArrow.module.1a7cf3fe.js";import"./Info.9485b00f.js";const n=e.div`
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
