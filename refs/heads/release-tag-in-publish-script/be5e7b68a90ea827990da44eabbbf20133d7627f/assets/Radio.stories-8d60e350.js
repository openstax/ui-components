import{s as n,a as e,F as d,j as o}from"./index-c00ac1d3.js";import{R as i}from"./Radio-2ccdcf09.js";import"./Tooltip-e2e8099c.js";import"./Button-e9c818ff.js";import"./useFocusRing-65faf15d.js";import"./Hidden-60aa5a92.js";import"./useFocusable-9653b284.js";import"./useButton-58bf5c9e.js";import"./OverlayArrow-f167fdc9.js";import"./context-785c469e.js";import"./useControlledState-ce1a5637.js";import"./Info-2debd2c1.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
