describe('pingPong', function(){
  it("counts to a number specified by an html assigned variable named userGiven", function(){
    expect(pingPong("userGiven")).to.equal("1,2,3,4,5,6,7,8,9,10");
  })
/*  it("returns ping for any number which is a multiple of 3", function(){
    expect(pingPong("4")).to.equal("1,2,ping,4");
  })
  it("returns pong for any number which is a multiple of 5", function(){
    expect(pingPong("6")).to.equal("1,2,ping,4,pong");
  })*/
});
