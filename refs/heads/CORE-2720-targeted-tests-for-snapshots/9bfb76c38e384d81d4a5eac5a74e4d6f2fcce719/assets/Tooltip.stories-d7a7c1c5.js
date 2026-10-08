import{s as i,j as o,a as r}from"./index-7ae62d53.js";import{T as m}from"./Tooltip-b9a57d6b.js";import"./Button-a928b47a.js";import"./useFocusRing-bce9904c.js";import"./Hidden-85700279.js";import"./useFocusable-b917bc9b.js";import"./useButton-19e51b7f.js";import"./OverlayArrow-56eb920f.js";import"./context-5028cb43.js";import"./Info-cb749878.js";/* empty css              */const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,a=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
