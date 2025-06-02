import{s as d,a as t,F as i,j as n}from"./index.3a098f21.js";import{R as o}from"./Radio.76ca1916.js";import"./theme.23da9b27.js";import"./palette.15e4d008.js";import"./Tooltip.c6b422af.js";import"./Button.module.7c134bc6.js";import"./useFocusRing.module.f596cf9d.js";import"./context.module.663f57f9.js";import"./useButton.module.698cb966.js";import"./OverlayArrow.module.41dfffe2.js";import"./Info.5459de6e.js";import"./focusSafely.module.9eb03923.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
