
import HomePage from '../components/pages/Home/Home'
import LoginPage from '../components/pages/Login/Login'
import PaymentPage from '../components/pages/Payment/Payment'
import RegisterPage from '../components/pages/Register/Register'
import EditMenuPage from '../components/pages/EditMenu/EditMenu'
import ProfilePage from '../components/pages/Profile/Profile'
import Dashbord from '../components/pages/Dashbord/Dashbord'
import Review from '../components/pages/Review/Review'
import Invoice from '../components/pages/Invoice/Invoice'

const components = {
    home: {
        url: '/home',
        component: HomePage
    },
    login: {
        url: '/login',
        component: LoginPage
    },
    payment: {
        url: '/payment',
        component: PaymentPage
    },
    register: {
        url: '/register',
        component: RegisterPage
    },
    editmenu: {
        url: '/editmenu',
        component: EditMenuPage
    },
    profile: {
        url: '/profile',
        component: ProfilePage
    },
    dashbord: {
        url: '/dashbord',
        component: Dashbord
    },
    Review: {
        url: '/Review',
        component: Review
    },
    Invoice: {
        url: '/invoice',
        component: Invoice
    }
}
export default {
    guest: {
        allowedRoutes: [
            components.home,
            components.login,
            components.register,
            components.payment,
            components.Review,
            components.Invoice,
        ],
        redirectRoutes: '/home'
    },
    user: {
        allowedRoutes: [
            components.editmenu,
            components.profile,
            components.home,
            // components.login,
            components.register,
            components.payment,
            components.dashbord,
            components.Review,
            components.Invoice,
            
        ],
        redirectRoutes: '/dashbord'
    }
}

