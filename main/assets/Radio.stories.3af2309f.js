import{s as r,a as e,F as i,j as n}from"./index.380c3e9b.js";import{R as o}from"./Radio.f5082342.js";import"./theme.955541a7.js";import"./palette.15e4d008.js";import"./Tooltip.8fb297de.js";import"./OverlayArrow.module.8dec5002.js";import"./focusSafely.module.50ff3e57.js";import"./context.module.c166cb69.js";import"./Info.6b1eea29.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
