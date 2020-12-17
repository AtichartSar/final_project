import axios from 'axios';


import { notification } from 'antd';
import LocalStorageService from '../services/localStorageService'

axios.defaults.baseURL = "http://localhost:8000";
//config การแนบ token ไปกับ header ทุกๆ reques
axios.interceptors.request.use(
    config => {
        console.log("configsss",config)
        if(config.url.includes('/login')||config.url.includes('/register')) return config
        const token = LocalStorageService.getToken();
        if(token){
            //for append token 
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    err => {
       Promise.reject(err)
    }
)

axios.interceptors.response.use(
    response=>{
        return response
    },
    err=>{
        // ***[ ?.]***เช็ค response มีค่าไหม?
        if(err.response?.status===401){
            LocalStorageService.removeToken();
            //brower reload page
            window.location.reload();
            //
            notification.error({
                message:'กรุณาเข้าสู่ระบบใหม่'
            })
            return Promise.reject(err)
        }
        return Promise.reject(err)

    }

)

export default axios