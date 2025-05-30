import{s as d,a as t,F as i,j as n}from"./index.44dcedd8.js";import{R as o}from"./Radio.09b104c9.js";import"./theme.632686a9.js";import"./palette.15e4d008.js";import"./Tooltip.601c01fb.js";import"./Button.module.c83c9446.js";import"./useFocusRing.module.d602e730.js";import"./context.module.11ab16e1.js";import"./useButton.module.7e8c5855.js";import"./OverlayArrow.module.885cf600.js";import"./Info.0a652656.js";import"./focusSafely.module.5d97e8e5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
