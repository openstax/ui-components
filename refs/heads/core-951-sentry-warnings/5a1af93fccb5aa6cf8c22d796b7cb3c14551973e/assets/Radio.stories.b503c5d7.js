import{s as d,a as t,F as i,j as n}from"./index.cc98102b.js";import{R as o}from"./Radio.d0dbc67c.js";import"./theme.dd29795e.js";import"./palette.15e4d008.js";import"./Tooltip.7023a15b.js";import"./Button.module.e46f87d9.js";import"./useFocusRing.module.2f83f5c5.js";import"./context.module.8d337d24.js";import"./useButton.module.0b182c87.js";import"./OverlayArrow.module.b8891cdc.js";import"./Info.c80d3726.js";import"./focusSafely.module.51eaa70a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
