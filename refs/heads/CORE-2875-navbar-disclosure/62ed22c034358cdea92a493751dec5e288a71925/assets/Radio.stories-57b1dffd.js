import{s as n,j as e,F as d,a as o}from"./index-02957cfe.js";import{R as i}from"./Radio-4764bf2c.js";import"./Tooltip-3f995a7d.js";import"./Button-6bc2bb4d.js";import"./useFocusRing-55a841ff.js";import"./Hidden-744eece3.js";import"./useFocusable-daf15a25.js";import"./useButton-25f3936b.js";import"./OverlayArrow-dc508943.js";import"./context-bd9be395.js";import"./useControlledState-f6ab2c25.js";import"./Info-19328e4e.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
