import{s as n,a as e,F as d,j as o}from"./index.b8eea321.js";import{R as i}from"./Radio.b9bd083e.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.b94a1236.js";import"./Button.module.03d0eba1.js";import"./useFocusRing.module.a60d8ca0.js";import"./context.module.528b13c4.js";import"./useButton.module.bf8db9c4.js";import"./OverlayArrow.module.afecfb70.js";import"./Info.a1d02467.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
