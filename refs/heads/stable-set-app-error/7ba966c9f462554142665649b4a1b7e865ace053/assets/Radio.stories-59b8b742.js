import{s as n,a as e,F as d,j as o}from"./index-99caaf5a.js";import{R as i}from"./Radio-4fc16ef3.js";import"./Tooltip-fec95a56.js";import"./Button-9556a664.js";import"./useFocusRing-e933aadb.js";import"./Hidden-c2c7dd26.js";import"./useFocusable-c62aaa5a.js";import"./useButton-aed1ffa0.js";import"./OverlayArrow-f710f34c.js";import"./context-a156b1fd.js";import"./useControlledState-57330f41.js";import"./Info-8d96f02f.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
