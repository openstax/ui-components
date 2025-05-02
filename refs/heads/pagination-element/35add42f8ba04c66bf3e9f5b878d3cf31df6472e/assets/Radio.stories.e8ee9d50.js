import{s as r,a as e,F as i,j as n}from"./index.adb103b6.js";import{R as o}from"./Radio.0b397a03.js";import"./theme.67c90849.js";import"./palette.15e4d008.js";import"./Tooltip.ff74f1ae.js";import"./OverlayArrow.module.01e76ad5.js";import"./context.module.1352d4ff.js";import"./useButton.module.273f767b.js";import"./Info.baabf768.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
