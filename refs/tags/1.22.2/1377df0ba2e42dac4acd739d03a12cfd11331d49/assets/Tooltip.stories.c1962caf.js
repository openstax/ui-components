import{s as e,a as o,j as r}from"./index.1dc3da45.js";import{T as m}from"./Tooltip.f17d91c5.js";import"./theme.31839e04.js";import"./palette.5e342580.js";import"./Button.module.9a391ce3.js";import"./useFocusRing.module.9e095952.js";import"./context.module.da6cd598.js";import"./useButton.module.7119f5c1.js";import"./OverlayArrow.module.03258f59.js";import"./Info.a14ec213.js";const n=e.div`
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
