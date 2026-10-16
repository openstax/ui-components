import{s as i,a as o,j as e}from"./index-a6092bb0.js";import{T as m}from"./Tooltip-24898c0e.js";import"./Button-be39304f.js";import"./useFocusRing-5303498a.js";import"./Hidden-f432c6af.js";import"./useFocusable-2ed017a9.js";import"./useButton-5467055f.js";import"./OverlayArrow-889d0a02.js";import"./context-743f5eee.js";import"./useControlledState-904ec653.js";import"./Info-8a3b40ba.js";/* empty css              */const n=i.div`
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
