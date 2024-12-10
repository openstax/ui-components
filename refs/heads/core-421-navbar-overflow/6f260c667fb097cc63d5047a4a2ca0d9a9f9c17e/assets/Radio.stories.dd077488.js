import{s as d,a as e,F as i,j as n}from"./index.85bc48f1.js";import{R as o}from"./Radio.9f97495b.js";import"./theme.571e65aa.js";import"./palette.15e4d008.js";import"./Tooltip.bb51119c.js";import"./Button.module.a0d248dc.js";import"./context.module.055d7357.js";import"./focusSafely.module.08fcbe1c.js";import"./useFocusRing.module.b63bd1b2.js";import"./OverlayArrow.module.213da7fe.js";import"./Info.922ae186.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
