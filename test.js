'use strict';

const
  assert  = require('assert')
, lists   = require('.')
;

describe('*list* is a data structure', () => {
  it('arrayToList: build up a list structure from an array', () => {
    assert.deepEqual(lists.arrayToList([10, 20]), {value: 10, rest: {value: 20, rest: null}});
  });

  it('listToArray: produce an array from a list', () => {
    assert.deepEqual(lists.listToArray(lists.arrayToList([10, 20, 30])), [10, 20, 30]);
  });

  it('testing prepend(elem, list) => new list that adds the element to the front of the input list', () => {
    assert.deepEqual(lists.prepend(10, lists.prepend(20, null)), {value: 10, rest: {value: 20, rest: null}});
  });

  it('nth: take a list and a number, return the element at the given position in the list', () => {
    assert.deepEqual(lists.nth(lists.arrayToList([10, 20, 30]), 1), 20);
  });
});
