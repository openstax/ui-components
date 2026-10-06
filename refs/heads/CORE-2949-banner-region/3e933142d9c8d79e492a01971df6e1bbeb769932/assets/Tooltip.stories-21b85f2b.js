import{s as i,a as o,j as r}from"./index-4d6c4f8c.js";import{T as m}from"./Tooltip-55d59612.js";import"./Button-ca1f2bd9.js";import"./useFocusRing-a7cd3a27.js";import"./Hidden-43175525.js";import"./useFocusable-269aa80a.js";import"./useButton-4d486feb.js";import"./OverlayArrow-81b742d8.js";import"./context-eb5769ec.js";import"./Info-86e7d52a.js";import"./palette-97ed00c9.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
