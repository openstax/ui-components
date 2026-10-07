import{s as n,j as e,F as d,a as o}from"./index-db397794.js";import{R as i}from"./Radio-83857b34.js";import"./Tooltip-b1453611.js";import"./Button-a5679d83.js";import"./useFocusRing-336a9457.js";import"./Hidden-a435d37e.js";import"./useFocusable-02bf7fc2.js";import"./useButton-83c895e4.js";import"./OverlayArrow-ea316ebd.js";import"./context-dc898f16.js";import"./Info-1c0e6b10.js";import"./palette-97ed00c9.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
