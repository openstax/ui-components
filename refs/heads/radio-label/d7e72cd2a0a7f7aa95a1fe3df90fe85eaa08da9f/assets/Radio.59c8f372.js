import{s,R as m,a as r,j as n}from"./index.91c8b510.js";import{c as o}from"./theme.66317105.js";import{C as u}from"./Tooltip.c8318b02.js";import{a as h,b as f}from"./module.9b65d58e.js";const d=s.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?o.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,c=s.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${o.palette.white};
  opacity: ${e=>e.isDisabled?"40%":"100%"};
  font: inherit;
  color: ${o.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${e=>e.isDisabled?"#e6e6e6":"currentColor"};
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
    box-shadow: inset 1em 1em ${o.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,y=s.div`
  display: inline-flex;
`,w=({children:e,disabled:t,...i})=>{const a=h({delay:0}),l=m.useRef(null),{triggerProps:p,tooltipProps:b}=f({delay:0},a,l);return i.tooltipText&&t?r(y,{children:n(d,{ref:l,isDisabled:!0,"aria-disabled":!0,...p,children:[r(c,{type:"radio",onFocus:()=>a.open(),isDisabled:!0,"aria-disabled":!0,...i}),e,a.isOpen&&r(u,{state:a,...b,placement:"right",children:i.tooltipText})]})}):n(d,{isDisabled:t,"aria-disabled":t,children:[r(c,{type:"radio",isDisabled:t,"aria-disabled":t,...i}),e]})};export{w as R};
