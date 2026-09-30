import{s as n,j as e,F as d,a as o}from"./index-3e184d5b.js";import{R as i}from"./Radio-8804c521.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-bd4b23b7.js";import"./Button-57e31eed.js";import"./useFocusRing-7e1f9672.js";import"./Hidden-8b17cf0c.js";import"./useFocusable-1eebc208.js";import"./useButton-ad0916b4.js";import"./OverlayArrow-fb654c63.js";import"./context-ad297ebc.js";import"./Info-49b47473.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
