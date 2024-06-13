import{s,R as b,a as i,j as n}from"./index.b5a386a9.js";import{c as a}from"./theme.0ea1d579.js";import{C as h}from"./Tooltip.d96620c2.js";import{k as u,l as f}from"./module.a3bd3840.js";const c=s.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?a.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,d=s.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${a.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  font: inherit;
  color: ${a.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${a.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,y=s.div`
  display: inline-block;
`,k=({children:e,disabled:t,...o})=>{const r=u({delay:0}),l=b.useRef(null),{triggerProps:p,tooltipProps:m}=f({delay:0},r,l);return o.tooltipText?i("div",{children:i(y,{children:n(c,{ref:l,isDisabled:t,"aria-disabled":t,...p,children:[i(d,{type:"radio",onFocus:()=>r.open(),isDisabled:t,"aria-disabled":t,...o}),e,r.isOpen&&i(h,{state:r,...m,placement:"right",children:o.tooltipText})]})})}):n(c,{isDisabled:t,"aria-disabled":t,children:[i(d,{type:"radio",isDisabled:t,"aria-disabled":t,...o}),e]})};export{k as R};
