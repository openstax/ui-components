import{s as d,a as t,F as i,j as n}from"./index.a256598c.js";import{R as o}from"./Radio.f0ad3a8a.js";import"./theme.62555c7c.js";import"./palette.15e4d008.js";import"./Tooltip.fbb35853.js";import"./Button.module.6f58f1a2.js";import"./useFocusRing.module.362d06ad.js";import"./context.module.949c8956.js";import"./useButton.module.21d3d59b.js";import"./OverlayArrow.module.7148ecd6.js";import"./Info.c5a54fdc.js";import"./focusSafely.module.9c4ca29a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
