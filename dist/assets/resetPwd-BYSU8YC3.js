import{i as _}from"./user-D5KEYE_P.js";import{C as g,r as b,j as n,o as V,l as x,e as l,d as r,f as s,p as w,v as y}from"./index-C_8758mc.js";const U={__name:"resetPwd",setup(q){const{proxy:u}=y(),e=g({oldPassword:void 0,newPassword:void 0,confirmPassword:void 0}),i=b({oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"},{pattern:/^[^<>"'|\\]+$/,message:`不能包含非法字符：< > " ' \\ |`,trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:(p,o,a)=>{e.newPassword!==o?a(new Error("两次输入的密码不一致")):a()},trigger:"blur"}]});function f(){u.$refs.pwdRef.validate(p=>{p&&_(e.oldPassword,e.newPassword).then(o=>{u.$modal.msgSuccess("修改成功")})})}function c(){u.$tab.closePage()}return(p,o)=>{const a=n("el-input"),t=n("el-form-item"),m=n("el-button"),P=n("el-form");return V(),x(P,{ref:"pwdRef",model:s(e),rules:s(i),"label-width":"80px"},{default:l(()=>[r(t,{label:"旧密码",prop:"oldPassword"},{default:l(()=>[r(a,{modelValue:s(e).oldPassword,"onUpdate:modelValue":o[0]||(o[0]=d=>s(e).oldPassword=d),placeholder:"请输入旧密码",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),r(t,{label:"新密码",prop:"newPassword"},{default:l(()=>[r(a,{modelValue:s(e).newPassword,"onUpdate:modelValue":o[1]||(o[1]=d=>s(e).newPassword=d),placeholder:"请输入新密码",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),r(t,{label:"确认密码",prop:"confirmPassword"},{default:l(()=>[r(a,{modelValue:s(e).confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=d=>s(e).confirmPassword=d),placeholder:"请确认新密码",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),r(t,null,{default:l(()=>[r(m,{type:"primary",onClick:f},{default:l(()=>[w("保存")]),_:1}),r(m,{type:"danger",onClick:c},{default:l(()=>[w("关闭")]),_:1})]),_:1})]),_:1},8,["model","rules"])}}};export{U as default};