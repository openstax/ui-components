import{s as d,a as t,F as i,j as n}from"./index.6257544b.js";import{R as o}from"./Radio.b867057e.js";import"./theme.9e4ddf18.js";import"./palette.15e4d008.js";import"./Tooltip.589c8eaf.js";import"./Button.module.c8774860.js";import"./useFocusRing.module.b459486a.js";import"./context.module.35b17430.js";import"./useButton.module.1d2adc31.js";import"./OverlayArrow.module.b59eca05.js";import"./Info.633de235.js";import"./focusSafely.module.ec2344d5.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
