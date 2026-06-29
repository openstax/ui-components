import{s as n,a as e,F as d,j as o}from"./index.c2f7aee3.js";import{R as i}from"./Radio.c5902d69.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.efc6502f.js";import"./Button.module.284a91c9.js";import"./useFocusRing.module.2e0da007.js";import"./context.module.43c42159.js";import"./useButton.module.89bb1486.js";import"./OverlayArrow.module.ca2805b5.js";import"./Info.5be620aa.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
