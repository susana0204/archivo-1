import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { ContactsPage } from './pages/contacts-page/contact';
import { ContactDetails } from './pages/contact-details/contact-details';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { RegisterPage } from './pages/register/register';
import { Grupos } from './pages/grupos/grupos';
import { onlyLoggedUserGuard } from './guards/only-logged-user-guard';
import { onlyPublicGuardGuard } from './guards/only-public-user-guard';
import { Addcontact } from './pages/addcontact/addcontact';
import { Delatecontact } from './pages/delatecontact/delatecontact';

export const routes: Routes = [
    {
        path: "login",
        component: Login,
        canActivate: [onlyPublicGuardGuard]
    },

    {
        path: "register",
        component: RegisterPage,
        canActivate: [onlyPublicGuardGuard]
    },

    {
        path: "",
        component: LoggedLayout,
        canActivate: [onlyLoggedUserGuard],
        children: [
            {
                path: "",
                component: ContactsPage
            }, {
                path: "contacts/new",
                component: Addcontact
            
            },
            {
                path: "contacts/:idContact/edit",
                component: Addcontact
            },

            {
                path: "contacts/:idContacto",
                component: ContactDetails
            },

            {
                path: "grupos",
                component: Grupos
            }

        ]
    },
];
