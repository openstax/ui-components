import{s as d,a as t,F as i,j as n}from"./index.e65b35b3.js";import{R as o}from"./Radio.74d6132f.js";import"./theme.5b878526.js";import"./palette.15e4d008.js";import"./Tooltip.102ff6ea.js";import"./Button.module.f8b2332b.js";import"./useFocusRing.module.c590aaf8.js";import"./context.module.fdd51b68.js";import"./useButton.module.ca25e792.js";import"./OverlayArrow.module.046828a0.js";import"./Info.86304890.js";import"./focusSafely.module.0ae58c24.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
