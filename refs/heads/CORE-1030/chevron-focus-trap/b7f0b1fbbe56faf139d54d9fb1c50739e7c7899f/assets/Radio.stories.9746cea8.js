import{s as d,a as t,F as i,j as n}from"./index.c9822ead.js";import{R as o}from"./Radio.066a03ac.js";import"./theme.faecafb9.js";import"./palette.15e4d008.js";import"./Tooltip.5f15a6a2.js";import"./Button.module.16580fdd.js";import"./useFocusRing.module.c582b2dd.js";import"./context.module.a395e934.js";import"./useButton.module.c7f535ba.js";import"./OverlayArrow.module.65f27815.js";import"./Info.0fc851ce.js";import"./focusSafely.module.0adccfda.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
