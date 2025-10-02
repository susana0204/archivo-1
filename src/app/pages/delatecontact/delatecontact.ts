import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contact-service';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Contact, NewContact } from '../../interfaces/contact';


@Component({
  selector: 'app-delatecontact',
  imports: [RouterLink],
  templateUrl: './delatecontact.html',
  styleUrl: './delatecontact.scss'
})
export class Delatecontact {

authService = inject(AuthService);
  contactsService = inject(ContactsService);
errorEnBack: any;

  
    }

   