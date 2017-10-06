import  {firebaseAuth, facebookProvider} from '~/config/constants'
import { AccessToken } from 'react-native-fbsdk'

export function getAccessToken(){
  return AccessToken.getCurrentAccessToken()
}
export function authWithTocken(accessToken){
  return firebaseAuth.signInWithCredenctial(facebookProvider.credential(AccessToken))
}
