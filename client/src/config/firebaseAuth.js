import firebase from './firebase'

export const auth = firebase.auth()
export const provider = new firebase.auth.GithubAuthProvider()