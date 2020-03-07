export function showUserInfo(user: User) :User {
    return user;
}

class User {
    name : string;
    age : number;
    private : boolean;
}

// // 使用例
// showUserInfo({
//     name: 'John Smith',
//     age: 16,
//     private: false,
// });

// // エラー例
// showUserInfo({
//     name: 'Mary Sue',
//     private: false,
// });
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };