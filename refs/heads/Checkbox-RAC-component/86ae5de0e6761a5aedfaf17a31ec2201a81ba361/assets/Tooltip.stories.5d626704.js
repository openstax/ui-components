import{s as e,a as o,j as r}from"./index.34fd5b17.js";import{T as m}from"./Tooltip.88cf3766.js";import"./theme.465cf21c.js";import"./palette.15e4d008.js";import"./Button.module.ce7a1eaf.js";import"./useFocusRing.module.5f106e3b.js";import"./context.module.ea639fc4.js";import"./useButton.module.aff74857.js";import"./OverlayArrow.module.89ba4bdd.js";import"./Info.78177529.js";const n=e.div`
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
