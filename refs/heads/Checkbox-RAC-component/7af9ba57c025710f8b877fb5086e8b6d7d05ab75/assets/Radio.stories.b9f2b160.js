import{s as d,a as t,F as i,j as n}from"./index.0226d2e0.js";import{R as o}from"./Radio.439ea0bc.js";import"./theme.2f0b88da.js";import"./palette.15e4d008.js";import"./Tooltip.e9faedf8.js";import"./Button.module.e6b0bef9.js";import"./useFocusRing.module.813e4eda.js";import"./context.module.5c9b824a.js";import"./useButton.module.d49ae8b9.js";import"./OverlayArrow.module.7a1828c9.js";import"./Info.41fb34dd.js";import"./focusSafely.module.adebd530.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
