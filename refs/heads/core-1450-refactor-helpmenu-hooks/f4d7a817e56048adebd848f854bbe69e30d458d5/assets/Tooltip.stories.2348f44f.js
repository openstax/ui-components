import{s as e,a as o,j as r}from"./index.95b52459.js";import{T as m}from"./Tooltip.9d47ac4c.js";import"./theme.5d25d926.js";import"./palette.15e4d008.js";import"./Button.module.eb7e88a2.js";import"./useFocusRing.module.fb8f4b1f.js";import"./context.module.51a90ac4.js";import"./useButton.module.27dc1257.js";import"./OverlayArrow.module.b5e5a9ea.js";import"./Info.e9cb7b8d.js";const n=e.div`
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
