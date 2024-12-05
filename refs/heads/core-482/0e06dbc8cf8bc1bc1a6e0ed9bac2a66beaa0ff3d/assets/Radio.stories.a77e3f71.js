import{s as d,a as e,F as i,j as n}from"./index.9b9905cd.js";import{R as o}from"./Radio.8faacbdc.js";import"./theme.39803acb.js";import"./palette.15e4d008.js";import"./Tooltip.893d8aeb.js";import"./Button.module.5f3f9ca9.js";import"./context.module.118ddca0.js";import"./focusSafely.module.5bd20537.js";import"./useFocusRing.module.63ac20cc.js";import"./OverlayArrow.module.909acb8f.js";import"./Info.d2bf49a0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
