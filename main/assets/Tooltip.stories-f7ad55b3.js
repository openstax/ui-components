import{s as i,j as o,a as r}from"./index-3aa08829.js";import{T as m}from"./Tooltip-c26c80a4.js";import"./Button-e802d63c.js";import"./useFocusRing-a467b081.js";import"./Hidden-aac42237.js";import"./useFocusable-3330bcd6.js";import"./useButton-0d750b61.js";import"./OverlayArrow-ec665fe4.js";import"./context-bd2d7cc5.js";import"./Info-1654d4c9.js";/* empty css              */const n=i.div`
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
