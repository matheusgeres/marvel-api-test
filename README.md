# marvel-api-test

Teste automatizado da API da Marvel

Pré-requisito: NodeJS >= 11.0.0
 
*(Minha recomendação pessoal de leitura para instalação do Node.JS: https://medium.com/collabcode/como-instalar-node-js-no-linux-corretamente-ubuntu-debian-elementary-os-729fb4c92f2d)*

## Instruções de instalação

### Instale as dependências de teste globalmente
```bash
npm install -g mocha mocha-steps
```

Ou se preferir usar o Yarn.
```bash
yarn global add mocha mocha-steps
```


### Instale as dependências de teste no projeto
```bash
npm i
```

Ou se preferir usar o Yarn.
```bash
yarn install
```

### Na pasta do projeto execute o teste

#### Todos os testes
```bash
mocha --recursive --require mocha-steps --timeout 0 
```

#### Individual
```bash
mocha test/character/1-list.spec.js --require mocha-steps --timeout 0
```
Lembrando que no teste individual fica a critério de escolher qual teste será executado.

### O resultado no terminal será o seguinte
![exemplo](doc/exemplo-execucao-teste.png)
