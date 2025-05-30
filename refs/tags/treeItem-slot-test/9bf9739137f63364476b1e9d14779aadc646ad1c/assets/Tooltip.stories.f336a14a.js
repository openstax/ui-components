import{s as e,a as o,j as r}from"./index.4b08728c.js";import{T as m}from"./Tooltip.0bdff49d.js";import"./theme.df929a98.js";import"./palette.15e4d008.js";import"./Button.module.a8d503ab.js";import"./useFocusRing.module.670a7b33.js";import"./useButton.module.be6cd92c.js";import"./OverlayArrow.module.0d92ead0.js";import"./Info.31779c26.js";const n=e.div`
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
