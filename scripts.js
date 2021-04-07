async function permissao() {
    
    try {

        // verificar se o usuario ja deu pemissão
        if(Notification.permission == 'granted') {
            return alert('Você ja deu permissão!');
        }

        // pergunta se o usuario que receber notificações
        await Notification.requestPermission();

        // verificar se o usuario aceitou receber notificações
        if(Notification.permission == 'granted') {

            // retorna uma notificação
            return new Notification('Ola', {
                body: 'Obrigado por ter permitido eu te notificar'
            });

        }

        // verificar se o usuario não deu permissão
        if(Notification.permission == 'denied') {
            return alert('Notificação bloqueada')
        }
        
    }catch(erro) {

        return alert(`Erro de permição: ${erro}`)

    }
    
}

async function notificar() {

    try {

        // verificar se o usuario permitiu notificações
        if(Notification.permission == 'granted') {

            // retorna uma notificação
            return new Notification('Titulo de uma notificação', {
                body: 'Corpo de uma notificacão'
            })
    
        }
        
        // verificar se o usuario não deu permissão
        if(Notification.permission == 'denied') {
            return alert('Você bloqueio notificaçãoes')
        }

        // verificar se o usuario ja respondeu a quele negócio que pergunta se você que notificação ou não 
        if(Notification.permission == 'default') {
            return alert('Você ainda não deu permicão para receber notificações')
        }

    }catch(erro) {

        return alert(`Erro de permição: ${erro}`)

    }

}

