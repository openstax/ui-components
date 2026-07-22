import{s as e,a as o,j as r}from"./index.975a2b07.js";import{T as m}from"./Tooltip.c23d59aa.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.17d6e9b3.js";import"./useFocusRing.module.670b2cd3.js";import"./context.module.df5a7885.js";import"./useButton.module.6b09b7dd.js";import"./OverlayArrow.module.2c3d3ac2.js";import"./Info.7c0ed3cb.js";const n=e.div`
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
