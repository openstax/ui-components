import{s as d,a as t,F as i,j as n}from"./index.217a48c1.js";import{R as o}from"./Radio.6178a594.js";import"./theme.6297c26f.js";import"./palette.15e4d008.js";import"./Tooltip.0d899ef4.js";import"./Button.module.22a3591b.js";import"./useFocusRing.module.b2c208cb.js";import"./context.module.31ef14dc.js";import"./useButton.module.06b6687c.js";import"./OverlayArrow.module.5e4f85f0.js";import"./Info.8cd8a279.js";import"./focusSafely.module.e9bba5c3.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
