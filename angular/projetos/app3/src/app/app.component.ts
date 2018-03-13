import { Component, OnInit } from '@angular/core';

//Importar o firebase no componente de mais alto nível da aplicação
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  public ngOnInit(): void {

    //Inicializa o Firebase com base nas informações existentes no console
    //da aplicação do Firebase.
    firebase.initializeApp({
      apiKey: "AIzaSyCEJFJkwFBQKypX84oDVHBXhNMofJ_nD7k",
      authDomain: "jta-instagram-clone-e182f.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-e182f.firebaseio.com",
      projectId: "jta-instagram-clone-e182f",
      storageBucket: "jta-instagram-clone-e182f.appspot.com",
      messagingSenderId: "1011790947824"
    });

  }

}
