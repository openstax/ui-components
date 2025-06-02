import{s as d,a as t,F as i,j as n}from"./index.56241f9c.js";import{R as o}from"./Radio.68518453.js";import"./theme.214696be.js";import"./palette.15e4d008.js";import"./Tooltip.149f3797.js";import"./Button.module.5cbd66b5.js";import"./useFocusRing.module.45dfdaf4.js";import"./context.module.4f9d8356.js";import"./useButton.module.85223889.js";import"./OverlayArrow.module.d089b349.js";import"./Info.799d1558.js";import"./focusSafely.module.464e09cf.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
