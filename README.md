# 🎲 Tic-Tac-Toe (Jogo da Velha) com React + Vite

![Tic-Tac-Toe Gameplay](https://media.giphy.com/media/3o7aDczpC2i23j2VfG/giphy.gif) 
> *Substitua pelo GIF ou imagem do seu projeto.*

> Um clássico Jogo da Velha construído com as tecnologias mais modernas do ecossistema React. Este projeto foi desenvolvido como um exercício prático para aprimorar habilidades em componentes, gerenciamento de estado e roteamento com React Router, proposto pela professora [Ana Paula Müller Giancoli](https://www.linkedin.com/in/ana-paula-m%C3%BCller-giancoli).

**[🔗 Acesse a demonstração ao vivo](https://tic-tac-toe-react-vite.vercel.app/)** 
> *Substitua pelo link da sua aplicação.*

---

## ✨ Funcionalidades

-   **🎮 Jogo para Dois Jogadores:** Alterne entre 'X' e 'O' em uma partida clássica.
-   **🏆 Detecção de Vencedor:** O jogo identifica automaticamente uma vitória ou um empate.
-   **📊 Placar em Tempo Real:** Acompanhe a pontuação dos jogadores.
-   **📱 Interface Responsiva:** Jogue em qualquer dispositivo, seja no desktop ou no celular.
-   **🚀 Navegação Fluida:** Transição suave entre as páginas usando React Router.

---

## 🚀 Tecnologias Utilizadas

-   [React 19](https://react.dev/)
-   [Vite](https://vitejs.dev/)
-   [React Router DOM](https://reactrouter.com/)
-   [React Bootstrap Icons](https://icons.getbootstrap.com/)
-   [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
-   [ESLint](https://eslint.org/)

---

## 🏁 Como Começar

Siga os passos abaixo para rodar o projeto localmente.

1.  **Clone o repositório:**
  ```bash
  git clone https://github.com/Victor-Lis/Tic-Tac-Toe-React.git
  cd Tic-Tac-Toe-React
  ```

2.  **Instale as dependências:**
  ```bash
  pnpm install
  ```

3.  **Inicie o servidor de desenvolvimento:**
  ```bash
  pnpm dev
  ```

4.  Abra [http://localhost:5173](http://localhost:5173) no seu navegador para ver o projeto.

### Outros Scripts

-   `pnpm dev`: Inicia o servidor de desenvolvimento.
-   `pnpm build`: Gera a versão de produção do projeto.
-   `pnpm preview`: Visualiza a versão de produção localmente.

---

## 📁 Estrutura de Pastas

A estrutura do projeto foi organizada para promover a modularidade e a reutilização de código:

```
src/
  components/ui/      # Componentes de UI genéricos (Button, Container, etc.)
  modules/game/       # Componentes específicos do jogo (Grid, Scoreboard)
  pages/              # Páginas da aplicação (Home, Game)
  providers/          # Context Providers (GameProvider, RouterProvider)
  utils/              # Funções utilitárias (ex: calculate-winner)
```

---

## 📄 Licença

Este projeto é para uso acadêmico e educacional.

## 👨‍💻 Autor

-   **Victor Lis Bronzo** - [LinkedIn](https://www.linkedin.com/in/victor-lis-bronzo/)