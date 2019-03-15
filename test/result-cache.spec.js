describe('result-cache', function() {
    it('eviction test', function(done) {
        const resultCache = new window["mini-iframe-rpc"].ResultCache({capacity: 2});
        resultCache.setCachedResult('a', 1);
        resultCache.setCachedResult('b', 2);
        resultCache.setCachedResult('c', 3);
        expect(resultCache.callIds.length).toEqual(2);
        expect(resultCache.hasCachedResult('a')).toEqual(false);
        expect(resultCache.hasCachedResult('b')).toEqual(true);
        expect(resultCache.hasCachedResult('c')).toEqual(true);
        done();
    });


    it('rewriting a callIds result works as expected', function(done) {
        const resultCache = new window["mini-iframe-rpc"].ResultCache({capacity: 2});
        resultCache.setCachedResult('a', 1);
        resultCache.setCachedResult('b', 2);
        resultCache.setCachedResult('a', 3);
        resultCache.setCachedResult('c', 4);
        expect(resultCache.results).toEqual({'a':3, 'c':4});
        done();
    });

});

