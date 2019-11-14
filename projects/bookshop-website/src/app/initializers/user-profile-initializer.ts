import { AuthService } from '../services/auth.service';

export function initUserProfile(authService:AuthService){
  return ()=>{
    return authService.initUserProfile();
  }
}
