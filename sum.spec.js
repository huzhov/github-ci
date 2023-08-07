const sum = (a, b) => a + b

describe('sum', () => { 
    it('should add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })

    it('should add 2 + 2 to equal 4', () => {
        expect(sum(2, 2)).toBe(4)
    })

    it('should add 3 + 2 to equal 4', () => {
        expect(sum(1, 2)).toBe(4)
    })
})