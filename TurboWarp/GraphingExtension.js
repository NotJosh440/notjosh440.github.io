async function loadExtension() {
    try {
        let complex = await import('complex.js');
        // Use the 'complex' functionality here or within the context where it's needed
        // For instance:
        const result = complex.someFunction();
        console.log(result);
    } catch (error) {
        console.error('Error loading extension:', error);
    }
}

// Call the asynchronous function to load the extension
loadExtension();

class GraphingExtension {
    getInfo() {
        return {
        id: 'findamount',
        name: 'Graphing Extension',
        blocks: [
            {
                opcode: 'FindAmount',
                blockType: Scratch.BlockType.REPORTER,
                text: 'find amount of [CHAR] in [VAR]',
                arguments: {
                    CHAR: {
                    type: Scratch.ArgumentType.STRING
                    },
                    VAR: {
                    type: Scratch.ArgumentType.STRING
                    }
                }    
            },
            {
                opcode: 'Power',
                blockType: Scratch.BlockType.REPORTER,
                text: '[ONE] ^ [TWO]',
                arguments:{
                    ONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    TWO: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                }
            },
            {
                opcode: 'FloatToFraction',
                blockType: Scratch.BlockType.REPORTER,
                text: 'float to fraction [NUM]',
                arguments:{
                    NUM: {
                        type: Scratch.ArgumentType.NUMBER
                    }
                }
            },
            {
                opcode: 'ComplexPow',
                blockType: Scratch.BlockType.REPORTER,
                text: 'complex [RONE][IONE] ^ [RTWO][ITWO]',
                arguments:{
                    RONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    IONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    RTWO: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    ITWO: {
                        type: Scratch.ArgumentType.NUMBER
                    }
                }
            },
            {
                opcode: 'ComplexAdd',
                blockType: Scratch.BlockType.REPORTER,
                text: 'complex [RONE][IONE] + [RTWO][ITWO]',
                arguments:{
                    RONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    IONE: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    RTWO: {
                        type: Scratch.ArgumentType.NUMBER
                    },
                    ITWO: {
                        type: Scratch.ArgumentType.NUMBER
                    }
                }
            }
        ]
        };
    }

    FindAmount(args) {
        return args.VAR.match(/args.CHAR/g);
    }

    Power(args){
        return Math.pow(args.ONE, args.TWO);
    }

    FloatToFraction(args) {
        x = args.NUM;
        const tolerance = 1.0E-9;
        let sign = '';
        if (x < 0) {
            sign = '-';
            x = Math.abs(x);
        }
    
        let h1 = 1;
        let h2 = 0;
        let k1 = 0;
        let k2 = 1;
        let b = x;
        
        do {
            const a = Math.floor(b);
            let temp = h1;
            h1 = a * h1 + h2;
            h2 = temp;
            temp = k1;
            k1 = a * k1 + k2;
            k2 = temp;
            b = 1 / (b - a);
        } while (Math.abs(x - h1 / k1) > x * tolerance);
    
        return `${sign}${h1}/${k1}`;
    }

    ComplexPow(args){
        const result =  complex(args.RONE, args.IONE).pow(args.RTWO, args.ITWO);
        const formattedResult = `${result.re} + ${result.im}i`;
        return formattedResult;
    }

    ComplexAdd(args){
        const result =  complex(args.RONE, args.IONE).add(args.RTWO, args.ITWO);
        const formattedResult = `${result.re} + ${result.im}i`;
        return formattedResult;
    }

}

Scratch.extensions.register(new GraphingExtension());  
