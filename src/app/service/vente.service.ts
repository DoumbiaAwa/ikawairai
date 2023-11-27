import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Vente } from '../model/vente';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private venteCollection: AngularFirestoreCollection<any>;
  constructor(private firestore: AngularFirestore) { 
    this.venteCollection = this.firestore.collection<any>('vente');
  }

  getFirestore(): AngularFirestore {
    return this.firestore;
  }
  
  getVente(): Observable<{ ventes: Vente[]}> {
    return this.venteCollection.valueChanges({ idField: 'id' })
      .pipe(
        map(ventes => {
          console.log('Categories retrieved:', ventes);
          return {
            ventes,
          };
        })
      );
  }
}












