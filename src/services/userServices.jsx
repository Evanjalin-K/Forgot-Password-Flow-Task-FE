import { instance } from './instance'; 

const userServices = {
    login: async (email, password) => {
        
            const response = await instance.post('/user/login', {
                email,
                password
            });
    },
    forgotPassword: async (email) => {
        
            const response = await instance.post(`/user/${email}`, {
                email
            });
            
    },
    updatePassword: async (newPassword, confirmPassword, token) => {
       
            const response = await instance.post(`/user/password/${token}`, { 
                newPassword,
                confirmPassword
                
            });
        }
    }

export { userServices };
