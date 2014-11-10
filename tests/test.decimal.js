var assert = chai.assert;

var start = 250;
var end = 750;
var inc1 = 1;
var inc2 = 1;
var inc3 = 1;
var re, v, str, result;
for (lo=start;lo<end;lo+=inc1){
  for (hi=lo;hi<end;hi+=inc2){
    suite('.range(' + lo + ',' + hi + ' )', function(){
      this.timeout(5000);
      test('regex equals math', function(){
        re = new RegExp(sw10.range(lo,hi));
        for (test=start;test<end;test+=inc3){
          v = (test >= lo) && (test <= hi);
          str = '' + test;
          result = !!str.match(re);
          assert.equal(result,v,test);
        }
      });
    });
  }
}
