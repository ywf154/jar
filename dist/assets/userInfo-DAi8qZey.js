import{k as v}from"./user-D5KEYE_P.js";import{r as c,w as N,j as u,o as y,l as C,e as o,d as l,f as a,p as s,v as U}from"./index-C_8758mc.js";const q={__name:"userInfo",props:{user:{type:Object}},setup(g){const p=g,{proxy:i}=U(),e=c({}),b=c({nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]});function V(){i.$refs.userRef.validate(n=>{n&&v(e.value).then(t=>{i.$modal.msgSuccess("修改成功"),p.user.phonenumber=e.value.phonenumber,p.user.email=e.value.email})})}function x(){i.$tab.closePage()}return N(()=>p.user,n=>{n&&(e.value={nickName:n.nickName,phonenumber:n.phonenumber,email:n.email,sex:n.sex})},{immediate:!0}),(n,t)=>{const d=u("el-input"),m=u("el-form-item"),f=u("el-radio"),k=u("el-radio-group"),_=u("el-button"),h=u("el-form");return y(),C(h,{ref:"userRef",model:a(e),rules:a(b),"label-width":"80px"},{default:o(()=>[l(m,{label:"用户昵称",prop:"nickName"},{default:o(()=>[l(d,{modelValue:a(e).nickName,"onUpdate:modelValue":t[0]||(t[0]=r=>a(e).nickName=r),maxlength:"30"},null,8,["modelValue"])]),_:1}),l(m,{label:"手机号码",prop:"phonenumber"},{default:o(()=>[l(d,{modelValue:a(e).phonenumber,"onUpdate:modelValue":t[1]||(t[1]=r=>a(e).phonenumber=r),maxlength:"11"},null,8,["modelValue"])]),_:1}),l(m,{label:"邮箱",prop:"email"},{default:o(()=>[l(d,{modelValue:a(e).email,"onUpdate:modelValue":t[2]||(t[2]=r=>a(e).email=r),maxlength:"50"},null,8,["modelValue"])]),_:1}),l(m,{label:"性别"},{default:o(()=>[l(k,{modelValue:a(e).sex,"onUpdate:modelValue":t[3]||(t[3]=r=>a(e).sex=r)},{default:o(()=>[l(f,{value:"0"},{default:o(()=>[s("男")]),_:1}),l(f,{value:"1"},{default:o(()=>[s("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(m,null,{default:o(()=>[l(_,{type:"primary",onClick:V},{default:o(()=>[s("保存")]),_:1}),l(_,{type:"danger",onClick:x},{default:o(()=>[s("关闭")]),_:1})]),_:1})]),_:1},8,["model","rules"])}}};export{q as default};