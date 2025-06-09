import{s as d,a as t,F as i,j as n}from"./index.6a46d10b.js";import{R as o}from"./Radio.f801b091.js";import"./theme.6118982a.js";import"./palette.15e4d008.js";import"./Tooltip.48905333.js";import"./Button.module.f46ebf71.js";import"./useFocusRing.module.ec264aa1.js";import"./context.module.49c9b943.js";import"./useButton.module.260ea417.js";import"./OverlayArrow.module.c885ac68.js";import"./Info.a732f430.js";import"./focusSafely.module.23994168.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
