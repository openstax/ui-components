import{s as n,a as e,F as d,j as o}from"./index.cb2c8139.js";import{R as i}from"./Radio.a847c2bf.js";import"./theme.00f75872.js";import"./palette.5e342580.js";import"./Tooltip.7f76b148.js";import"./Button.module.fdae7f86.js";import"./useFocusRing.module.09b5f3f5.js";import"./context.module.f94a98bd.js";import"./useButton.module.7b65df7b.js";import"./OverlayArrow.module.082241a9.js";import"./Info.d5247322.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
