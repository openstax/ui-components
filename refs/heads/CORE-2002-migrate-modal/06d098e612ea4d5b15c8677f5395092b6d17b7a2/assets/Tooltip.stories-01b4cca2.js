import{s as e,j as o,a as r}from"./index-8d04637d.js";import{T as m}from"./Tooltip-4ccb34db.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Button-d225c368.js";import"./useFocusRing-8bdd71c1.js";import"./context-ed605f77.js";import"./useButton-3b6d818a.js";import"./OverlayArrow-9af89369.js";import"./Info-3c2f1591.js";const n=e.div`
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
