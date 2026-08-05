import{s as e,a as o,j as r}from"./index.e05b5fad.js";import{T as m}from"./Tooltip.c7d95ab1.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.29cac287.js";import"./useFocusRing.module.fe219c18.js";import"./context.module.6f6eb83b.js";import"./useButton.module.77e6817d.js";import"./OverlayArrow.module.9b8d56a4.js";import"./Info.ca68d8ab.js";const n=e.div`
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
