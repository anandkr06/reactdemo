export const userMenuOptionReducer = function(){
    return [
        { title: 'USER INFORMATION', isHeading : true },
        { title: 'User Info', isHeading : false },
        { title: 'User Role', isHeading : false }
    ];
}

export const roleMenuOptionReducer = function(){
    return [
        { title: 'ROLE INFORMATION', isHeading : true },
        { title: 'Role Info', isHeading : false }
        // ,
        // { title: 'Role Resources', isHeading : false }
    ];
}