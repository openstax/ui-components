import{s as n,a as e,F as d,j as o}from"./index-276eb030.js";import{R as i}from"./Radio-00bf6fe4.js";import"./Tooltip-064c912b.js";import"./Button-cec2d8af.js";import"./useFocusRing-12bddd96.js";import"./Hidden-00d38efe.js";import"./useFocusable-6e3da687.js";import"./useButton-0c631fe8.js";import"./OverlayArrow-2defb1e3.js";import"./context-62ed0a59.js";import"./useControlledState-a9abb2ef.js";import"./Info-08099392.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
