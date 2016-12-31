import { User } from './classes/users.classes';

import { LoginComponent }      from './components/login.component';
import { ForgottenPasswordComponent }     from './components/forgottenpassword.component';
import { ChangeEmailComponent }     from './components/changeemail.component';
import { ChangePasswordComponent }     from './components/changepassword.component';
import { CreateUserComponent }     from './components/createuser.component';

import { UsersProviderService }  from './services/users.service';

const CLASSES:any =       { User }
const COMPONENTS: any =   { LoginComponent, ForgottenPasswordComponent, ChangeEmailComponent, 
                            ChangePasswordComponent, CreateUserComponent }
const SERVICES: any =     { UsersProviderService }

export {
    CLASSES,
    COMPONENTS,
    SERVICES
}