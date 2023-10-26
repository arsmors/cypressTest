// it('creates a new list and a new card', () => {
//   cy.visit('/board/27870821313')
//   cy.get('[data-cy="add-list"]').click();
//     cy.get('[data-cy="add-list-input"]')
//     .type('new list{enter}')
//     cy.get('[data-cy="new-task"]').click()
//     cy.get('[data-cy="task-input"]').click()
//     .type('abc{enter}')
// })

// it.only('new test', () => {
// cy.visit('/')
// cy.get('[data-cy="star"]')
// .first()
// .click({force:true})
// });

// it.only('new test2', () => {
//      cy.visit('/board/22861529906')
//   cy.get('[data-cy="add-list"]').click();
//     cy.get('[data-cy="add-list-input"]')
//     .type('new list{enter}')

//     cy.get('[data-cy="new-task"]').click()
//     cy.get('[data-cy="task-input"]').click()
//     .type('abc{enter}')

//     cy.get('[data-cy="new-task"]').click()
//     cy.get('[data-cy="task-input"]').click()
//     .type('abc2{enter}')

//     cy.get('[data-cy="task"]')
//     .should('have.length', 2)

//     cy.get('[data-cy="task"]')
//     .should('be.visible')
// })

// it.only('new test2', () => {
//     cy.visit('/board/22861529906')
//  cy.get('[data-cy="add-list"]').click();
//    cy.get('[data-cy="add-list-input"]')
//    .type('new list{enter}')

//    cy.get('[data-cy="new-task"]').click()
//    cy.get('[data-cy="task-input"]').click()
//    .type('abc{enter}')

//    cy.get('[data-cy="task-done"]').check()

//    cy.get('[data-cy="task-done"]').should('be.checked')

//    cy.get('[data-cy="list-name"]').should('have.value', 'new list')

// })

it.only('new test3', () => {
    cy.visit('/board/22861529906')

    cy.get('[data-cy="tasks-list"]')
    .contains('[data-cy="task"]', 'abc')

    cy.get('[data-cy="tasks-list"]')
    .eq(1)
    .contains('[data-cy="task"]', 'xyz')


})