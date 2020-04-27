import { TodoPage } from "../page-object/TodoPage"

describe('todo actions test visual validations', () => {
    const todoPage = new TodoPage

    before(() => {
        // todoPage.navigate()
        todoPage.navigateDifferentColor()
    })

    beforeEach(() => {
        cy.eyesOpen({
            appName: 'test TODO app', 
            batchName: 'test TODO batch',
            browser: [
                {name: 'chrome', width: 1024, height: 768},
                {name: 'chrome', width: 800, height: 600},
                {name: 'firefox', width: 1024, height: 768},
                {deviceName: 'iPhone X'},
            ]
        })
    })

    it('add to do', () => {
        cy.eyesCheckWindow('Empty todo list')
        todoPage.addToDo("hello 1")
        cy.eyesCheckWindow('todo list with 1 todo')
        todoPage.addToDo("hello 2")
        cy.eyesCheckWindow('todo list with 2 todo')
    })

    afterEach(() => {
        cy.eyesClose()
    })
})