import{s as d,a as t,F as i,j as n}from"./index.34fd5b17.js";import{R as o}from"./Radio.1f2bcb0d.js";import"./theme.465cf21c.js";import"./palette.15e4d008.js";import"./Tooltip.88cf3766.js";import"./Button.module.ce7a1eaf.js";import"./useFocusRing.module.5f106e3b.js";import"./context.module.ea639fc4.js";import"./useButton.module.aff74857.js";import"./OverlayArrow.module.89ba4bdd.js";import"./Info.78177529.js";import"./focusSafely.module.e7e7e4b9.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=e=>n(a,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),R=()=>t(i,{children:r({name:"default"})}),T=()=>t(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Default,T as WithTooltip};
