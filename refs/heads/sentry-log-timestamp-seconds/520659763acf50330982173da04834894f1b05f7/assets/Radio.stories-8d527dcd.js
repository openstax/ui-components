import{s as n,a as e,F as d,j as o}from"./index-dcb7161c.js";import{R as i}from"./Radio-8d852676.js";import"./Tooltip-2112353b.js";import"./Button-f41097e4.js";import"./useFocusRing-c5cc554f.js";import"./Hidden-78ed1664.js";import"./useFocusable-9dc6fe45.js";import"./useButton-b62555d9.js";import"./OverlayArrow-b4528707.js";import"./context-5f7d93fb.js";import"./useControlledState-9848b075.js";import"./Info-408d1551.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
