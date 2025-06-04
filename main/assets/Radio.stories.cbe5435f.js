import{s as d,a as t,F as i,j as n}from"./index.d5921d2c.js";import{R as o}from"./Radio.dc117a67.js";import"./theme.60864601.js";import"./palette.15e4d008.js";import"./Tooltip.23bd19c2.js";import"./Button.module.cf48aee7.js";import"./useFocusRing.module.98552aef.js";import"./context.module.c6c63af9.js";import"./useButton.module.258e7cd2.js";import"./OverlayArrow.module.bf65853c.js";import"./Info.dd8d7f06.js";import"./focusSafely.module.e6d4e1a3.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
