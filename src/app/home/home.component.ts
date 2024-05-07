import { Component } from '@angular/core';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  faUserEdit: any = faUserEdit;
  faTrash: any = faTrash;
  showDeleteMessage: boolean = false; // Variable pour afficher le message de suppression

  deleteCompte() {
    $('#deleteModal').modal('show');
  }

  confirmDelete() {
    // Logique pour supprimer le compte
    this.showDeleteMessage = true; // Afficher le message de suppression
  }

  editCompte() {
    // Fonction d'édition du compte
  }
}
