describe("The ColorsQuest Factory Function", function() {
    it('Should allow me to add 2 shapes', function(){
        
        const colorQuestManager = ColorQuestManager();

        colorQuestManager.addShape("blue", 7);
        colorQuestManager.addShape("orange", 3);
      
        assert.equal(2, colorQuestManager.getShapes().length);
    });

    it('Should allow me to add 3 shapes', function(){
        const colorQuestManager = ColorQuestManager();

        colorQuestManager.addShape("blue", 7);
        colorQuestManager.addShape("orange", 3);
        colorQuestManager.addShape("orange", 8);
      
        const shapeList = colorQuestManager.getShapes();
        assert.equal(3, shapeList.length);
      
    });

    it('Should be able to find all blue shapes', function(){
        
        const colorQuestManager = ColorQuestManager();

        //Add some shapes
        colorQuestManager.addShape("blue", 7);
        colorQuestManager.addShape("yellow", 3);
        colorQuestManager.addShape("blue", 8);
        colorQuestManager.addShape("orange", 8);

        //Act
        //filter shapes
        const filteredShapes = colorQuestManager.filter({
            color: 'blue'
        })

        //Checking that the right number of shapes was returned
        assert.equal(2, filteredShapes.length);

        assert.deepEqual([
            {color: 'blue', number: 7},
            {color: 'blue', number: 8}],
            filteredShapes
        );
      
    });

    it('Should be able to find all yellow shapes', function(){
        
        const colorQuestManager = ColorQuestManager();

        //Add some shapes
        colorQuestManager.addShape("blue", 7);
        colorQuestManager.addShape("yellow", 3);
        colorQuestManager.addShape("blue", 8);
        colorQuestManager.addShape("orange", 8);
        colorQuestManager.addShape("yellow", 6);

        //Act

        //filter shapes
        const params = {
            color: 'yellow'
        }
        const filteredShapes = colorQuestManager.filter(params)

        //Checking that the right number of shapes was returned
        assert.equal(2, filteredShapes.length);
      
        assert.deepEqual([
            {color: 'yellow', number: 3},
            {color: 'yellow', number: 6}],
            filteredShapes
        );
      
    });

    it('Should be able to find all the number shapes', function(){
        
        const colorQuestManager = ColorQuestManager();

        //Add some shapes
        colorQuestManager.addShape("orange", 3);
        colorQuestManager.addShape("yellow", 3);
        colorQuestManager.addShape("blue", 8);
        colorQuestManager.addShape("orange", 8);
        colorQuestManager.addShape("yellow", 6);

        //Act

        //filter shapes
        const params = {
            number: 3
        }
        const filteredShapes = colorQuestManager.filter(params)

        //Checking that the right number of shapes was returned
        assert.equal(2, filteredShapes.length);
      
        assert.deepEqual([
            {color: 'orange', number: 3},
            {color: 'yellow', number: 3}],
            filteredShapes
        );
      
    });

    it('Should be able to find all the number shapes', function(){
        
        const colorQuestManager = ColorQuestManager();

        //Add some shapes
        colorQuestManager.addShape("orange", 7);
        colorQuestManager.addShape("yellow", 4);
        colorQuestManager.addShape("blue", 7);
        colorQuestManager.addShape("orange", 8);
        colorQuestManager.addShape("yellow", 6);

        //Act

        //filter shapes
        const params = {
            number: 7
        }
        const filteredShapes = colorQuestManager.filter(params)

        //Checking that the right number of shapes was returned
        assert.equal(2, filteredShapes.length);
      
        assert.deepEqual([
            {color: 'blue', number: 7},
            {color: 'orange', number: 7}],
            filteredShapes
        );
      
    });

    it('Should be able to find all the orange number 7 shapes', function(){
        
        const colorQuestManager = ColorQuestManager();

        //Add some shapes
        colorQuestManager.addShape("orange", 7);
        colorQuestManager.addShape("yellow", 4);
        colorQuestManager.addShape("blue", 7);
        colorQuestManager.addShape("orange", 7);
        colorQuestManager.addShape("orange", 7);
        colorQuestManager.addShape("yellow", 6);

        //Act

        //filter shapes
        const params = {
            number: 7,
            color: 'orange'
        }
        const filteredShapes = colorQuestManager.filter(params)

        //Checking that the right number of shapes was returned
        assert.equal(3, filteredShapes.length);
      
        assert.deepEqual([
            {color: 'orange', number: 7},
            {color: 'orange', number: 7},
            {color: 'orange', number: 7}],
            filteredShapes
        );
      
    });


    
});