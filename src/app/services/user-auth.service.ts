
import { Injectable } from '@angular/core';

import { User} from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserluthService {

  isloggedIn = false 
   user: User | null = null

    login(user: User) {

      this.isloggedIn = true 
      this.user = user 
  
    }

}
