import{s as d,a as t,F as i,j as n}from"./index.8f51e422.js";import{R as o}from"./Radio.636856ba.js";import"./theme.2cc37264.js";import"./palette.15e4d008.js";import"./Tooltip.2dab8d00.js";import"./Button.module.ebb80593.js";import"./useFocusRing.module.eb7e2819.js";import"./context.module.3e39767d.js";import"./useButton.module.29ec2b43.js";import"./OverlayArrow.module.e8b84cc0.js";import"./Info.4fcbb08a.js";import"./focusSafely.module.099b6afd.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
