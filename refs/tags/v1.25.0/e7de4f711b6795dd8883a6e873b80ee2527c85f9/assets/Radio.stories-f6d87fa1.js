import{s as n,a as e,F as d,j as o}from"./index-89873958.js";import{R as i}from"./Radio-587d847b.js";import"./Tooltip-a3443259.js";import"./Button-e15209cf.js";import"./useFocusRing-dd4f4c53.js";import"./Hidden-c2042bab.js";import"./useFocusable-cc1c2ada.js";import"./useButton-5e198b3c.js";import"./OverlayArrow-cc784869.js";import"./context-81b3b9b4.js";import"./useControlledState-0fd02b60.js";import"./Info-5702e45c.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
