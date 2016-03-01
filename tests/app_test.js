describe("The Add function", function(){
    describe("Check result 1 + 2", function(){
        it("should return 3 when 1 add 2", function (){
            expect(Add(1, 2)).toBe(3);
        });
    });
    describe("Check result 4 + 7", function(){
        it("should return 11 when 4 add 7", function (){
            expect(Add(4, 7)).toBe(11);
        });
    });
});
