import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Joaquim";

  userData = {
    email: "eder@gmail.com",
    role: "Programador",
  };

  text = "Texto que sera apresentado na pagina depois de criado";

  user = {
    login: "eder.login",
    senha: "*****",
    data_acesso: "18/04/2022",
  };

  title = 'curso-angular';
}
