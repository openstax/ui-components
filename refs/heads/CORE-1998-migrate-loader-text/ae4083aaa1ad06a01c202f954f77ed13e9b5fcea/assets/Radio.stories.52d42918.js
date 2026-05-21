import{s as n,a as e,F as d,j as o}from"./index.1248aae2.js";import{R as i}from"./Radio.8fe45c36.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.4cb106ac.js";import"./Button.module.34c426f4.js";import"./useFocusRing.module.fdc61ce5.js";import"./context.module.4531dced.js";import"./useButton.module.d26e7145.js";import"./OverlayArrow.module.d0371c8d.js";import"./Info.8e7c8e7b.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
