import{s as d,a as e,F as i,j as n}from"./index.93484bbe.js";import{R as o}from"./Radio.27550364.js";import"./theme.93e2a079.js";import"./palette.15e4d008.js";import"./Tooltip.36900446.js";import"./Button.module.6838be60.js";import"./context.module.4b17ed65.js";import"./focusSafely.module.c50de9e1.js";import"./useFocusRing.module.5218afb0.js";import"./OverlayArrow.module.5001665a.js";import"./Info.afc09f2b.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
