import{s as i,a as t,F as w,j as o}from"./index.3b0009bd.js";import"./Radio.131f97b1.js";import{C as y}from"./Checkbox.b3ab7135.js";const h=i.label`
  display: flex;
  flex-direction: column;
  flex: 0;
  justify-content: stretch;
`,x=i.span`
  white-space: nowrap;
  font-weight: bold;
  display: block;
`,g=i.p`
  font-style: italic;
  margin: 0;
  padding: 0;
`,m=({value:n,...r})=>n?t(g,{...r,children:n}):null,f=n=>n.show?t(w,{children:"*"}):null,u=i.input`
  flex: 1;
  justify-content: stretch;
`,b=i.div`
  flex-direction: row;
  display: flex;
`,I=({label:n,addon:r,help:a,wrapperProps:d,onChangeValue:l,...e})=>o(h,{...d,children:[o(x,{children:[t(f,{show:e.required}),n,":"]}),o(b,{children:[t(u,{type:"text",...e,onChange:c=>{var s;l==null||l(e.transformValue?e.transformValue(c.target.value):c.target.value),(s=e.onChange)==null||s.call(e,c)}}),r]}),t(m,{value:a})]});i.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;i(x)`
  white-space: normal;
`;const v=i.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`,j=i.p`
  color: #C22032;
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  line-height: 2.5rem;
`,q=({label:n,help:r,wrapperProps:a,error:d,onChangeValue:l,...e})=>o(h,{...a,children:[t(v,{children:t(y,{...e,onChange:c=>{var s;l==null||l(!!c.target.checked),(s=e.onChange)==null||s.call(e,c)},children:o(x,{children:[t(f,{show:e.required}),n]})})}),t(m,{value:r}),d!==void 0&&d.length>0&&t(j,{children:d[0]})]});export{q as C,I as T};
