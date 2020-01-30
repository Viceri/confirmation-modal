export class ConfirmationModal {
  header: {
    title: string,
    icon: string,
  };
  message: string;
  actionResponse: boolean;
  actions: {
    whenTrue: string,
    whenFalse: string,
  };

  constructor() {
    this.header = {
      title: 'Confirmar ação',
      icon: 'close'
    };
    this.message = 'Esta ação não poderá ser desfeita! Tem certeza que deseja continuar?';
    this.actionResponse = false;
    this.actions = {
      whenFalse: 'Não',
      whenTrue: 'Sim'
    };
  }
}
