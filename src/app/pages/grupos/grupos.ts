import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-grupos',
  imports: [],
  templateUrl: './grupos.html',
  styleUrl: './grupos.scss'
})
export class Grupos {
authService = inject(AuthService);
}
