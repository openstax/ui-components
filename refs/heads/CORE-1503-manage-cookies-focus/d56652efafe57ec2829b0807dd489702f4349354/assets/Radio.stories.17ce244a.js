import{s as d,a as e,F as i,j as n}from"./index.215f4b9b.js";import{R as o}from"./Radio.160ec47a.js";import"./theme.e0760cd3.js";import"./palette.5e342580.js";import"./Tooltip.3c2410cd.js";import"./Button.module.794d297c.js";import"./useFocusRing.module.eed8ff9e.js";import"./context.module.3310220a.js";import"./useButton.module.257c7807.js";import"./OverlayArrow.module.669c62f1.js";import"./Info.7a9093ff.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
