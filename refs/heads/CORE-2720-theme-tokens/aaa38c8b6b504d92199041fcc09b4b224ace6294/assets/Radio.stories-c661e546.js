import{s as n,j as e,F as d,a as o}from"./index-9c225ecd.js";import{R as i}from"./Radio-dcba96ea.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-d0245354.js";import"./Button-f9f52969.js";import"./useFocusRing-579a68a1.js";import"./Hidden-7bfe2219.js";import"./useButton-7917b971.js";import"./OverlayArrow-293eb679.js";import"./context-369cf91d.js";import"./Info-dd3b8484.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),R=()=>e(d,{children:a({name:"default"})}),g=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),j=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,j as Disabled,g as WithTooltip};
