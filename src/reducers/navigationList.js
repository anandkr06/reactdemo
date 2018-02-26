// export default function (state = null, action) {

//     switch (action.type) {
//         case 'CREATE_USER_NAVIGATION_MENU':
//             return action.payload;
//     }

//     return state;
// }
export default function(){
    return [
        { title: 'USER INFORMATION', isHeading : true },
        { title: 'User Info', isHeading : false },
        { title: 'User Role', isHeading : false }
    ];
}
