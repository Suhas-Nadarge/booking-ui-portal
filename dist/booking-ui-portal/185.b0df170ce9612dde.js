"use strict";(self.webpackChunkbooking_ui_portal=self.webpackChunkbooking_ui_portal||[]).push([[185],{1185:(P,g,a)=>{a.r(g),a.d(g,{UsersModule:()=>M});var s=a(4182),l=a(9808),t=a(2096),c=a(9114),d=a(2290),p=a(520);let u=(()=>{class o{constructor(n){this._http=n,this.httpOptions={headers:new p.WM({"Content-Type":"application/json"})}}registerUser(n){return this._http.post("http://127.0.0.1:5000/register",n,this.httpOptions)}loginUser(n){return this._http.post("http://127.0.0.1:5000/login",n,this.httpOptions)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(p.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function m(o,i){1&o&&(t.TgZ(0,"div",16),t._UZ(1,"input",23),t.TgZ(2,"label",24),t._uU(3,"First Name"),t.qZA(),t.qZA())}function b(o,i){1&o&&(t.TgZ(0,"div",16),t._UZ(1,"input",23),t.TgZ(2,"label",24),t._uU(3,"Last Name"),t.qZA(),t.qZA())}function f(o,i){1&o&&(t.TgZ(0,"div",16),t.TgZ(1,"select",25),t.TgZ(2,"option",26),t._uU(3,"Select Role"),t.qZA(),t.TgZ(4,"option",27),t._uU(5,"Doctor"),t.qZA(),t.TgZ(6,"option",28),t._uU(7,"Patient"),t.qZA(),t.qZA(),t.qZA())}function _(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return e.isLogin=!e.isLogin}),t.TgZ(1,"span"),t._uU(2,"Get started"),t._UZ(3,"i",30),t.qZA(),t.qZA()}}function h(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return e.isLogin=!e.isLogin}),t.TgZ(1,"small"),t._uU(2,"Already signed up?"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"\xa0Log in"),t.qZA(),t.qZA()}}function Z(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return e.isLogin=!e.isLogin,e.login("","")}),t._uU(1,"Sign In"),t.qZA()}}function C(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"button",31),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return e.isLogin=!e.isLogin}),t._uU(1,"Sign Up"),t.qZA()}}const x=[{path:"",component:(()=>{class o{constructor(n,r,e,O){this.fb=n,this.router=r,this.toastr=e,this.loginService=O,this.showLoginError=!1,this.isLogin=!1}ngOnInit(){this.createForm()}createForm(){this.loginForm=this.fb.group({email:["",s.kI.required],firstname:["",s.kI.required],lastname:["",s.kI.required],password:["",s.kI.required],confirm_password:["",s.kI.required],isDoctor:"",id:""})}login(n,r){this.showLoginError=!1,this.router.navigate(["/pages/appointments/search"])}registerUser(){var n;{this.showLoginError=!1;let r=null===(n=this.loginForm)||void 0===n?void 0:n.value;this.loginService.registerUser(r).subscribe(e=>{"success"===e.status?(this.toastr.success("User Registered successfully, check your mail for the confirmation!","Success"),this.loginForm.reset(),this.router.navigate(["/login"])):this.showLoginError=!0,console.log(e)},e=>{this.toastr.error(e.error.message?e.error.message:"Something went wrong!","Error"),console.log(e.error.message)})}}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.qu),t.Y36(c.F0),t.Y36(d._W),t.Y36(u))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login-register"]],decls:37,vars:7,consts:[["href","//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css","rel","stylesheet","id","bootstrap-css"],[1,"bs4header","bg-primary"],[1,"main-header"],[1,"navbar","navbar-expand-lg","navbar-dark"],["href","#",1,"navbar-brand"],["type","button","data-toggle","collapse","data-target","#bs4navbar","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],[1,"sidenav"],[1,"login-main-text"],[1,"container","d-flex","justify-content-center",2,"margin-left","255px"],[1,"d-flex","flex-column","justify-content-between"],[1,"card","mt-3","p-5",2,"height","193px","width","450px"],[1,"mb-1"],[1,"mb-5","text-white"],[1,"card","two","bg-white","px-5","py-4","mb-3"],["class","form-group",4,"ngIf"],[1,"form-group"],["type","email","autocomplete","off","id","mail","required","",1,"form-control"],["for","mail",1,"form-control-placeholder"],["type","password","id","password","required","",1,"form-control"],["for","password",1,"form-control-placeholder"],["class","btn btn-primary btn-block btn-lg mt-1 mb-2",3,"click",4,"ngIf"],["class","btn btn-primary btn-lg",3,"click",4,"ngIf"],["type","text","id","name","required","",1,"form-control"],["for","name",1,"form-control-placeholder"],["aria-label","Default select example",1,"form-select"],["selected",""],["value","true"],["value","false"],[1,"btn","btn-primary","btn-block","btn-lg","mt-1","mb-2",3,"click"],[1,"fas","fa-long-arrow-alt-right","ml-2"],[1,"btn","btn-primary","btn-lg",3,"click"]],template:function(n,r){1&n&&(t._UZ(0,"link",0),t.TgZ(1,"header",1),t.TgZ(2,"div",2),t.TgZ(3,"nav",3),t.TgZ(4,"a",4),t.TgZ(5,"b"),t.TgZ(6,"i"),t._uU(7,"MyDocs.ie"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"button",5),t._UZ(9,"span",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(10,"link",0),t.TgZ(11,"div",7),t._UZ(12,"div",8),t.qZA(),t.TgZ(13,"div",9),t.TgZ(14,"div",10),t.TgZ(15,"div",11),t.TgZ(16,"div"),t.TgZ(17,"p",12),t._uU(18,"Start booking your"),t.qZA(),t.TgZ(19,"h4",13),t._uU(20,"appointments with us!"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",14),t.YNc(22,m,4,0,"div",15),t.YNc(23,b,4,0,"div",15),t.TgZ(24,"div",16),t._UZ(25,"input",17),t.TgZ(26,"label",18),t._uU(27,"Email"),t.qZA(),t.qZA(),t.YNc(28,f,8,0,"div",15),t.TgZ(29,"div",16),t._UZ(30,"input",19),t.TgZ(31,"label",20),t._uU(32,"Password"),t.qZA(),t.qZA(),t.YNc(33,_,4,0,"button",21),t.YNc(34,h,5,0,"button",22),t.YNc(35,Z,2,0,"button",21),t.YNc(36,C,2,0,"button",22),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(22),t.Q6J("ngIf",!r.isLogin),t.xp6(1),t.Q6J("ngIf",!r.isLogin),t.xp6(5),t.Q6J("ngIf",!r.isLogin),t.xp6(5),t.Q6J("ngIf",r.isLogin),t.xp6(1),t.Q6J("ngIf",!r.isLogin),t.xp6(1),t.Q6J("ngIf",r.isLogin),t.xp6(1),t.Q6J("ngIf",!r.isLogin))},directives:[l.O5,s.YN,s.Kr],styles:["body[_ngcontent-%COMP%]{background-color:#000}.card[_ngcontent-%COMP%]{width:400px;border:groove;margin-left:20%;margin-top:16%}.btr[_ngcontent-%COMP%]{border-top-right-radius:5px!important}.btl[_ngcontent-%COMP%]{border-top-left-radius:5px!important}.btn-dark[_ngcontent-%COMP%]{color:#fff;background-color:#010811;border-color:#010811}.btn-dark[_ngcontent-%COMP%]:hover{color:#fff;background-color:#01070f;border-color:#01070f}.nav-pills[_ngcontent-%COMP%]{display:table!important;width:100%}.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border-radius:0;border-bottom:1px solid #01081340}.nav-item[_ngcontent-%COMP%]{display:table-cell}.form[_ngcontent-%COMP%]{padding:10px;height:300px}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-bottom:12px;border-radius:3px}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:20px}.main[_ngcontent-%COMP%]{margin-left:20%;margin-top:0%}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{color:#fff;background-color:#000}a[_ngcontent-%COMP%]{color:#000;text-decoration:none;background-color:transparent}.sidenav[_ngcontent-%COMP%]{margin-left:47px;margin-top:85px;height:600px;width:31.5%;background:url(https://www.doccure.io/landing-assets/images/Doctor.png);background-repeat:no-repeat}.card[_ngcontent-%COMP%]{width:500px;border:groove;margin-left:-10%;margin-top:2%;height:469px}.btn-light-moon[_ngcontent-%COMP%]{background:#FFEFBA;background:linear-gradient(to right,#FFFFFF,#FFEFBA);color:#000;border:3px solid #eee}.btn-dark-moon[_ngcontent-%COMP%]{background:#141E30;background:linear-gradient(to right,#243B55,#141E30);color:#fff;border:3px solid #eee}body[_ngcontent-%COMP%]{background-color:#ebeaef}.container[_ngcontent-%COMP%]{flex-wrap:wrap}.card[_ngcontent-%COMP%]{border:none;border-radius:10px;background-color:#4270c8;width:350px;margin-top:-60px}p.mb-1[_ngcontent-%COMP%]{font-size:25px;color:#9fb7fd}.btn-primary[_ngcontent-%COMP%]{border:none;background:#5777DE;margin-bottom:60px}.btn-primary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#9fb7fd}.btn-primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px}.card.two[_ngcontent-%COMP%]{border-top-right-radius:60px;border-top-left-radius:0;width:450px;height:550px}.form-group[_ngcontent-%COMP%]{position:relative;margin-bottom:2rem}.form-control[_ngcontent-%COMP%]{border:none;border-radius:0;outline:0;border-bottom:1.5px solid #E6EBEE}.form-control[_ngcontent-%COMP%]:focus{box-shadow:none;border-radius:0;border-bottom:2px solid #8A97A8}.form-control-placeholder[_ngcontent-%COMP%]{position:absolute;top:15px;left:10px;transition:all .2s;opacity:.5;font-size:80%}.form-control[_ngcontent-%COMP%]:focus + .form-control-placeholder[_ngcontent-%COMP%]{font-size:0%;transform:translateY(-90%);opacity:0;top:10px;color:#8b92ac}.form-control[_ngcontent-%COMP%]:valid + .form-control-placeholder[_ngcontent-%COMP%]{font-size:0%;transform:translateY(-90%);opacity:0;top:10px;color:#8b92ac}.btn-block[_ngcontent-%COMP%]{border:none;border-radius:8px;background-color:#506ccf;padding:10px 0 12px}.btn-block[_ngcontent-%COMP%]:focus{box-shadow:none}.btn-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px;color:#d0e6ff}"]}),o})()}];let v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(x)],c.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,v,s.UX]]}),o})()}}]);