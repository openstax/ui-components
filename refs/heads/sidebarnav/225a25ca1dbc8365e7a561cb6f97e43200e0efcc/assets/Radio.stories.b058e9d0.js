import{s as d,a as e,F as i,j as n}from"./index.afbf9881.js";import{R as o}from"./Radio.cd4f8540.js";import"./theme.3e6d8488.js";import"./palette.15e4d008.js";import"./Tooltip.e8255063.js";import"./Button.module.708aed2b.js";import"./context.module.ced93359.js";import"./useFocusRing.module.7eedd3b6.js";import"./OverlayArrow.module.4999cf36.js";import"./Info.45a89ec7.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};