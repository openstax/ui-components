import{s as d,a as t,F as i,j as n}from"./index.d08558f3.js";import{R as o}from"./Radio.bbe75b2b.js";import"./theme.76bc4b2b.js";import"./palette.15e4d008.js";import"./Tooltip.f8fefa6c.js";import"./Button.module.2bf3edb8.js";import"./useFocusRing.module.ae530b9b.js";import"./context.module.c19404e4.js";import"./useButton.module.567a6684.js";import"./OverlayArrow.module.9be9c057.js";import"./Info.d61ca995.js";import"./focusSafely.module.892e3bf4.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
