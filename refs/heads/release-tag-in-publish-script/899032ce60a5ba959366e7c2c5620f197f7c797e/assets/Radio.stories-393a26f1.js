import{s as n,a as e,F as d,j as o}from"./index-ea45e12e.js";import{R as i}from"./Radio-2ddc0286.js";import"./Tooltip-4f59e3c9.js";import"./Button-ae4eccaa.js";import"./useFocusRing-593f64fb.js";import"./Hidden-0e76cc2d.js";import"./useFocusable-b74d1f40.js";import"./useButton-e4bb3c5b.js";import"./OverlayArrow-4b70a72f.js";import"./context-65469a48.js";import"./useControlledState-210b279d.js";import"./Info-a200c5ee.js";/* empty css              */const r=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,a=t=>o(r,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(d,{children:a({name:"default"})}),j=()=>e(d,{children:a({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(r,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),y=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,y as Disabled,j as WithTooltip};
