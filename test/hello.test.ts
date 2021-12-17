import {describe} from 'mocha';
import {expect} from 'chai';
import {Hello} from "../src/hello";

describe('Hello', () =>
{
    describe('test hello()', () =>
    {
        it('should welcome Dolly', () =>
        {
            let testObj = new Hello();
            expect(testObj.hello('Dolly')).to.equal('hello Dolly');
        });
    });
});

