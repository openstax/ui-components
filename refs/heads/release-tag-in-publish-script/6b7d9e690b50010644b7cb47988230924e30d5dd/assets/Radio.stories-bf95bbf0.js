import{s as n,a as e,F as d,j as o}from"./index-c1069d6a.js";import{R as i}from"./Radio-67c4b179.js";import"./Tooltip-fb83eba4.js";import"./Button-a6f4b39c.js";import"./useFocusRing-a1c6d300.js";import"./Hidden-ccf3187d.js";import"./useFocusable-3e6d8a10.js";import"./useButton-802c917f.js";import"./OverlayArrow-53e75cf6.js";import"./context-7068b1ed.js";import"./useControlledState-589d7df5.js";import"./Info-8282fa66.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
