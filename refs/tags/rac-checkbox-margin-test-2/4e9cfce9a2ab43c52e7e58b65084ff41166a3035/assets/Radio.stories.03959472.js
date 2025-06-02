import{s as d,a as t,F as i,j as n}from"./index.d8fdcec6.js";import{R as o}from"./Radio.600a203b.js";import"./theme.7b7c4c4a.js";import"./palette.15e4d008.js";import"./Tooltip.08399ccc.js";import"./Button.module.1faf95b1.js";import"./useFocusRing.module.08ff59c3.js";import"./context.module.058314f3.js";import"./useButton.module.7843c65c.js";import"./OverlayArrow.module.fd4c77ed.js";import"./Info.ba949952.js";import"./focusSafely.module.a8137d75.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
