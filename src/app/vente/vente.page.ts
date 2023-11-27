// vente.page.ts
import { Component, OnInit } from '@angular/core';
import { VenteService } from '../service/vente.service';
import { doc, updateDoc, DocumentReference} from 'firebase/firestore';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore'
@Component({
  selector: 'app-vente',
  templateUrl: './vente.page.html',
  styleUrls: ['./vente.page.scss'],
})
export class VentePage implements OnInit {
  ventes: any[] = [];
  quantite: number = 1; // Ajoutez cette propriété
  montantTotal: number = 0; // Ajoutez cette propriété
  vente: any; 
  constructor(private venteService: VenteService) {}

  ngOnInit(): void {
    this.getVente();
  }

  getVente(): void {
    this.venteService.getVente().subscribe((response) => {
      this.ventes = response.ventes;
      this.vente = this.ventes[0]; // Assignez la valeur de la première vente du tableau à la propriété vente
    });
  }

  public alertButtons = [
    {
      text: 'OK',
      handler: () => this.updateVente(), // Ajoutez un handler pour le bouton OK
    },
  ];
  public alertInputs = [
    {
      type: 'Quantité',
      placeholder: 'Quantité',
      min: 1,
      max: 100,
      value: this.quantite.toString(), // Associez la valeur à la propriété quantité
      handler: (event: any) => this.onQuantiteChange(event),
    },
    {
      type: 'Prix',
      placeholder: 'Prix',
      min: 1,
      max: 100,
    },
  ];

  // Ajoutez cette fonction pour calculer le montant total
  onQuantiteChange(event: any) {
    this.quantite = event.value; // Mettez à jour la propriété quantité
    this.montantTotal = this.quantite * this.vente.prix; // Calculez le montant total
  }

  // Ajoutez cette fonction pour mettre à jour la quantité dans Firebase
  updateVente() {
    if (this.vente) {
      const firestoreRef = this.venteService.getFirestore();
      const venteRef: DocumentReference = doc(firestoreRef.firestore, 'vente', this.vente.id);
      const newNombre = this.vente.nombre - this.quantite;
  
      updateDoc(venteRef, { nombre: newNombre })
        .then(() => {
          console.log('Vente mise à jour avec succès');
        })
        .catch((error: any) => {
          console.error('Erreur lors de la mise à jour de la vente:', error);
        });
    } else {
      console.error('Aucune vente disponible pour la mise à jour.');
    }
}
}