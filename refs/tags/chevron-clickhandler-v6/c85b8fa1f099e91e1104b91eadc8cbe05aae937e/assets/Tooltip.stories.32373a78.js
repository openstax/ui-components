import{s as e,a as o,j as r}from"./index.44c7d20c.js";import{T as m}from"./Tooltip.41f71d9f.js";import"./theme.43e17cde.js";import"./palette.15e4d008.js";import"./Button.module.7935fe3a.js";import"./useFocusRing.module.577bc7fc.js";import"./useButton.module.d7eb475b.js";import"./OverlayArrow.module.36001093.js";import"./Info.94694414.js";const n=e.div`
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
