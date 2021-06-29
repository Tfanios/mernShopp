export const LoginAttemptAction = (user,pass) => dispatch =>{
    dispatch({type:'LOGIN_ATTEMPT', payload:{userName:user,password:pass}})
}