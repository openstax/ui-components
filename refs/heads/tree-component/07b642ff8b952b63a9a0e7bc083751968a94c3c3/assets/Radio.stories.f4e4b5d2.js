import{s as d,a as e,F as i,j as n}from"./index.790c2c28.js";import{R as o}from"./Radio.a1a4447e.js";import"./theme.16ef95e5.js";import"./palette.15e4d008.js";import"./Tooltip.2610c6ff.js";import"./Button.module.f1dd235e.js";import"./useFocusRing.module.51565bb9.js";import"./useButton.module.abe6cbee.js";import"./OverlayArrow.module.2a4025a3.js";import"./Info.262fc3b5.js";import"./focusSafely.module.a8c5e791.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
