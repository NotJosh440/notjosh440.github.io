(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This Block Utility example must run unsandboxed');
    }

    class HelloWorld {
        getInfo() {
            return {
                id: 'Extension',
                name: 'Extension',
                blocks: [
                    {
                        opcode: 'negitive',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '-[NUMBER]',
                        arguments: {
                            NUMBER: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                            }
                        }
                    },
                    {
                        opcode: "isBetween",
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: "is [INPUT] between [LOW] and [HIGH]?",
                        arguments: {
                            INPUT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '2'
                            },
                            LOW: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '1'
                            },
                            HIGH: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '3'
                            },
                        }
                    },
                    {
                        opcode: "convertNumbers",
                        blockType: Scratch.BlockType.REPORTER,
                        text: "convert [INPUT] from base [INPUTBASE] to base [OUTPUTBASE]",
                        arguments: {
                            INPUT: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: '10'
                            },
                            INPUTBASE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "BASES",
                            defaultValue: '10'
                            },
                            OUTPUTBASE: {
                            type: Scratch.ArgumentType.STRING,
                            menu: "BASES",
                            defaultValue: '2'
                            }
                        }
                    },
                    {
                        opcode: 'getSpriteName',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'sprite name',
                    }
                ],
                menus: {
                    BASES: {
                    acceptReporters: true,
                    items: ['2', '3', '4', '5', '6', '7', '8', '9', '10']
                    }
                }
            };
        }

        negitive(args) {
            return args.NUMBER * -1;
        }

        isBetween(args){
            if(args.LOW <= args.HIGH){ //LOW is less than HIGH
                if(args.LOW <= args.INPUT && args.INPUT <= args.HIGH){ //LOW is less than INPUT and INPUT is less than HIGH
                    return true;
                } else {
                    return false;
                }
                } else { //HIGH is less than LOW
                if(args.LOW >= args.INPUT && args.INPUT >= args.HIGH){ //LOW is greater than INPUT and INPUT is greater than HIGH
                    return true;
                } else {
                    return false;
                }
            }
        }

        convertNumbers(args){
            for(var i=0; i<args.INPUT.toString().length; i++){
                if(args.INPUT.toString()[i] >= parseInt(args.INPUTBASE)){
                    return "not a valid number";
                }
            }
            if(args.INPUTBASE != "10" && args.OUTPUTBASE != "10"){ //if neither the INPUTBASE or OUTPUTBOASE is 10
                var a = parseInt(args.INPUT, args.INPUTBASE);
                return a.toString(args.OUTPUTBASE); 
            }else if(args.INPUTBASE == "10"){
                return parseInt(args.INPUT).toString(args.OUTPUTBASE); //takes the INPUT in base 10 and convert it to the OUTPUTBASE
            }else{
                return parseInt(args.INPUT, args.INPUTBASE); //takes the INPUT in base INPUTBASE and outputs it in base 10
            }
        }

        getSpriteName(args, util) {
            return util.target.getName();
        }
    }

    Scratch.extensions.register(new HelloWorld());
})(Scratch);