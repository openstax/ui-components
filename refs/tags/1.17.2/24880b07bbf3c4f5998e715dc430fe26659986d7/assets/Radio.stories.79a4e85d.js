import{s as d,a as t,F as i,j as n}from"./index.7c8cb81d.js";import{R as o}from"./Radio.f3a71340.js";import"./theme.83d8b33f.js";import"./palette.15e4d008.js";import"./Tooltip.eda43a54.js";import"./Button.module.9fc2ca07.js";import"./useFocusRing.module.a846a30a.js";import"./context.module.09150909.js";import"./useButton.module.b3409d8e.js";import"./OverlayArrow.module.6c06b253.js";import"./Info.679874b4.js";import"./focusSafely.module.c07ccfcd.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
