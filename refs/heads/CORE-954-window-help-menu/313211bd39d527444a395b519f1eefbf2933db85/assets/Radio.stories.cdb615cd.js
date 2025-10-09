import{s as d,a as e,F as i,j as n}from"./index.1b1d803d.js";import{R as o}from"./Radio.2e1eb132.js";import"./theme.ee99e843.js";import"./palette.15e4d008.js";import"./Tooltip.784d457d.js";import"./Button.module.7b9a5193.js";import"./useFocusRing.module.665de249.js";import"./context.module.78e6cd0b.js";import"./useButton.module.1eff40bc.js";import"./OverlayArrow.module.006dc926.js";import"./Info.df642683.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
