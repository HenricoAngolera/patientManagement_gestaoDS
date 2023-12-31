# patientManagement_gestaoDS

Front-end destinado para gestão de pacientes.

## Estrutura de pastas:

As pastas desse projeto estão organizadas da seguinte forma:

- `assets`
  - Aqui estão arquivos de imagens, logos ou demais arquivos de mídia do projeto.
- `components`
  - Todos os componentes do nosso projeto, as pequenas partes que juntas formas nossa página.
- `data`
  - Aqui estão os arquivos que armazenam dados e manipulam eles no nosso projeto. No caso são dados de pacientes.
- `pages`
  - São nossas páginas, compostas por nosso componentes citados acima.
- `services`
  - É nossso vínculo com a API externa de busca de dados pelo endereço utilizando o CEP.
- `styles`
  - Aqui estão os estilos gerais da nossa aplicação. As variáveis de cores e fontes e tudo que estiliza nosso projeto.   

## Como utilizar:

Para rodar localmente, siga os seguintes passos:

Primeiramente, você precisa tem instalado Git e NodeJS para executar este projeto.

Com tudo instalado, você pode clonar este projeto, rodando no teminal com a pasta da sua preferência:

```bash
    git clone https://github.com/HenricoAngolera/patientManagement_gestaoDS.git
```
ou
```bash
    git clone git@github.com:HenricoAngolera/patientManagement_gestaoDS.git
```

Com o projeto clonado, você entra na pasta que foi criada após esse processo:

```bash
    cd patientManagement_gestaoDS
```

Para instalar os pacotes da pasta node_modules, rodar o seguinte comando:

```bash
    npm install
```

Então, rodar o seguinte comando para iniciar o projeto:

```bash
    npm run dev
```

Após isso, acesse em seu navegador o endereço que aparecer no terminal. Provavelmente vai ser [http://http://localhost:5173/](http://http://localhost:5173/)

## Feedback

Se você tiver algum feedback, por favor me deixe saber por meio de henrico.an@gmail.com
