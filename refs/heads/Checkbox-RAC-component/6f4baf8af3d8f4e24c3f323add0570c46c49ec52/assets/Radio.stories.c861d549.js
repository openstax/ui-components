import{s as d,a as t,F as i,j as n}from"./index.7885c401.js";import{R as o}from"./Radio.deddc176.js";import"./theme.925a20ce.js";import"./palette.15e4d008.js";import"./Tooltip.28909fc9.js";import"./Button.module.0e32f998.js";import"./useFocusRing.module.6302375c.js";import"./context.module.eff4f9f2.js";import"./useButton.module.5e8b8636.js";import"./OverlayArrow.module.f281b7d6.js";import"./Info.7e36612d.js";import"./focusSafely.module.725232f7.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
