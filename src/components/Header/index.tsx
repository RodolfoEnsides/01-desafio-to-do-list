
import { PlusCircle } from 'phosphor-react';

import styles from './Header.module.css'
import todoLogo from '../../assets/todo-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
        <img src={todoLogo} alt="" />

        <form className={styles.formNewTasks}>
          <input type='text' placeholder='Adicione uma nova tarefa' />
          <button>Criar <PlusCircle size={16}/> </button>
        </form>
    </header>
  )
}

export default Header
