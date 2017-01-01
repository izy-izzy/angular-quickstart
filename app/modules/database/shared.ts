import { DatabaseServiceProvider }  from './services/database.service';
import { AuthServiceProvider }  from './services/auth.service';

const SERVICES:any =  [ DatabaseServiceProvider, AuthServiceProvider];

export {
    AuthServiceProvider,
    DatabaseServiceProvider,
    SERVICES
}