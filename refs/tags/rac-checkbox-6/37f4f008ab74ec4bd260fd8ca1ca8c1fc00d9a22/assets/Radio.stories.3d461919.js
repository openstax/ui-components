import{s as d,a as t,F as i,j as n}from"./index.964940cc.js";import{R as o}from"./Radio.7245e945.js";import"./theme.f522d3c7.js";import"./palette.15e4d008.js";import"./Tooltip.5b358ccb.js";import"./Button.module.cd2d3213.js";import"./useFocusRing.module.bd802165.js";import"./context.module.cc338bef.js";import"./useButton.module.1ebeee7f.js";import"./OverlayArrow.module.8d625800.js";import"./Info.874fbf20.js";import"./focusSafely.module.b8094cee.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
