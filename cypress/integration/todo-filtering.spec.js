import { TodoPage } from "../page-object/TodoPage"

describe('filtering', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addToDo('hello 1')
        todoPage.addToDo('hello 2')
        todoPage.addToDo('hello 3')
        todoPage.selectToDo(2)
    })

    it('Active', () => {
        todoPage.filterActive()
        todoPage.verifyTodoCount(2)
    })

    it('Completed', () => {
        todoPage.filterCompleted()
        todoPage.verifyTodoCount(1)
    })

    it('All', () => {
        todoPage.filterAll()
        todoPage.verifyTodoCount(3)
    })
})