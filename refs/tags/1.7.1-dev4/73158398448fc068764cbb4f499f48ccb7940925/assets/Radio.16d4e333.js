import{c as e}from"./theme.c3b93582.js";import{s as r,j as a,a as i}from"./index.e7c823cd.js";const n=r.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`,s=r.input`
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
`,c=({children:t,...o})=>a(n,{children:[i(s,{...o,type:"radio"}),t]});export{c as R};
