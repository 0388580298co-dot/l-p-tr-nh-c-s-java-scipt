const USERS_KEY='burgerbox-users';const SESSION_KEY='burgerbox-session';
const defaultUsers=[{id:1,name:'Administrator',email:'admin@burgerbox.local',password:'admin123',role:'admin',status:'active',createdAt:'2026-01-01'},{id:2,name:'Khách hàng Demo',email:'user@burgerbox.local',password:'123456',role:'customer',status:'active',createdAt:'2026-01-02'}];
function getUsers(){const saved=JSON.parse(localStorage.getItem(USERS_KEY));if(!saved){localStorage.setItem(USERS_KEY,JSON.stringify(defaultUsers));return defaultUsers}return saved}
function saveUsers(users){localStorage.setItem(USERS_KEY,JSON.stringify(users))}
function getSession(){return JSON.parse(localStorage.getItem(SESSION_KEY))}
function login(email,password){const user=getUsers().find(u=>u.email.toLowerCase()===email.trim().toLowerCase()&&u.password===password);if(!user)return{ok:false,message:'Email hoặc mật khẩu không chính xác.'};if(user.status!=='active')return{ok:false,message:'Tài khoản đang bị khóa.'};const session={id:user.id,name:user.name,email:user.email,role:user.role,loginAt:new Date().toISOString()};localStorage.setItem(SESSION_KEY,JSON.stringify(session));return{ok:true,user:session}}
function logout(){localStorage.removeItem(SESSION_KEY);location.href='login.html'}
function requireAuth(role){const s=getSession();if(!s){location.href='login.html';return null}if(role&&s.role!==role){location.href='index.html';return null}return s}
function registerUser(name,email,password){const users=getUsers();if(users.some(u=>u.email.toLowerCase()===email.trim().toLowerCase()))return{ok:false,message:'Email đã được sử dụng.'};users.push({id:Date.now(),name:name.trim(),email:email.trim(),password,status:'active',role:'customer',createdAt:new Date().toISOString().slice(0,10)});saveUsers(users);return{ok:true}}
function isLoggedIn(){return !!getSession()}
function getCurrentUser(){return getSession()}
