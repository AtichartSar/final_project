import {
    ImportOutlined,
    UserAddOutlined,
    SettingOutlined,
    UserOutlined,
    BarChartOutlined,
    HomeOutlined,
    PoweroffOutlined
  } from '@ant-design/icons';
//   <SettingOutlined />
{/* <UserOutlined /> */}
{/* <ShoppingCartOutlined /> */}
{/* <HomeOutlined /> */}
const components = {
    home: {
        url: '/home',
        label: 'หน้าหลัก',
        icon:<HomeOutlined style={{ fontSize: '28px', color: '#41AEA9' }} />
    },
    login: {
        url: '/login',
        label: 'เข้าสู่ระบบ',
        icon:<ImportOutlined  style={{ fontSize: '28px', color: '#41AEA9' }}  />
    },
    register: {
        url: '/register',
        label: 'สมัครสมาชิก',
        icon:<UserAddOutlined style={{ fontSize: '28px', color: '#41AEA9' }}  />
    },
    editmenu: {
        url: '/editmenu',
        label: 'แก้ไขรายการอาหาร',
        icon:  <SettingOutlined style={{ fontSize: '28px', color: '#41AEA9' }}  />
    },
    profile: {
        url: '/profile',
        label: 'โปรไฟล์',
        icon:<UserOutlined style={{ fontSize: '28px', color: '#41AEA9' }}  />
    },
    dashbord:{
        url:'/dashbord',
        label:'รายงานการขาย',
        icon:<BarChartOutlined style={{ fontSize: '28px', color: '#41AEA9' }} />
    },
    logout:{
        label:'ออกจากระบบ',
        logout:true,
        icon:<PoweroffOutlined style={{ fontSize: '28px', color: '#41AEA9' }} />
    }
}
export default {
    guest: {
        allowedRoutes: [
            components.home,
            components.profile,
            components.register,
            components.login,
        ]
    },
    user: {
        allowedRoutes: [
            components.home,
            components.profile,
            components.register,
            components.dashbord,
            components.editmenu,
            components.logout
        ]
    }
}