import{s as d,a as t,F as i,j as n}from"./index.6a72da6e.js";import{R as o}from"./Radio.b72c33b6.js";import"./theme.5df48c3f.js";import"./palette.15e4d008.js";import"./Tooltip.86b0b20b.js";import"./Button.module.3f5463c5.js";import"./useFocusRing.module.323af50f.js";import"./context.module.d0a60a1b.js";import"./useButton.module.650fc9b1.js";import"./OverlayArrow.module.443ecbfc.js";import"./Info.77317874.js";import"./focusSafely.module.e676051a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
