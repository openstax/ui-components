import{s as n,a as e,F as d,j as o}from"./index-55856cba.js";import{R as i}from"./Radio-2b7286a4.js";import"./Tooltip-25947c87.js";import"./Button-922caad5.js";import"./useFocusRing-0918423a.js";import"./Hidden-8b1c8423.js";import"./useFocusable-10e16b79.js";import"./useButton-3076e061.js";import"./OverlayArrow-41a45a41.js";import"./context-8af3261b.js";import"./useControlledState-4984918e.js";import"./Info-75bcfc80.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
