import{s as i,j as o,a as r}from"./index-3e5a2201.js";import{T as m}from"./Tooltip-ee7b4559.js";import"./Button-1b1b5b25.js";import"./useFocusRing-a1a54916.js";import"./Hidden-cbc6510c.js";import"./useFocusable-33170651.js";import"./useButton-b9b913ac.js";import"./OverlayArrow-4c76af55.js";import"./context-b921e199.js";import"./Info-1736273b.js";/* empty css              */const n=i.div`
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
