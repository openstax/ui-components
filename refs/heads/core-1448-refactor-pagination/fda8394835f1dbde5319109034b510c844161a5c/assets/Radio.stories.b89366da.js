import{s as n,a as e,F as d,j as o}from"./index.449abcf7.js";import{R as i}from"./Radio.d40f4a65.js";import"./theme.bd6e9303.js";import"./palette.5e342580.js";import"./Tooltip.b9127384.js";import"./Button.module.8497cf4e.js";import"./useFocusRing.module.b51fd7b5.js";import"./context.module.7d7b3b8f.js";import"./useButton.module.fcc2e174.js";import"./OverlayArrow.module.b2c44564.js";import"./Info.9245253e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
