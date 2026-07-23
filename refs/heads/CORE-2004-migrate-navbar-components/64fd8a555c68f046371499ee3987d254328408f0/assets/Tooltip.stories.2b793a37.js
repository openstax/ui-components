import{s as e,a as o,j as r}from"./index.50e76544.js";import{T as m}from"./Tooltip.e410668e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Button.module.355a310d.js";import"./useFocusRing.module.fc01075e.js";import"./context.module.88ac0bfb.js";import"./useButton.module.c170d7cb.js";import"./OverlayArrow.module.d7fa9d7a.js";import"./Info.11ad1bdd.js";const n=e.div`
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
