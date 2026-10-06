import{s as r,j as e,R as a}from"./index-c5c4f151.js";import{B as s}from"./Banner-26b95300.js";import"./Html-2f40313a.js";import"./Button-4a717fe3.js";import"./theme-faedbfeb.js";import"./palette-97ed00c9.js";import"./buttons-1d51466c.js";const i=r.div`
  font-size: 1.2rem;
  position: relative;
  padding-right: 2.5rem;
  width: 42rem;
`,p=()=>e(i,{children:e(s,{messages:["This is an error message"],severity:"error"})}),w=()=>e(i,{children:e(s,{messages:["This is a warning message"],severity:"warning"})}),u=()=>e(i,{children:e(s,{messages:["This is a note message"],severity:"note"})}),v=()=>e(i,{children:e(s,{messages:["First message","Second message","Third message"],severity:"warning"})}),y=()=>{const[t,n]=a.useState(!0);return t?e(i,{children:e(s,{messages:["This is a dismissible warning message"],severity:"warning",onDismiss:()=>n(!1)})}):null};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Dismissible,p as Error,v as MultipleMessages,u as Note,w as Warning};
