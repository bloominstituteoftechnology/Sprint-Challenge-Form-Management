import { add } from './Comps/Card'
describe('card.js',  () => {
    
    describe('add()', () => {
        it('should return the sum of numbers passed in', () => {
            //expect
            expect(add(2, 3)).toBe(5);
            expect(add(8)).toBe(8);
        })
    })
});

