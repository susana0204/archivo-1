import { Component, input, OnInit, viewChild } from '@angular/core';
import { Contact, NewContact } from '../../interfaces/contact';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contact-service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  imports: [FormsModule],
  templateUrl: './addcontact.html',
  styleUrl: './addcontact.scss'
})
export class Addcontact implements OnInit {
  authService = inject(AuthService);
  contactsService = inject(ContactsService);
  errorEnBack = false;
  idContact = input<number>();
  contactOrignal: Contact | undefined = undefined
  form = viewChild<NgForm>('newContactForm');
  router = inject(Router);

  async ngOnInit() {
    if (this.idContact()) {
      this.contactOrignal = await this.contactsService.getContactById(this.idContact()!);
      this.form()?.setValue({
        firstName: this.contactOrignal!.firstName,
        lastName: this.contactOrignal!.lastName,
        address: this.contactOrignal!.address,
        email: this.contactOrignal!.email,
        image: this.contactOrignal!.image,
        number: this.contactOrignal!.number,
        company: this.contactOrignal!.company,
        isFavourite: this.contactOrignal!.isFavorite,
      })
    }
  }
  async handleFormSubmission(form: NgForm) {
    this.errorEnBack = false;
    const nuevoContacto: NewContact = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      image: form.value.image,
      number: form.value.number,
      company: form.value.company,
      isFavorite: form.value.isFavorite
    }

    let res: Contact | undefined;
    if (this.idContact()) {
      res = await this.contactsService.editContact({ ...nuevoContacto, id: this.idContact()!})
    } else {
      res = await this.contactsService.createContact(nuevoContacto);
    }

    if (!res) {
      this.errorEnBack = true;
      return
    };

    this.router.navigate(["/contacts", res.id]);
  }

}


