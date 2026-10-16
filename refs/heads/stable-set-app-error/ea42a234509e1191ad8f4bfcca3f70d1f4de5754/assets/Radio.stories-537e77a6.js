import{s as n,a as e,F as d,j as o}from"./index-a6092bb0.js";import{R as i}from"./Radio-c289b718.js";import"./Tooltip-24898c0e.js";import"./Button-be39304f.js";import"./useFocusRing-5303498a.js";import"./Hidden-f432c6af.js";import"./useFocusable-2ed017a9.js";import"./useButton-5467055f.js";import"./OverlayArrow-889d0a02.js";import"./context-743f5eee.js";import"./useControlledState-904ec653.js";import"./Info-8a3b40ba.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
