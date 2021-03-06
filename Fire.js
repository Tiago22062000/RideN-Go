import firebase from'firebase';
import firebaseConfig from './config';

  class Fire {
      constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

      addPost = async ({text, localUri}) => {
          const remoteUri = await this.uploadPhotoAsync(localUri, 'photos/${this.uid}/${Date.now()}');

          return new Promise((res, rej) => {
              this.firestore.colletion('posts').add({
                  text,
                  uid: this.uid,
                  timestamp: this.timestamp,
                  image: remoteUri
          })
          .then(ref => {
              res(ref);
          })
          .catch(error => {
              rej(error);
          })
      })
    }

      uploadPhotoAsync = async (uri, filename) => {
          return new Promise(async (res, rej) =>{
              const response = await fetch(uri);
              const file = await response.blob();

              let upload = firebase.storage().ref(filename).put(file);

              upload.on('state_changed', snapshot => {}, err => {
                  rej(err);
              },
              async () => {
                  const url = await upload.snapshot.ref.getDownloadURL()
                  res(url);
              }
              )
          })
      };

      createUser = async user => {
          let remoteUri = null

          try {
              await firebase.auth().createUserWithEmailAndPassword(user.email, email.password)

              let db = this.firestore.colletion('users').doc(this.uid)

              db.set({
                  primeiro_nome: user.primeiro_nome,
                  email: user.email
              })
              if (user.avatar) {
                  remoteUri = await this.uploadPhotoAsync(user.avatar, 'avatars/${this.uid}');

                  db.set({avatar: remoteUri}, {merge: true});
              }
          } catch (error) {
              alert('Error: ', error);
          }
      }

      get firestore() {
          return firebase.firestore()
      }

      get uid() {
          return(firebase.auth().currentUser || {}).uid
      }

      get timestamp() {
          return Date.now();
      }
  }

  Fire.shared = new Fire();
  export default Fire;