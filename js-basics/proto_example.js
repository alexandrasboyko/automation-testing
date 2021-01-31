function Parent () {

}

Parent.prototype.hello = function () {
    console.log('HEllo')
}


function ConstructorExamle () {
    this.test = function () {
        console.log('!')
    }
}

ConstructorExamle.prototype = Object.create(Parent.prototype)
ConstructorExamle.prototype.constructor = ConstructorExamle


ConstructorExamle.prototype.ownHello = function() {
    console.log('Own hello')
}

const a = new ConstructorExamle()
a.test()
a.ownHello()
a.hello()
