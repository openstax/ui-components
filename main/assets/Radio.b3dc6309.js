import{c as e}from"./theme.a3de81d4.js";import{s as o,j as a,a as i}from"./index.e5f1b1c3.js";const l=o.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${t=>t.disabled?e.palette.neutral:"inherit"}
`,d=o.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${e.palette.white};
  font: inherit;
  color: ${e.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid currentColor;
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &:disabled {
    background-color: ${e.palette.neutralLightest};
  }

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${e.palette.mediumBlue};
  }

  &:checked::before {
    opacity: 1;
  }
`,c=({children:t,...r})=>a(l,{disabled:r.disabled,children:[i(d,{...r,type:"radio"}),t]});export{c as R};
