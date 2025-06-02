import{s as d,a as t,F as i,j as n}from"./index.aca28bb5.js";import{R as o}from"./Radio.817d99a9.js";import"./theme.927cb98c.js";import"./palette.15e4d008.js";import"./Tooltip.4b437308.js";import"./Button.module.35ee0533.js";import"./useFocusRing.module.d7a713a9.js";import"./context.module.36d442d3.js";import"./useButton.module.75b718a5.js";import"./OverlayArrow.module.d8b586e6.js";import"./Info.ef862fc9.js";import"./focusSafely.module.10207dd4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
