import{s as r}from"./index.3e02da38.js";import{a as t,B as n}from"./Button.f3d81230.js";import{c as o}from"./theme.92b14b32.js";const l=r.span`
  font-weight: bold;
  text-transform: uppercase;
`,s=r.div`
  position: relative;
  background: ${({severity:e})=>e==="error"?"#F8E8EA":"#fff5e0"};
  color: ${({severity:e})=>e==="error"?o.palette.darkRed:"#976502"};
  border: ${({severity:e})=>e==="error"?`1px solid ${o.palette.lightRed}`:"1px solid #fdbd3e"};
  padding: .6rem 1.6rem;
  margin: 0 0 1.6rem 0;
  line-height: 2rem;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${o.palette.mediumBlue};
  
    &:hover {
      text-decoration: underline;
      color: ${o.link.hover}
    }
  }

  ${t} {
    font-size: 1.6rem;
  }
`,c=r(n)`
  color: ${({severity:e})=>e==="error"?o.palette.darkRed:"#976502"};
  overflow: visible;
  background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  box-shadow: none;
  margin-left: 2.4rem;

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background: none;
  }
`;export{c as C,s as S,l as a};
