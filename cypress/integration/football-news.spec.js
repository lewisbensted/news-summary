describe('test', function(){
    it('test', function(){
        cy.intercept("https://content.guardianapis.com/search?q=football*", {fixture:'guardian-football-news.json'})
        cy.visit('/')
        cy.get("#0").contains("Football transfer rumours: Lacazette or Aubameyang to Barcelona?")
        cy.get("#9").contains("The Euro 2020 Fiver: meanwhile, in club football …")
        
    })
})