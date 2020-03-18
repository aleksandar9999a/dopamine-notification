import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { INotification } from 'src/app/interfaces/notification.interface';

@Injectable()
export class FirestoreService {
    collection: AngularFirestoreCollection<Array<INotification>>;

    constructor(
        private afs: AngularFirestore
    ) {
        this.collection = afs.collection('notifications');
    }

    getNotifications() {
        return this.collection;
    }

    deleteDoc(id: string) {
        return this.collection.doc(id).delete();
    }

    addDoc(data: INotification) {
        data.id = this.afs.createId();
        return this.collection.doc(data.id).set(data);
    }
}
