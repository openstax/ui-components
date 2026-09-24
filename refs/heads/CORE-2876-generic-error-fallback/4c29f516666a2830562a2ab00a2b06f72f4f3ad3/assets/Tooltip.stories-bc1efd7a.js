import{s as e,j as o,a as r}from"./index-baa1678f.js";import{T as m}from"./Tooltip-ac0bc5ed.js";import"./Button-acc6425b.js";import"./useFocusRing-89dbf7cd.js";import"./Hidden-96973bd1.js";import"./useButton-32f43ea5.js";import"./OverlayArrow-f1c721ce.js";import"./context-bf11ea20.js";import"./Info-b8c8ebbf.js";import"./palette-97ed00c9.js";const n=e.div`
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
