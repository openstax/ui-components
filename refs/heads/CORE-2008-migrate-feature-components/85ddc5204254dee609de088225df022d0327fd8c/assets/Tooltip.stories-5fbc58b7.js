import{s as e,j as o,a as r}from"./index-cdb7de5d.js";import{T as m}from"./Tooltip-853171ad.js";import"./Button-275975eb.js";import"./useFocusRing-21595013.js";import"./Hidden-f85155ee.js";import"./useButton-c87f4bbf.js";import"./OverlayArrow-f2cc27ef.js";import"./context-c81894c2.js";import"./Info-dffd567a.js";/* empty css              */const n=e.div`
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
