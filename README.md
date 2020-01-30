# CONFIRMATION MODAL MATERIAL

![CI](https://github.com/Viceri/confirmation-modal/workflows/CI/badge.svg)

##### Como instalar:
`npm i @viceri/confirmation-modal --save`

##### Dependências:
Esse componente as seguintes dependências:
1. @angular/material;

##### Como configurar:
Importe os seguintes módulos em seu NgModule:
1. ConfirmationModalModule;
2. MatDialogModule;
3. BrowserAnimationsModule;

Na propriedade entryComponents coloque o ConfirmationModalComponent;

Após isso, seu NgModule deverá parecer como isso:
````javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConfirmationModalModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [ConfirmationModalComponent],
  bootstrap: [AppComponent]
})
````

Adicione o theme do componente no seu styles.scss:
`@import './node_modules/@viceri/confirmation-modal/theme.scss';`

##### Como usar:
Para chamar o modal e capturar sua resposta, basta injetar o ConfirmationModalService:

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private confirmationModalService: ConfirmationModalService) {
  }

  show() {
    this.confirmationModalService.open(new ConfirmationModal()).subscribe(console.log);
  }
}
```
Chame o método open passando como parâmetro um ConfirmationModal e assine o observable. O observable é do tipo boolean.

A classe ConfirmationModal é usada para customizar a mensagem do modal, texto dos botões.

```javascript
export class ConfirmationModal {
  header: {
    title: string,
  };
  message: string;
  actions: {
    whenTrue: string,
    whenFalse: string,
  };

  constructor() {
    this.header = {
      title: 'Confirmar ação'
    };
    this.message = 'Esta ação não poderá ser desfeita! Tem certeza que deseja continuar?';
    this.actions = {
      whenFalse: 'Não',
      whenTrue: 'Sim'
    };
  }
}
```
Uma vez configurado, o modal deverá ter essa aparência:

![Exemplo](https://raw.githubusercontent.com/Viceri/confirmation-modal/master/cbimage.jpg)

