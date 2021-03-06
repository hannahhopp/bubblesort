describe('Merge Sort', function(){
  beforeEach(function () {
    spyOn(window, 'split').and.callThrough();
    //spyOn(window, 'comparisons').and.callThrough();
  });

  // describe('Split Array function', function() {
  //   it('is able to split an even-length array into two halves', function() {
  //     let arr = [1, 2, 3, 4];
  //     expect(split(arr)).toEqual([[1, 2], [3, 4]]);
  //   });

  //   it('is able to split an odd-length array into two halves', function() {
  //     let arr = [1, 2, 3, 4, 5];
  //     expect(split(arr)).toEqual([[1, 2], [3, 4, 5]]);
  //   });
  // });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      let arr = [5, 4, 3, 2, 1];
      let arr2 = [10, 66, 2, 1, 3, 4, 7];
      expect(split(arr)).toEqual([1, 2, 3, 4, 5]);
      expect(split(arr2)).toEqual([1, 2, 3, 4, 7, 10, 66]);
    });
  });
});
