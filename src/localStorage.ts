
export const USER = localStorage.getItem('user');
export const PASSWORD = localStorage.getItem('password');

export function setDefaultUser(){
    if(!USER){
        localStorage.setItem('user', 'test')
    }
      
}
export function setDefaultPassword() {
    if(!PASSWORD){
        localStorage.setItem('password', '12345')
    }
}
