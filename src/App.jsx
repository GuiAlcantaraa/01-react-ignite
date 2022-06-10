import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/SideBar/Sidebar";

import './global.css'
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />


      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          <Post
            author="Guilherme alcantara"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, totam laboriosam! Hic delectus omnis officiis culpa velit animi incidunt expedita veritatis consequuntur. Modi accusamus soluta eveniet. Impedit saepe perferendis odit."
          />

          <Post
            author="Guilherme alcantara"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, totam laboriosam! Hic delectus omnis officiis culpa velit animi incidunt expedita veritatis consequuntur. Modi accusamus soluta eveniet. Impedit saepe perferendis odit."
          />

        </main>
      </div>
    </div>
  )
}


