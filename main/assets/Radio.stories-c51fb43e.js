import{s as n,a as e,F as d,j as o}from"./index-24fed48b.js";import{R as i}from"./Radio-9c73050b.js";import"./Tooltip-305be229.js";import"./Button-fc0ed510.js";import"./useFocusRing-d1cc737a.js";import"./Hidden-40208b7c.js";import"./useFocusable-45d8938f.js";import"./useButton-33e27674.js";import"./OverlayArrow-7ad97c14.js";import"./context-07673126.js";import"./useControlledState-964fed5e.js";import"./Info-782e6171.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
