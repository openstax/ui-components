import{s as n,a as e,F as d,j as o}from"./index-70c211b7.js";import{R as i}from"./Radio-ad873c29.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./Tooltip-76cb3648.js";import"./Button-2a235598.js";import"./useFocusRing-5f511fde.js";import"./Hidden-e52b25f1.js";import"./useFocusable-15d67dcb.js";import"./useButton-14e996ae.js";import"./OverlayArrow-a31de20b.js";import"./context-b29437f7.js";import"./Info-6eefb197.js";const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
