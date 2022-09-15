import React, {useRef} from 'react';

//* can  also be an interface:
type INewTodoProps = {
  addTodo: (name: string) => void
}


const NewTodo: React.FC<INewTodoProps> = (props) => {
  //* use Generics so that we know what we'll pass as parameters:   
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    console.log(enteredText);
    props.addTodo(enteredText)
  }


  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label >Todo Text</label>
        <input type="text" id='todo-text' ref={textInputRef} />
      </div>
    </form>
  );
};

export default NewTodo;