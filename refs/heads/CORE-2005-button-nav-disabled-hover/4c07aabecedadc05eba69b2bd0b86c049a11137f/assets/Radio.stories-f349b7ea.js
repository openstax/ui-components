import{s as n,a as e,F as d,j as o}from"./index-866acec5.js";import{R as i}from"./Radio-a63830cc.js";import"./Tooltip-d5b332fd.js";import"./Button-e19a0e92.js";import"./useFocusRing-a1802268.js";import"./Hidden-4ca88798.js";import"./useFocusable-96b82bf9.js";import"./useButton-1e5d3e09.js";import"./OverlayArrow-f1871e77.js";import"./context-2558574f.js";import"./useControlledState-63547e82.js";import"./Info-504cdcf8.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
