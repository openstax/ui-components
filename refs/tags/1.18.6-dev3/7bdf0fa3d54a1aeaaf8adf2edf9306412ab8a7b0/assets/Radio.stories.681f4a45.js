import{s as d,a as e,F as i,j as n}from"./index.924fd51e.js";import{R as o}from"./Radio.dcf05457.js";import"./theme.848ff9a2.js";import"./palette.15e4d008.js";import"./Tooltip.257d0d7a.js";import"./Button.module.06a19140.js";import"./useFocusRing.module.15917e67.js";import"./context.module.ae7b0bdf.js";import"./useButton.module.4cf00a89.js";import"./OverlayArrow.module.be0acdb4.js";import"./Info.38c3668f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
