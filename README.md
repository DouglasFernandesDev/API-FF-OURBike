![](https://i.imgur.com/ezak8N3.png)

Bem-vindo(a). Projeto para o FF Hackathon!

O objetivo deste desafio é criar um app que crie pontos de suporte, estacionamento e manutenção de bicicletas para
os ciclistas, transformando a cidade em um local mais amigável para as pessoas e suas
bikes, estimulando seu uso no dia a dia?


[Projeto no FIGMA](https://www.figma.com/file/54FPEu4Utcr1SSyDfXWCDY/OURBIKE) <br/>
[Landing Page](https://ffourbikes.netlify.app/) <br/>
[Video](https://www.youtube.com/watch?v=8D8phLFXCEY) <br/>



# 🧠 Contexto API

O desafio é implementar um app para conectar ciclistas com pontos de serviços, com urbanismo e vários benefícios:

- [ ] Pontos de serviços
- [ ] Comunidade de ciclistas
- [ ] Seguradora e Segurança
- [ ] Conveniência
- [ ] Recompensas
- [ ] Criar solicitações
- [ ] Finalizar solicitação
- [ ] Check in e check out no camping
- [ ] Manutenção e equipamentos
- [ ] Pacotes
- [ ] Novidades com kit de produtos

## 📋 Instruções

Para rodar a API na sua máquina siga os passos a seguir!

- Instale o NPM e o YARN 
```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo npm install -g yarn
```
- Digite o comando yarn Install para instalar as dependências
- Digite no terminal o seguinte comando
 `yarn dev` na pasta `API-FF-OURBike`


## 😎 API também conta com uma aplicação online na AWS - http://18.229.117.22:3333/

- Endpoints:<br/>
` 
/sessions   /       Login com e-mail e senha.  
`<br/>
`
/bikes?status=true     /        Mostra as bikes que foram cadastradas.  
`<br/>
`
/bikes 
`<br/>
`
/bikes/bike_id
`<br/>
`
/bikes/bike_id/reserve
`<br/>
`
/reserves?user_id
`<br/>
`
/reserves/cancel
`
---
