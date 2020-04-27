import { TodoPage } from "../page-object/TodoPage"

describe('todo actions test', () => {
    const todoPage = new TodoPage
    const todoText = 'hello'

    beforeEach(() => {
        todoPage.navigateDelay()
        todoPage.addToDo(todoText)
    })

    it('add to do', () => {
        todoPage.verifyTodoText(todoText)
        todoPage.verifyTodoIsNotSelected(1)
    })

    it('select the todo', () => {
        todoPage.selectToDo(1)  
        todoPage.verfyTodoIsSelected(1)
        todoPage.verifyTodoMarkCompleted()
    })

    it('clear todo', () => {
        todoPage.selectToDo(1)  
        todoPage.clearToDo()
        todoPage.verifyClearTodo()
    })
})