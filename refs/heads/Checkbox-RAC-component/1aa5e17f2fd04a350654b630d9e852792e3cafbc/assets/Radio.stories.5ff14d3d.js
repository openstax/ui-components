import{s as d,a as t,F as i,j as n}from"./index.ce91dad7.js";import{R as o}from"./Radio.e0ff0396.js";import"./theme.ab33c2a9.js";import"./palette.15e4d008.js";import"./Tooltip.c91efee7.js";import"./Button.module.32052beb.js";import"./useFocusRing.module.9be1e3d5.js";import"./context.module.b3d394e1.js";import"./useButton.module.2ce63a7a.js";import"./OverlayArrow.module.55b3164e.js";import"./Info.e332656b.js";import"./focusSafely.module.e7e949d1.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
