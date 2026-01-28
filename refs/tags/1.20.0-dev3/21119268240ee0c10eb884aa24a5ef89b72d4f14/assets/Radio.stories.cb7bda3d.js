import{s as d,a as e,F as i,j as n}from"./index.c51a7bcd.js";import{R as o}from"./Radio.a048e01f.js";import"./theme.d091109d.js";import"./palette.5e342580.js";import"./Tooltip.fa7c140d.js";import"./Button.module.acbe1597.js";import"./useFocusRing.module.20828055.js";import"./context.module.3c7ea2c8.js";import"./useButton.module.6f1ed581.js";import"./OverlayArrow.module.f4336192.js";import"./Info.7c7f5f20.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
