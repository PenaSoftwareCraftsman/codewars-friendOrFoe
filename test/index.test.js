const { friend } = require('./../src/index');

describe('friend', () => {
    it('Should return [] when the input is empty', () => {
        expect(friend([])).toStrictEqual([]);
    });
});