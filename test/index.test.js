const { friend } = require('./../src/index');

describe('friend', () => {
    it('Should return [] when the input is empty', () => {
        expect(friend([])).toStrictEqual([]);
    });

    it('Should return [] when the input is ["Kieran"]', () => {
        expect(friend(["Kieran"])).toStrictEqual([]);
    });

    it('Should return ["Ryan] when the input is ["Ryan"]', () => {
        expect(friend(["Ryan"])).toStrictEqual(["Ryan"]);
    });

    it('Should return ["Ryan] when the input is ["Ryan", "Kieran"]', () => {
        expect(friend(["Ryan", "Kieran", "Mark"])).toStrictEqual(["Ryan", "Mark"]);
    });
});