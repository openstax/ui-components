import{s as e,a as o,j as r}from"./index.1b1d803d.js";import{T as m}from"./Tooltip.784d457d.js";import"./theme.ee99e843.js";import"./palette.15e4d008.js";import"./Button.module.7b9a5193.js";import"./useFocusRing.module.665de249.js";import"./context.module.78e6cd0b.js";import"./useButton.module.1eff40bc.js";import"./OverlayArrow.module.006dc926.js";import"./Info.df642683.js";const n=e.div`
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
