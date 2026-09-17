import{s as n,j as e,F as d,a as o}from"./index-dbc5fb1d.js";import{R as i}from"./Radio-6e3bd0b0.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-3ad89b1e.js";import"./Button-fc1fcd90.js";import"./useFocusRing-8475ecd7.js";import"./Hidden-3e61f465.js";import"./useButton-3f85f235.js";import"./OverlayArrow-c3b0254d.js";import"./context-9100049f.js";import"./Info-1629616b.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
