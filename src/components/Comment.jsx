import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, deleteComment }){

    function handleDeleteComment(){
        deleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={"https://github.com/rafaelppereira.png"} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                       <div className={styles.authorAndTime}>
                            <strong>Rafael Pereira</strong>
                            <time title="11 de Maio ás 11:13h" dateTime="2022-05-11 08:13:22">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentários">
                            <Trash size={24} />
                        </button> 
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}