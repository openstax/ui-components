import{s as e,a as o,j as r}from"./index.5e3a4e7f.js";import{T as m}from"./Tooltip.4953cb6a.js";import"./theme.72849a34.js";import"./palette.15e4d008.js";import"./OverlayArrow.module.80bb2373.js";import"./context.module.f7c9ee8b.js";import"./Hidden.module.47821102.js";import"./useButton.module.26d54303.js";import"./Info.bc159bd7.js";const n=e.div`
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
