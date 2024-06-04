namespace generators {
    function* simpleGenerator() {
        yield 1;
        yield 2;
        yield 3;
    }

    const simpleGen = simpleGenerator();
    console.log('nothing generated so far');
    console.log('Next', simpleGen.next());
    console.log('Next', simpleGen.next());
    console.log('Next', simpleGen.next());
    console.log('Next', simpleGen.next());
    console.log();

    function* genaretId() {
        let id = 0;
        while (true) {
            yield ++id;
        }
    }

    const genId = genaretId();
    for (let i = 0; i < 5; i++) {
        console.log(`Next ${i}: `, genId.next());
    }
    console.log();
}
