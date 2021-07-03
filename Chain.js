class Chain{

    constructor(bodyA,bodyB){

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.5,
        }

        this.chain=Constraint.create(options)

        World.add(myWorld,this.chain)

    }

    show(){
        push()
        stroke("black")
        strokeWeight(4)
        var chainPos=this.chain.bodyA.position
        var chainPos2=this.chain.bodyB.position
        line(chainPos.x,chainPos.y,chainPos2.x,chainPos2.y)
        pop()
    }

}