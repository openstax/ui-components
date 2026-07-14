import{s as i,a as o,j as r}from"./index.4e69b304.js";import{T as m}from"./Tooltip.15ace4ed.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.1f9a78c6.js";import"./useFocusRing.module.89e2b32a.js";import"./context.module.2bca1765.js";import"./useButton.module.87a492c9.js";import"./OverlayArrow.module.245c8e1b.js";import"./Info.04ea9e7c.js";import"./VisuallyHidden.module.55906f73.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
