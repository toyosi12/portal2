import { SidenavItem } from './sidenav-item';
export const ITEMS = [
    {id:1, name:'Dashboard',_name:'dashboard',icon:'dashboard', 
        sub:[
            
        ]
    },
    {id:2, name:'Profile',_name:'profile',icon:'account_circle',
        sub:[
            {id:1,name:'My Profile',_name:'my-profile'},
            {id:2,name:'Change Passcode',_name:'change-passcode'},
            {id:3,name:'Documents',_name:'documents'},
        ]
    },
    {id:3, name:'Payments',_name:'payments',icon:'payment', 
    sub:[
        {id:1,name:'Pay Tuition',_name:'pay-tuition'},
        {id:2,name:'Other Payments',_name:'other-payments'},
        {id:3,name:'Payment History',_name:'payment-history'},
    ]
    },
    {id:4, name:'Academics',_name:'academics',icon:'school', 
    sub:[
        {id:1,name:'Semester Result',_name:'semester-result'},
        {id:2,name:'Course Registration',_name:'course-registration'},
        {id:3,name:'Registration History',_name:'registration-history'},
        {id:4,name:'View Timetable',_name:'view-timetable'}
    ]   
    },
    {id:5, name:'Home',_name:'home',icon:'explore', 
    sub:[
        
    ]   
    },
    {id:6, name:'Logout',_name:'logout',icon:'clear',
        
    }
    // {id:3, name:'Payments', color:'black'},
    // {id:4, name:'Academics', color:'black'},
    // {id:5, name:'Home', color:'black'},
    // {id:6, name:'Logout', color:'black'},
]