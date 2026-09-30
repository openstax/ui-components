import{s as n,j as e,F as d,a as o}from"./index-f2941dde.js";import{R as i}from"./Radio-89895fe0.js";import"./theme-534347e8.js";import"./palette-97ed00c9.js";import"./Tooltip-6e4177f0.js";import"./Button-fd639e1f.js";import"./useFocusRing-eede776b.js";import"./Hidden-b6d91f75.js";import"./useFocusable-2876fc75.js";import"./useButton-61f48e81.js";import"./OverlayArrow-995b8831.js";import"./context-60487b4f.js";import"./Info-41b62de9.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
