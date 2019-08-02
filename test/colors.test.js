describe("The ColorsQuest Factory Function", function() {
    it('Should allow me to add 2 shapes', function(){
        
        const colorQuestManager = ColorQuestManager();

        colorQuestManager.addShape("blue", 7);
        colorQuestManager.addShape("orange", 3);
      
        assert.equal(2, colorQuestManager.getShapes().length);

        //Checking
        const shapeOne = colorQuestManager.getShapes()[0];
        assert.equal("blue", colorQuestManager.shapeOne.color);
        // assert.equal(7, colorQuestManager.shapeOne.number);

        // const shapeTwo = colorQuestManager.getShapes()[1];
        // assert.equal("orange", colorQuestManager.shapeTwo.color);
        // assert.equal(3, colorQuestManager.shapeTwo.number);
      
    });

    it('Should allow me to add 2 shapes', function(){
        
        const colorQuestManager = colorQuestManager();

        colorQuestManager.addShapes("blue", 7);
        colorQuestManager.addShapes("orange", 3);
      
        assert.equal(2, colorQuestManager.getShapes());

        //Checking
        const shapeOne = colorQuestManager.getShapes()[0];
        assert.equal("blue", colorQuestManager.shapeOne.color);
        assert.equal(7, colorQuestManager.shapeOne.number);

        const shapeTwo = colorQuestManager.getShapes()[1];
        assert.equal("orange", colorQuestManager.shapeTwo.color);
        assert.equal(3, colorQuestManager.shapeTwo.number);
      
    });

    
});