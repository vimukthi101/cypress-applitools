export class TodoPage{
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    navigateDelay() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=4000')
    }

    navigateDifferentColor() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/?different-title-color')
    }

    addToDo(todoText){
        cy.get('.new-todo', {timeout:6000}).type(todoText + '{enter}')
    }

    getTodo(index){
        return cy.get('li:nth-child('+index+') > .view > .toggle')
    }
    
    selectToDo(index){
        this.getTodo(index).click()
    }

    clearToDo(){
        cy.contains('Clear completed').click()
    }

    filterAll(){
        cy.get(':nth-child(1) > a').click()
    }

    filterActive(){
        cy.get(':nth-child(2) > a').click()
    }

    filterCompleted(){
        cy.get(':nth-child(3) > a').click()
    }

    //assertions start
    verifyTodoIsNotSelected(index){
        this.getTodo(index).should('not.be.checked')
    }

    verfyTodoIsSelected(index){
        this.getTodo(index).should('be.checked')
    }

    verifyTodoText(todoText){
        cy.get('label').should('have.text',todoText)
    }

    verifyTodoMarkCompleted(){
        cy.get('label').should('have.css','text-decoration-line','line-through')
    }

    verifyClearTodo(){
        cy.get('.todo-list').should('not.have.descendants','li')
    }

    verifyTodoCount(count){
        cy.get('.todo-list li').should('have.length', count)
    }
}