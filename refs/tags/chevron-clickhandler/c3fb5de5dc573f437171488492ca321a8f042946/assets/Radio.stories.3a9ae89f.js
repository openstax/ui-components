import{s as d,a as e,F as i,j as n}from"./index.614bee7f.js";import{R as o}from"./Radio.48c530ea.js";import"./theme.aaf51a92.js";import"./palette.15e4d008.js";import"./Tooltip.f64405a1.js";import"./Button.module.fec8517f.js";import"./useFocusRing.module.4fb367cb.js";import"./useButton.module.8c2b137c.js";import"./OverlayArrow.module.482705ac.js";import"./Info.8f33b16c.js";import"./focusSafely.module.d1223178.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
