/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.99995,-5.99995,-5.69395);
myNode0.point2.set(11.9999,11.9999,11.3889);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);

/* définition du node n°1*/
const myNode1 = object.addCylinder();
myNode1.point1.set(0.011,0.001,4.28205);
myNode1.point2.set(0,0,0.4629);
myNode1.radius.set(4.987);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(-2.31495,-0.09295,-4.74495);
myNode2.point2.set(4.6299,1.0139,4.6619);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);

/* définition du node n°3*/
const myNode3 = object.addFuseOperation();
myNode3.leftArg.set(myNode1);
myNode3.rightArg.set(myNode2);

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-1.852,-18.2,-4.745);
myNode4.point2.set(3.704,36.4,9.028);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);

/* définition du node n°5*/
const myNode5 = object.addCutOperation();
myNode5.leftArg.set(myNode3);
myNode5.rightArg.set(myNode4);

/* définition du node n°6*/
const myNode6 = object.addCylinder();
myNode6.point1.set(0.002,0.004,-4.74495);
myNode6.point2.set(0,0,9.4909);
myNode6.radius.set(4.623);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-18.2,1.852,-4.745);
myNode7.point2.set(36.4,16.348,9.028);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);

/* définition du node n°9*/
const myNode9 = object.addCylinder();
myNode9.point1.set(0.084,-0.005,0.921);
myNode9.point2.set(0,0,17.279);
myNode9.radius.set(2.289);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode9.innerRotation.angle.set(2.094392392986396);

/* définition du node n°10*/
const myNode10 = object.addCylinder();
myNode10.point1.set(0.129,-0.003,-0.093);
myNode10.point2.set(0,0,1.944);
myNode10.radius.set(1.854);
myNode10.innerRotation.center.set(0,0,0);
myNode10.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode10.innerRotation.angle.set(2.094392392986396);

/* définition du node n°11*/
const myNode11 = object.addBox();
myNode11.point1.set(-2.315,-0.093,-4.745);
myNode11.point2.set(4.63,18.293,4.662);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);

/* définition du node n°12*/
const myNode12_1 = object.addFuseOperation();
myNode12_1.leftArg.set(myNode9);
myNode12_1.rightArg.set(myNode9);
const myNode12_2 = object.addFuseOperation();
myNode12_2.leftArg.set(myNode12_1);
myNode12_2.rightArg.set(myNode10);
myNode12 = object.addFuseOperation();
myNode12.leftArg.set(myNode12_2);
myNode12.rightArg.set(myNode11);

/* définition du node n°13*/
const myNode13 = object.addCutOperation();
myNode13.leftArg.set(myNode8);
myNode13.rightArg.set(myNode12);

/* définition du node n°14*/
const myNode14 = object.addFuseOperation();
myNode14.leftArg.set(myNode5);
myNode14.rightArg.set(myNode13);

/* définition du node n°15*/
const myNode15 = object.addCommonOperation();
myNode15.leftArg.set(myNode0);
myNode15.rightArg.set(myNode14);
/*END Geometry Object Definition*/