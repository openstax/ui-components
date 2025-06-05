import{s as d,a as t,F as i,j as n}from"./index.4d4cf18c.js";import{R as o}from"./Radio.6431a3b2.js";import"./theme.8184f45d.js";import"./palette.15e4d008.js";import"./Tooltip.3bb526eb.js";import"./Button.module.94bbed62.js";import"./useFocusRing.module.802ab750.js";import"./context.module.c3a2cf17.js";import"./useButton.module.718b7797.js";import"./OverlayArrow.module.78f63e3b.js";import"./Info.ae22431f.js";import"./focusSafely.module.dfbb82d5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
