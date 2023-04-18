import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from "./Post.module.css"
import { useState } from "react"

export function Post({ author, publishedAt, content}){
    
    const [comments, setComments] = useState ([
        'Post mto bacana, hein?!'
    ])

    const [newComment, setNewComment] = useState('')
    
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()
        const newCommentText = newComment;
        setComments([...comments, newCommentText])
        setNewComment('')
    }

    function deleteComment(comment){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        });
        
        setComments(commentsWithoutDeleteOne);
    }
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>       

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>           
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a>{line.content}</a></p>;
                    }
                })}
            </div>

            <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    onChange={(e) => setNewComment(e.target.value)}
                    value={newComment}
                    placeholder="Deixe seu comentário">
                </textarea>

                <footer>
                        <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return(
                        <Comment 
                            content={comment}
                            key={content}
                            deleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}