import{s as r,a as e,F as i,j as n}from"./index.48b27702.js";import{R as o}from"./Radio.d64fb28f.js";import"./theme.1fd0d04d.js";import"./palette.15e4d008.js";import"./Tooltip.b4bf12a8.js";import"./OverlayArrow.module.2fc164b4.js";import"./focusSafely.module.2136a792.js";import"./context.module.f4b18011.js";import"./Info.9465e9d1.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
