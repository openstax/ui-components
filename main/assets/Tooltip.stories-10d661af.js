import{s as i,a as o,j as e}from"./index-24fed48b.js";import{T as m}from"./Tooltip-305be229.js";import"./Button-fc0ed510.js";import"./useFocusRing-d1cc737a.js";import"./Hidden-40208b7c.js";import"./useFocusable-45d8938f.js";import"./useButton-33e27674.js";import"./OverlayArrow-7ad97c14.js";import"./context-07673126.js";import"./useControlledState-964fed5e.js";import"./Info-782e6171.js";/* empty css              */const n=i.div`
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
