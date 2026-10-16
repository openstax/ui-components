import{s as i,a as o,j as e}from"./index-d1b9dac7.js";import{T as m}from"./Tooltip-bc455ba2.js";import"./Button-1848629c.js";import"./useFocusRing-8c71827a.js";import"./Hidden-96a19546.js";import"./useFocusable-7f7846c8.js";import"./useButton-c366fb83.js";import"./OverlayArrow-fea02f5c.js";import"./context-0ef3b196.js";import"./useControlledState-be069e43.js";import"./Info-ee4f1d7b.js";/* empty css              */const n=i.div`
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
`,y=()=>o(n,{children:["right","top","bottom"].map((t,r)=>e(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},r))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
