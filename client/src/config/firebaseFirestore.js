import firebase from './firebase'

const db = firebase.firestore()
const ref = db.collection('passwordData')
export default ref