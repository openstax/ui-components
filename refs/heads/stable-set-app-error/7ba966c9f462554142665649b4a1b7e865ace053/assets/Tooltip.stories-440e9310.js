import{s as i,a as o,j as e}from"./index-99caaf5a.js";import{T as m}from"./Tooltip-fec95a56.js";import"./Button-9556a664.js";import"./useFocusRing-e933aadb.js";import"./Hidden-c2c7dd26.js";import"./useFocusable-c62aaa5a.js";import"./useButton-aed1ffa0.js";import"./OverlayArrow-f710f34c.js";import"./context-a156b1fd.js";import"./useControlledState-57330f41.js";import"./Info-8d96f02f.js";/* empty css              */const n=i.div`
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
