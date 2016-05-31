function greeter(name) {
    var name = name;

    return {
        greet: function() {
            return "Hi " + name;
        }
    }
}

console.log(greeter("Emil").greet());