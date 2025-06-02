import{s as d,a as t,F as i,j as n}from"./index.7e4c51c7.js";import{R as o}from"./Radio.c3c261f7.js";import"./theme.ad764efb.js";import"./palette.15e4d008.js";import"./Tooltip.0a11060a.js";import"./Button.module.2a8f0525.js";import"./useFocusRing.module.7a242911.js";import"./context.module.d747ad7e.js";import"./useButton.module.4846b76e.js";import"./OverlayArrow.module.b83abcda.js";import"./Info.3e4451a5.js";import"./focusSafely.module.2049de80.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
