import { TodoPage } from "../page-object/TodoPage"

const todoPage = new TodoPage

it('Navigate to home page', ()=>{
    todoPage.navigate()
})