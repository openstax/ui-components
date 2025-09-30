import{s as e,a as o,j as r}from"./index.5640775c.js";import{T as m}from"./Tooltip.1838c716.js";import"./theme.5f041dd9.js";import"./palette.15e4d008.js";import"./Button.module.42472b05.js";import"./useFocusRing.module.819f4c7d.js";import"./context.module.ec364ef6.js";import"./useButton.module.4489f135.js";import"./OverlayArrow.module.6d63019d.js";import"./Info.3447dbea.js";const n=e.div`
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
