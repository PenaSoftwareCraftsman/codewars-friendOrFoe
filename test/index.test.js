const { friend } = require('./../src/index');

describe('friend', () => {
    it('Should return [] when the input is empty', () => {
        expect(friend([])).toStrictEqual([]);
    });

    it('Should return [] when the input is ["Kieran"]', () => {
        expect(friend(["Kieran"])).toStrictEqual([]);
    });
});