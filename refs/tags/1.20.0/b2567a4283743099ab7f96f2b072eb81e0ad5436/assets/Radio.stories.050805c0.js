import{s as d,a as e,F as i,j as n}from"./index.863dff2c.js";import{R as o}from"./Radio.bf7eebf3.js";import"./theme.c3e714e8.js";import"./palette.5e342580.js";import"./Tooltip.368c59bf.js";import"./Button.module.40ea32b2.js";import"./useFocusRing.module.ad42d1ce.js";import"./context.module.ddc5fa6e.js";import"./useButton.module.06c56ab7.js";import"./OverlayArrow.module.b0d5f3a3.js";import"./Info.cdbd8bb5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
