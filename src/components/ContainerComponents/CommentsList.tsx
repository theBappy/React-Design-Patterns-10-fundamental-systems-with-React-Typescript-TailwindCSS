interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}
interface CommentsListProps {
    comments: Comment | null;
}

const CommentsList = ({comments}: CommentsListProps) => {

    const {id, name, email, body} = comments || {};


   
  return (
    <div>
        <p><strong>Comment Id: </strong>{id}</p>
        <h1><strong>Comment Name: </strong>{name}</h1>
        <p><strong>Comment Email: </strong>{email}</p>
        <p><strong>Comment Body: </strong>{body}</p>
    </div>
  )
}

export default CommentsList