import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/SideBar/Sidebar";

import './global.css'
import styles from './App.module.css';

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/GuiAlcantaraa.png',
        name: 'Guilherme Alcantara',
        role: 'Desenvolvedor de Sistemas'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 😎', },
        { type: 'paragraph', content: 'Desenvolvendo uma rede social na nova trilha de React' },
        { type: 'link', content: 'github.com/GuiAlcantaraa' }
      ],
      publishedAt: new Date('2022-10-25 10:22:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'Web Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 😎', },
        { type: 'paragraph', content: 'Desenvolvendo uma rede social na nova trilha de React' },
        { type: 'link', content: 'github.com/GuiAlcantaraa' }
      ],
      publishedAt: new Date('2022-10-25 10:22:00')
    },
  ];


  return (
    <div>
      <Header />


      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}


