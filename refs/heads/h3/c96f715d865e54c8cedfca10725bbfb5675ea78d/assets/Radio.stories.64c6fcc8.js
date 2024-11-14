import{s as r,a as e,F as i,j as n}from"./index.dfccf34b.js";import{R as o}from"./Radio.fc98f862.js";import"./theme.bf8fefe2.js";import"./palette.15e4d008.js";import"./Tooltip.7dc187a9.js";import"./OverlayArrow.module.58174776.js";import"./focusSafely.module.c95f4529.js";import"./context.module.34abe295.js";import"./Info.8d05e811.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
