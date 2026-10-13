import{s as i,a as o,j as e}from"./index-41ee68f3.js";import{T as m}from"./Tooltip-ff8530b5.js";import"./Button-be16b113.js";import"./useFocusRing-e91c9a87.js";import"./Hidden-60de14a2.js";import"./useFocusable-bcb58675.js";import"./useButton-85c8394b.js";import"./OverlayArrow-4a59dfc4.js";import"./context-277e74bc.js";import"./useControlledState-642a3e71.js";import"./Info-97717faa.js";/* empty css              */const n=i.div`
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
