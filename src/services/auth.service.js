import { UserSession, AppConfig, UserData, Person } from 'blockstack';
import { configure, getConfig, User, UserGroup } from 'radiks';


const userSession = new UserSession({
    appConfig: new AppConfig(['store_write', 'publish_data'])
});

configure({
    apiServer: 'http://localhost:1260',
    userSession
});

export default class AuthService {
    static authServiceInstance = AuthService.authServiceInstance == null ? new AuthService() : AuthService.authServiceInstance;

    handleSignIn() {
        const { radUserSession } = getConfig();
        if(radUserSession == null){
            console.log('WTRFFFF');
            return;
        }
        if (radUserSession.isSignInPending()) {
            radUserSession.handlePendingSignIn().then((userData) => {
                console.log('WRF');
                User.createWithCurrentUser();
                //window.location = window.location.origin;
            })
        }
    }

    getUserProfile() {
        const data = userSession.loadUserData();
        if(data){
            return data;
        }

        return null;
    }

    handleSignOut() {
        console.log('yo');
        userSession.signUserOut(window.location.origin);
        window.location.reload();
    }

    signIn() {
        userSession.redirectToSignIn();
    }

    isUserSignedIn() {
        return userSession.isUserSignedIn();
    }
}