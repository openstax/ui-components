import{s as d,a as e,F as i,j as n}from"./index.1d4fd22b.js";import{R as o}from"./Radio.4c50e0ce.js";import"./theme.f2f944c8.js";import"./palette.15e4d008.js";import"./Tooltip.fce1def0.js";import"./Button.module.96ab0b3b.js";import"./useFocusRing.module.65829788.js";import"./context.module.6adf29b8.js";import"./useButton.module.6442461d.js";import"./OverlayArrow.module.8bf8c2fa.js";import"./Info.e6d12fdb.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
