import{s as d,a as t,F as i,j as n}from"./index.e7ac3957.js";import{R as o}from"./Radio.bc616b8b.js";import"./theme.4149d575.js";import"./palette.15e4d008.js";import"./Tooltip.d5028666.js";import"./Button.module.9645869f.js";import"./useFocusRing.module.a08fca12.js";import"./context.module.622a8a74.js";import"./useButton.module.d84365ff.js";import"./OverlayArrow.module.20526042.js";import"./Info.242dd608.js";import"./focusSafely.module.2b1ea15c.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
