import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Perte } from '../model/perte';

@Injectable({
  providedIn: 'root'
})
export class PerteService {

  private perteCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.perteCollection = this.firestore.collection<any>('perte');
   }

   addPerte(perte: Perte): Promise<void> {
    return this.firestore.collection('perte').add(perte).then(() => {}); // Ajouter .then(() => {}) pour ne pas avoir de problème avec le type de retour.
  }


  getPerte(): Observable<{ Pertes: Perte[] }> {
    return this.perteCollection.valueChanges({ idField: 'id' })
      .pipe(
        map(pertes => ({
          Pertes: pertes,
        }))
      );
  }
  




// Mettre à jour un aliment dans la collection 'aliments'
// updatePerte(id: string, perte: Partial<Perte>): Promise<void> {
//   return this.firestore.collection('perte').doc(id).update(Perte);
// }

// Supprimer un aliment de la collection 'aliments'
deletePerte(id: string): Promise<void> {
  return this.firestore.collection('pertes').doc(id).delete();
}
}

