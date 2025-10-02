import { Component, inject, NgModule, OnInit } from '@angular/core';
import { ContactListItem } from '../../contact-list-item/contact-list-item';
import { RouterModule } from '@angular/router';

import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contact-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [RouterModule, ContactListItem, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactsPage implements OnInit {
  ngOnInit(): void {
    this.contactsService.getContacts();
  }
  authService = inject(AuthService);
  contactsService = inject(ContactsService); 

  


}
  







