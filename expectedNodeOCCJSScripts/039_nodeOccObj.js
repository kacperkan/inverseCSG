/*FINAL CSG Conversion of Input Object*/
 

/* définition du node n°0*/
const myNode0 = object.addBox();
myNode0.point1.set(-5.9989,-5.7459,-2.3619);
myNode0.point2.set(5.9989,5.7449,2.3609000000000004);
myNode0.innerRotation.center.set(0,0,0);
myNode0.innerRotation.axis.set(0.0,0.0,0.0);
myNode0.innerRotation.angle.set(0.0);
myNode0.innerTranslation.vector.set(0,0,0);
myNode0.isVisible = false;

/* définition du node n°1*/
const myNode1 = object.addBox();
myNode1.point1.set(-4.1549,-4.7879,-1.4709);
myNode1.point2.set(-2.7830999999999997,-4.392099999999999,1.5698999999999999);
myNode1.innerRotation.center.set(0,0,0);
myNode1.innerRotation.axis.set(0.0,0.0,0.0);
myNode1.innerRotation.angle.set(0.0);
myNode1.innerTranslation.vector.set(0,0,0);
myNode1.isVisible = false;

/* définition du node n°2*/
const myNode2 = object.addBox();
myNode2.point1.set(2.7841,-1.7129,-1.9679);
myNode2.point2.set(4.4029,3.3468999999999998,-1.1000999999999999);
myNode2.innerRotation.center.set(0,0,0);
myNode2.innerRotation.axis.set(0.0,0.0,0.0);
myNode2.innerRotation.angle.set(0.0);
myNode2.innerTranslation.vector.set(0,0,0);
myNode2.isVisible = false;

/* définition du node n°3*/
const myNode3 = object.addCylinder();
myNode3.point1.set(-1.125,-0.702,3.4661);
myNode3.point2.set(-1.125,-0.702,4.9989);
myNode3.radius.set(0.448);
myNode3.innerRotation.center.set(0,0,0);
myNode3.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode3.innerRotation.angle.set(89.99978954085029);
myNode3.isVisible = false;

/* définition du node n°4*/
const myNode4 = object.addBox();
myNode4.point1.set(-2.7819,-4.7879,-0.2289);
myNode4.point2.set(3.7069000000000005,3.3469000000000007,1.5699);
myNode4.innerRotation.center.set(0,0,0);
myNode4.innerRotation.axis.set(0.0,0.0,0.0);
myNode4.innerRotation.angle.set(0.0);
myNode4.innerTranslation.vector.set(0,0,0);
myNode4.isVisible = false;

/* définition du node n°5*/
const myNode5 = object.addCylinder();
myNode5.point1.set(-3.603,-0.704,0.2311);
myNode5.point2.set(-3.603,-0.704,1.9679);
myNode5.radius.set(0.994);
myNode5.innerRotation.center.set(0,0,0);
myNode5.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode5.innerRotation.angle.set(179.9999999997983);
myNode5.isVisible = false;

/* définition du node n°6*/
const myNode6 = object.addBox();
myNode6.point1.set(-2.7819,-4.7879,-1.9679);
myNode6.point2.set(3.4629,-2.9391,1.5698999999999999);
myNode6.innerRotation.center.set(0,0,0);
myNode6.innerRotation.axis.set(0.0,0.0,0.0);
myNode6.innerRotation.angle.set(0.0);
myNode6.innerTranslation.vector.set(0,0,0);
myNode6.isVisible = false;

/* définition du node n°7*/
const myNode7 = object.addBox();
myNode7.point1.set(-18.0994,-4.39045,-1.09845);
myNode7.point2.set(3.7074999999999996,-2.93855,-0.22954999999999992);
myNode7.innerRotation.center.set(0,0,0);
myNode7.innerRotation.axis.set(0.0,0.0,0.0);
myNode7.innerRotation.angle.set(0.0);
myNode7.innerTranslation.vector.set(0,0,0);
myNode7.isVisible = false;

/* définition du node n°8*/
const myNode8 = object.addCutOperation();
myNode8.leftArg.set(myNode6);
myNode8.rightArg.set(myNode7);
myNode8.isVisible = false;

/* définition du node n°9*/
const myNode9 = object.addBox();
myNode9.point1.set(3.7091,-4.5529,-1.4709);
myNode9.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode9.innerRotation.center.set(0,0,0);
myNode9.innerRotation.axis.set(0.0,0.0,0.0);
myNode9.innerRotation.angle.set(0.0);
myNode9.innerTranslation.vector.set(0,0,0);
myNode9.isVisible = false;

/* définition du node n°10*/
const myNode10_1 = myNode2.clone();
myNode10_1.isVisible = false;
const myNode10_2 = object.addFuseOperation();
myNode10_2.leftArg.set(myNode10_1);
myNode10_2.rightArg.set(myNode3);
myNode10_2.isVisible = false;
const myNode10_3 = object.addFuseOperation();
myNode10_3.leftArg.set(myNode10_2);
myNode10_3.rightArg.set(myNode4);
myNode10_3.isVisible = false;
const myNode10_4 = object.addFuseOperation();
myNode10_4.leftArg.set(myNode10_3);
myNode10_4.rightArg.set(myNode5);
myNode10_4.isVisible = false;
const myNode10_5 = object.addFuseOperation();
myNode10_5.leftArg.set(myNode10_4);
myNode10_5.rightArg.set(myNode8);
myNode10_5.isVisible = false;
myNode10 = object.addFuseOperation();
myNode10.leftArg.set(myNode10_5);
myNode10.rightArg.set(myNode9);
myNode10.isVisible = false;
myNode10.isVisible = false;

/* définition du node n°11*/
const myNode11 = object.addCylinder();
myNode11.point1.set(3.605,-0.703,-18.0995);
myNode11.point2.set(3.605,-0.703,-0.7275999999999989);
myNode11.radius.set(0.747);
myNode11.innerRotation.center.set(0,0,0);
myNode11.innerRotation.axis.set(0.0,0.0,0.0);
myNode11.innerRotation.angle.set(0.0);
myNode11.isVisible = false;

/* définition du node n°12*/
const myNode12 = object.addCylinder();
myNode12.point1.set(-1.483,-0.114,-18.0995);
myNode12.point2.set(-1.483,-0.114,18.099400000000003);
myNode12.radius.set(2.733);
myNode12.innerRotation.center.set(0,0,0);
myNode12.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode12.innerRotation.angle.set(118.84175815446184);
myNode12.isVisible = false;

/* définition du node n°13*/
const myNode13 = object.addBox();
myNode13.point1.set(-18.0994,-4.39045,-0.22945);
myNode13.point2.set(3.7074999999999996,18.099449999999997,18.09945);
myNode13.innerRotation.center.set(0,0,0);
myNode13.innerRotation.axis.set(0.0,0.0,0.0);
myNode13.innerRotation.angle.set(0.0);
myNode13.innerTranslation.vector.set(0,0,0);
myNode13.isVisible = false;

/* définition du node n°14*/
const myNode14 = object.addCylinder();
myNode14.point1.set(3.605,-0.703,-0.727);
myNode14.point2.set(3.605,-0.703,1.5710000000000002);
myNode14.radius.set(0.747);
myNode14.innerRotation.center.set(0,0,0);
myNode14.innerRotation.axis.set(0.0,0.0,0.0);
myNode14.innerRotation.angle.set(0.0);
myNode14.isVisible = false;

/* définition du node n°15*/
const myNode15 = object.addCutOperation();
myNode15.leftArg.set(myNode13);
myNode15.rightArg.set(myNode14);
myNode15.isVisible = false;

/* définition du node n°16*/
const myNode16 = object.addBox();
myNode16.point1.set(4.40455,-4.39045,-1.96845);
myNode16.point2.set(18.09945,3.3474499999999994,-0.23055000000000003);
myNode16.innerRotation.center.set(0,0,0);
myNode16.innerRotation.axis.set(0.0,0.0,0.0);
myNode16.innerRotation.angle.set(0.0);
myNode16.innerTranslation.vector.set(0,0,0);
myNode16.isVisible = false;

/* définition du node n°17*/
const myNode17 = object.addBox();
myNode17.point1.set(3.46555,-1.71345,-18.0995);
myNode17.point2.set(18.09945,3.3474500000000003,-0.7275999999999989);
myNode17.innerRotation.center.set(0,0,0);
myNode17.innerRotation.axis.set(0.0,0.0,0.0);
myNode17.innerRotation.angle.set(0.0);
myNode17.innerTranslation.vector.set(0,0,0);
myNode17.isVisible = false;

/* définition du node n°18*/
const myNode18 = object.addCylinder();
myNode18.point1.set(3.451,-1.694,-1.969);
myNode18.point2.set(3.451,-1.694,18.099999999999998);
myNode18.radius.set(0.26);
myNode18.innerRotation.center.set(0,0,0);
myNode18.innerRotation.axis.set(0.0,0.0,0.0);
myNode18.innerRotation.angle.set(0.0);
myNode18.isVisible = false;

/* définition du node n°19*/
const myNode19 = object.addCutOperation();
myNode19.leftArg.set(myNode17);
myNode19.rightArg.set(myNode18);
myNode19.isVisible = false;

/* définition du node n°20*/
const myNode20 = object.addCylinder();
myNode20.point1.set(-3.603,-0.701,-1.57045);
myNode20.point2.set(-3.603,-0.701,18.099449999999997);
myNode20.radius.set(0.428);
myNode20.innerRotation.center.set(0,0,0);
myNode20.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode20.innerRotation.angle.set(179.9999999997983);
myNode20.isVisible = false;

/* définition du node n°21*/
const myNode21_1 = myNode11.clone();
myNode21_1.isVisible = false;
const myNode21_2 = object.addFuseOperation();
myNode21_2.leftArg.set(myNode21_1);
myNode21_2.rightArg.set(myNode12);
myNode21_2.isVisible = false;
const myNode21_3 = object.addFuseOperation();
myNode21_3.leftArg.set(myNode21_2);
myNode21_3.rightArg.set(myNode15);
myNode21_3.isVisible = false;
const myNode21_4 = object.addFuseOperation();
myNode21_4.leftArg.set(myNode21_3);
myNode21_4.rightArg.set(myNode16);
myNode21_4.isVisible = false;
const myNode21_5 = object.addFuseOperation();
myNode21_5.leftArg.set(myNode21_4);
myNode21_5.rightArg.set(myNode19);
myNode21_5.isVisible = false;
myNode21 = object.addFuseOperation();
myNode21.leftArg.set(myNode21_5);
myNode21.rightArg.set(myNode20);
myNode21.isVisible = false;
myNode21.isVisible = false;

/* définition du node n°22*/
const myNode22 = object.addCutOperation();
myNode22.leftArg.set(myNode10);
myNode22.rightArg.set(myNode21);
myNode22.isVisible = false;

/* définition du node n°23*/
const myNode23 = object.addBox();
myNode23.point1.set(-3.7069,-4.7879,-1.9679);
myNode23.point2.set(-2.7841,-2.9391,-1.1000999999999999);
myNode23.innerRotation.center.set(0,0,0);
myNode23.innerRotation.axis.set(0.0,0.0,0.0);
myNode23.innerRotation.angle.set(0.0);
myNode23.innerTranslation.vector.set(0,0,0);
myNode23.isVisible = false;

/* définition du node n°24*/
const myNode24 = object.addBox();
myNode24.point1.set(-3.70745,-18.0995,-1.96845);
myNode24.point2.set(-3.43655,-4.554599999999999,-1.47255);
myNode24.innerRotation.center.set(0,0,0);
myNode24.innerRotation.axis.set(0.0,0.0,0.0);
myNode24.innerRotation.angle.set(0.0);
myNode24.innerTranslation.vector.set(0,0,0);
myNode24.isVisible = false;

/* définition du node n°25*/
const myNode25 = object.addCutOperation();
myNode25.leftArg.set(myNode23);
myNode25.rightArg.set(myNode24);
myNode25.isVisible = false;

/* définition du node n°26*/
const myNode26 = object.addBox();
myNode26.point1.set(-18.0989,0.2741,-1.9679);
myNode26.point2.set(3.706900000000001,3.6449,1.5698999999999999);
myNode26.innerRotation.center.set(0,0,0);
myNode26.innerRotation.axis.set(0.0,0.0,0.0);
myNode26.innerRotation.angle.set(0.0);
myNode26.innerTranslation.vector.set(0,0,0);
myNode26.isVisible = false;

/* définition du node n°27*/
const myNode27 = object.addBox();
myNode27.point1.set(3.4661,0.0371,-1.4709);
myNode27.point2.set(18.0989,0.27190000000000003,1.5698999999999999);
myNode27.innerRotation.center.set(0,0,0);
myNode27.innerRotation.axis.set(0.0,0.0,0.0);
myNode27.innerRotation.angle.set(0.0);
myNode27.innerTranslation.vector.set(0,0,0);
myNode27.isVisible = false;

/* définition du node n°28*/
const myNode28 = object.addFuseOperation();
myNode28.leftArg.set(myNode26);
myNode28.rightArg.set(myNode27);
myNode28.isVisible = false;

/* définition du node n°29*/
const myNode29 = object.addBox();
myNode29.point1.set(-2.7819,-18.0989,-1.9679);
myNode29.point2.set(4.149900000000001,0.2718999999999987,-0.23110000000000008);
myNode29.innerRotation.center.set(0,0,0);
myNode29.innerRotation.axis.set(0.0,0.0,0.0);
myNode29.innerRotation.angle.set(0.0);
myNode29.innerTranslation.vector.set(0,0,0);
myNode29.isVisible = false;

/* définition du node n°30*/
const myNode30 = object.addCylinder();
myNode30.point1.set(3.465,3.397,-18.0989);
myNode30.point2.set(3.465,3.397,-1.4730999999999987);
myNode30.radius.set(0.244);
myNode30.innerRotation.center.set(0,0,0);
myNode30.innerRotation.axis.set(0.0,0.0,0.0);
myNode30.innerRotation.angle.set(0.0);
myNode30.isVisible = false;

/* définition du node n°31*/
const myNode31 = object.addFuseOperation();
myNode31.leftArg.set(myNode29);
myNode31.rightArg.set(myNode30);
myNode31.isVisible = false;

/* définition du node n°32*/
const myNode32 = object.addCommonOperation();
myNode32.leftArg.set(myNode28);
myNode32.rightArg.set(myNode31);
myNode32.isVisible = false;

/* définition du node n°33*/
const myNode33 = object.addBox();
myNode33.point1.set(-4.1549,2.9761,-1.9679);
myNode33.point2.set(-2.7830999999999997,3.6449000000000003,1.5698999999999999);
myNode33.innerRotation.center.set(0,0,0);
myNode33.innerRotation.axis.set(0.0,0.0,0.0);
myNode33.innerRotation.angle.set(0.0);
myNode33.innerTranslation.vector.set(0,0,0);
myNode33.isVisible = false;

/* définition du node n°34*/
const myNode34 = object.addCylinder();
myNode34.point1.set(3.606,-0.701,-1.5699);
myNode34.point2.set(3.606,-0.701,0.7258999999999998);
myNode34.radius.set(0.747);
myNode34.innerRotation.center.set(0,0,0);
myNode34.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode34.innerRotation.angle.set(179.9999999997983);
myNode34.isVisible = false;

/* définition du node n°35*/
const myNode35 = object.addBox();
myNode35.point1.set(-4.4029,-2.9369,-1.4709);
myNode35.point2.set(-3.7091,3.3469,1.5698999999999999);
myNode35.innerRotation.center.set(0,0,0);
myNode35.innerRotation.axis.set(0.0,0.0,0.0);
myNode35.innerRotation.angle.set(0.0);
myNode35.innerTranslation.vector.set(0,0,0);
myNode35.isVisible = false;

/* définition du node n°36*/
const myNode36 = object.addBox();
myNode36.point1.set(-3.7069,-2.9369,-1.9679);
myNode36.point2.set(-2.7841,2.9739,-1.1000999999999999);
myNode36.innerRotation.center.set(0,0,0);
myNode36.innerRotation.axis.set(0.0,0.0,0.0);
myNode36.innerRotation.angle.set(0.0);
myNode36.innerTranslation.vector.set(0,0,0);
myNode36.isVisible = false;

/* définition du node n°37*/
const myNode37 = object.addCylinder();
myNode37.point1.set(-1.125,-0.702,-4.9989);
myNode37.point2.set(-1.125,-0.702,-3.7091);
myNode37.radius.set(0.448);
myNode37.innerRotation.center.set(0,0,0);
myNode37.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode37.innerRotation.angle.set(89.99978954085029);
myNode37.isVisible = false;

/* définition du node n°38*/
const myNode38 = object.addCylinder();
myNode38.point1.set(4.156,3.396,-1.5699);
myNode38.point2.set(4.156,3.396,1.4708999999999999);
myNode38.radius.set(0.248);
myNode38.innerRotation.center.set(0,0,0);
myNode38.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode38.innerRotation.angle.set(179.9999999997983);
myNode38.isVisible = false;

/* définition du node n°39*/
const myNode39_1 = myNode33.clone();
myNode39_1.isVisible = false;
const myNode39_2 = object.addFuseOperation();
myNode39_2.leftArg.set(myNode39_1);
myNode39_2.rightArg.set(myNode34);
myNode39_2.isVisible = false;
const myNode39_3 = object.addFuseOperation();
myNode39_3.leftArg.set(myNode39_2);
myNode39_3.rightArg.set(myNode35);
myNode39_3.isVisible = false;
const myNode39_4 = object.addFuseOperation();
myNode39_4.leftArg.set(myNode39_3);
myNode39_4.rightArg.set(myNode36);
myNode39_4.isVisible = false;
const myNode39_5 = object.addFuseOperation();
myNode39_5.leftArg.set(myNode39_4);
myNode39_5.rightArg.set(myNode37);
myNode39_5.isVisible = false;
myNode39 = object.addFuseOperation();
myNode39.leftArg.set(myNode39_5);
myNode39.rightArg.set(myNode38);
myNode39.isVisible = false;
myNode39.isVisible = false;

/* définition du node n°40*/
const myNode40 = object.addCylinder();
myNode40.point1.set(3.604,-0.702,-18.0995);
myNode40.point2.set(3.604,-0.702,0.7264000000000017);
myNode40.radius.set(0.428);
myNode40.innerRotation.center.set(0,0,0);
myNode40.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode40.innerRotation.angle.set(179.9999999997983);
myNode40.isVisible = false;

/* définition du node n°41*/
const myNode41 = object.addBox();
myNode41.point1.set(-18.0995,-1.43945,-1.96845);
myNode41.point2.set(-3.708599999999999,0.035450000000000204,-0.7275500000000001);
myNode41.innerRotation.center.set(0,0,0);
myNode41.innerRotation.axis.set(0.0,0.0,0.0);
myNode41.innerRotation.angle.set(0.0);
myNode41.innerTranslation.vector.set(0,0,0);
myNode41.isVisible = false;

/* définition du node n°42*/
const myNode42 = object.addBox();
myNode42.point1.set(-3.70745,-1.43945,-1.96845);
myNode42.point2.set(-2.78355,0.2724500000000001,-0.7275500000000001);
myNode42.innerRotation.center.set(0,0,0);
myNode42.innerRotation.axis.set(0.0,0.0,0.0);
myNode42.innerRotation.angle.set(0.0);
myNode42.innerTranslation.vector.set(0,0,0);
myNode42.isVisible = false;

/* définition du node n°43*/
const myNode43 = object.addCylinder();
myNode43.point1.set(-3.451,0.286,-18.1);
myNode43.point2.set(-3.451,0.286,-1.0990000000000002);
myNode43.radius.set(0.257);
myNode43.innerRotation.center.set(0,0,0);
myNode43.innerRotation.axis.set(0.0,0.0,0.0);
myNode43.innerRotation.angle.set(0.0);
myNode43.isVisible = false;

/* définition du node n°44*/
const myNode44 = object.addCutOperation();
myNode44.leftArg.set(myNode42);
myNode44.rightArg.set(myNode43);
myNode44.isVisible = false;

/* définition du node n°45*/
const myNode45 = object.addBox();
myNode45.point1.set(-4.40345,-1.71345,-1.96845);
myNode45.point2.set(-4.1575500000000005,0.2724500000000001,-0.7275500000000001);
myNode45.innerRotation.center.set(0,0,0);
myNode45.innerRotation.axis.set(0.0,0.0,0.0);
myNode45.innerRotation.angle.set(0.0);
myNode45.innerTranslation.vector.set(0,0,0);
myNode45.isVisible = false;

/* définition du node n°46*/
const myNode46 = object.addBox();
myNode46.point1.set(-4.40345,-1.71345,-1.96845);
myNode46.point2.set(-3.4365500000000004,18.099449999999997,-1.47255);
myNode46.innerRotation.center.set(0,0,0);
myNode46.innerRotation.axis.set(0.0,0.0,0.0);
myNode46.innerRotation.angle.set(0.0);
myNode46.innerTranslation.vector.set(0,0,0);
myNode46.isVisible = false;

/* définition du node n°47*/
const myNode47 = object.addFuseOperation();
myNode47.leftArg.set(myNode45);
myNode47.rightArg.set(myNode46);
myNode47.isVisible = false;

/* définition du node n°48*/
const myNode48 = object.addBox();
myNode48.point1.set(-3.708,0.036,-1.969);
myNode48.point2.set(-2.7830000000000004,3.348,-1.0990000000000002);
myNode48.innerRotation.center.set(0,0,0);
myNode48.innerRotation.axis.set(0.0,0.0,0.0);
myNode48.innerRotation.angle.set(0.0);
myNode48.innerTranslation.vector.set(0,0,0);
myNode48.isVisible = false;

/* définition du node n°49*/
const myNode49 = object.addCylinder();
myNode49.point1.set(-4.162,0.273,-1.969);
myNode49.point2.set(-4.162,0.273,-0.7270000000000001);
myNode49.radius.set(0.237);
myNode49.innerRotation.center.set(0,0,0);
myNode49.innerRotation.axis.set(0.0,0.0,0.0);
myNode49.innerRotation.angle.set(0.0);
myNode49.isVisible = false;

/* définition du node n°50*/
const myNode50 = object.addFuseOperation();
myNode50.leftArg.set(myNode48);
myNode50.rightArg.set(myNode49);
myNode50.isVisible = false;

/* définition du node n°51*/
const myNode51 = object.addCutOperation();
myNode51.leftArg.set(myNode47);
myNode51.rightArg.set(myNode50);
myNode51.isVisible = false;

/* définition du node n°52*/
const myNode52_1 = myNode40.clone();
myNode52_1.isVisible = false;
const myNode52_2 = object.addFuseOperation();
myNode52_2.leftArg.set(myNode52_1);
myNode52_2.rightArg.set(myNode41);
myNode52_2.isVisible = false;
const myNode52_3 = object.addFuseOperation();
myNode52_3.leftArg.set(myNode52_2);
myNode52_3.rightArg.set(myNode44);
myNode52_3.isVisible = false;
myNode52 = object.addFuseOperation();
myNode52.leftArg.set(myNode52_3);
myNode52.rightArg.set(myNode51);
myNode52.isVisible = false;
myNode52.isVisible = false;

/* définition du node n°53*/
const myNode53 = object.addCutOperation();
myNode53.leftArg.set(myNode39);
myNode53.rightArg.set(myNode52);
myNode53.isVisible = false;

/* définition du node n°54*/
const myNode54 = object.addBox();
myNode54.point1.set(-4.4029,-4.5529,-1.4709);
myNode54.point2.set(-3.7091,-2.9391000000000003,1.5698999999999999);
myNode54.innerRotation.center.set(0,0,0);
myNode54.innerRotation.axis.set(0.0,0.0,0.0);
myNode54.innerRotation.angle.set(0.0);
myNode54.innerTranslation.vector.set(0,0,0);
myNode54.isVisible = false;

/* définition du node n°55*/
const myNode55 = object.addBox();
myNode55.point1.set(3.4661,-18.0989,-1.9679);
myNode55.point2.set(4.1509,3.346899999999998,18.0989);
myNode55.innerRotation.center.set(0,0,0);
myNode55.innerRotation.axis.set(0.0,0.0,0.0);
myNode55.innerRotation.angle.set(0.0);
myNode55.innerTranslation.vector.set(0,0,0);
myNode55.isVisible = false;

/* définition du node n°56*/
const myNode56 = object.addBox();
myNode56.point1.set(-2.7819,2.9761,-1.9679);
myNode56.point2.set(3.4629,3.6449000000000003,-1.4731);
myNode56.innerRotation.center.set(0,0,0);
myNode56.innerRotation.axis.set(0.0,0.0,0.0);
myNode56.innerRotation.angle.set(0.0);
myNode56.innerTranslation.vector.set(0,0,0);
myNode56.isVisible = false;

/* définition du node n°57*/
const myNode57 = object.addFuseOperation();
myNode57.leftArg.set(myNode55);
myNode57.rightArg.set(myNode56);
myNode57.isVisible = false;

/* définition du node n°58*/
const myNode58 = object.addBox();
myNode58.point1.set(-2.7819,2.9761,-18.0989);
myNode58.point2.set(3.7069000000000005,3.6449000000000003,-0.23110000000000142);
myNode58.innerRotation.center.set(0,0,0);
myNode58.innerRotation.axis.set(0.0,0.0,0.0);
myNode58.innerRotation.angle.set(0.0);
myNode58.innerTranslation.vector.set(0,0,0);
myNode58.isVisible = false;

/* définition du node n°59*/
const myNode59 = object.addBox();
myNode59.point1.set(3.4661,0.2741,-18.0989);
myNode59.point2.set(3.7069,3.6449,-1.1001000000000012);
myNode59.innerRotation.center.set(0,0,0);
myNode59.innerRotation.axis.set(0.0,0.0,0.0);
myNode59.innerRotation.angle.set(0.0);
myNode59.innerTranslation.vector.set(0,0,0);
myNode59.isVisible = false;

/* définition du node n°60*/
const myNode60 = object.addFuseOperation();
myNode60.leftArg.set(myNode58);
myNode60.rightArg.set(myNode59);
myNode60.isVisible = false;

/* définition du node n°61*/
const myNode61 = object.addCommonOperation();
myNode61.leftArg.set(myNode57);
myNode61.rightArg.set(myNode60);
myNode61.isVisible = false;

/* définition du node n°62*/
const myNode62 = object.addBox();
myNode62.point1.set(-18.0989,0.0371,-18.0989);
myNode62.point2.set(4.402899999999999,3.6449000000000003,-0.23110000000000142);
myNode62.innerRotation.center.set(0,0,0);
myNode62.innerRotation.axis.set(0.0,0.0,0.0);
myNode62.innerRotation.angle.set(0.0);
myNode62.innerTranslation.vector.set(0,0,0);
myNode62.isVisible = false;

/* définition du node n°63*/
const myNode63 = object.addSphere();
myNode63.center.set(-0.004,1.418,1.584);
myNode63.radius.set(3.4288044563666795);
myNode63.isVisible = false;

/* définition du node n°64*/
const myNode64 = object.addCylinder();
myNode64.point1.set(-1.568,0.001,3.3491);
myNode64.point2.set(-1.568,0.001,4.7869);
myNode64.radius.set(2.107);
myNode64.innerRotation.center.set(0,0,0);
myNode64.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode64.innerRotation.angle.set(119.9998447624254);
myNode64.isVisible = false;

/* définition du node n°65*/
const myNode65 = object.addSphere();
myNode65.center.set(0.004,3.07,1.571);
myNode65.radius.set(2.610800643480846);
myNode65.isVisible = false;

/* définition du node n°66*/
const myNode66 = object.addCommonOperation();
myNode66.leftArg.set(myNode64);
myNode66.rightArg.set(myNode65);
myNode66.isVisible = false;

/* définition du node n°67*/
const myNode67_1 = myNode62.clone();
myNode67_1.isVisible = false;
const myNode67_2 = object.addFuseOperation();
myNode67_2.leftArg.set(myNode67_1);
myNode67_2.rightArg.set(myNode63);
myNode67_2.isVisible = false;
myNode67 = object.addFuseOperation();
myNode67.leftArg.set(myNode67_2);
myNode67.rightArg.set(myNode66);
myNode67.isVisible = false;
myNode67.isVisible = false;

/* définition du node n°68*/
const myNode68 = object.addCylinder();
myNode68.point1.set(3.45,0.294,-1.9679);
myNode68.point2.set(3.45,0.294,-1.4731);
myNode68.radius.set(0.264);
myNode68.innerRotation.center.set(0,0,0);
myNode68.innerRotation.axis.set(0.0,0.0,0.0);
myNode68.innerRotation.angle.set(0.0);
myNode68.isVisible = false;

/* définition du node n°69*/
const myNode69 = object.addBox();
myNode69.point1.set(-2.7819,3.3491,-1.4709);
myNode69.point2.set(4.149900000000001,4.7869,1.5698999999999999);
myNode69.innerRotation.center.set(0,0,0);
myNode69.innerRotation.axis.set(0.0,0.0,0.0);
myNode69.innerRotation.angle.set(0.0);
myNode69.innerTranslation.vector.set(0,0,0);
myNode69.isVisible = false;

/* définition du node n°70*/
const myNode70 = object.addCylinder();
myNode70.point1.set(-1.56,-0.002,-18.0995);
myNode70.point2.set(-1.56,-0.002,4.787400000000002);
myNode70.radius.set(1.483);
myNode70.innerRotation.center.set(0,0,0);
myNode70.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode70.innerRotation.angle.set(119.9998447624254);
myNode70.isVisible = false;

/* définition du node n°71*/
const myNode71 = object.addCutOperation();
myNode71.leftArg.set(myNode69);
myNode71.rightArg.set(myNode70);
myNode71.isVisible = false;

/* définition du node n°72*/
const myNode72 = object.addCylinder();
myNode72.point1.set(4.151,0.293,-1.4709);
myNode72.point2.set(4.151,0.293,1.5698999999999999);
myNode72.radius.set(0.257);
myNode72.innerRotation.center.set(0,0,0);
myNode72.innerRotation.axis.set(0.0,0.0,0.0);
myNode72.innerRotation.angle.set(0.0);
myNode72.isVisible = false;

/* définition du node n°73*/
const myNode73_1 = myNode68.clone();
myNode73_1.isVisible = false;
const myNode73_2 = object.addFuseOperation();
myNode73_2.leftArg.set(myNode73_1);
myNode73_2.rightArg.set(myNode71);
myNode73_2.isVisible = false;
myNode73 = object.addFuseOperation();
myNode73.leftArg.set(myNode73_2);
myNode73.rightArg.set(myNode72);
myNode73.isVisible = false;
myNode73.isVisible = false;

/* définition du node n°74*/
const myNode74 = object.addCommonOperation();
myNode74.leftArg.set(myNode67);
myNode74.rightArg.set(myNode73);
myNode74.isVisible = false;

/* définition du node n°75*/
const myNode75 = object.addCylinder();
myNode75.point1.set(4.139,-4.525,-1.5699);
myNode75.point2.set(4.139,-4.525,1.4708999999999999);
myNode75.radius.set(0.269);
myNode75.innerRotation.center.set(0,0,0);
myNode75.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode75.innerRotation.angle.set(179.9999999997983);
myNode75.isVisible = false;

/* définition du node n°76*/
const myNode76 = object.addCylinder();
myNode76.point1.set(-3.458,3.397,-1.9679);
myNode76.point2.set(-3.458,3.397,-1.1000999999999999);
myNode76.radius.set(0.249);
myNode76.innerRotation.center.set(0,0,0);
myNode76.innerRotation.axis.set(0.0,0.0,0.0);
myNode76.innerRotation.angle.set(0.0);
myNode76.isVisible = false;

/* définition du node n°77*/
const myNode77 = object.addBox();
myNode77.point1.set(-3.7069,-2.9369,-1.9679);
myNode77.point2.set(18.0989,0.27190000000000003,18.0989);
myNode77.innerRotation.center.set(0,0,0);
myNode77.innerRotation.axis.set(0.0,0.0,0.0);
myNode77.innerRotation.angle.set(0.0);
myNode77.innerTranslation.vector.set(0,0,0);
myNode77.isVisible = false;

/* définition du node n°78*/
const myNode78 = object.addBox();
myNode78.point1.set(-18.0989,-2.9369,-0.2289);
myNode78.point2.set(-4.158100000000001,2.9739,18.0989);
myNode78.innerRotation.center.set(0,0,0);
myNode78.innerRotation.axis.set(0.0,0.0,0.0);
myNode78.innerRotation.angle.set(0.0);
myNode78.innerTranslation.vector.set(0,0,0);
myNode78.isVisible = false;

/* définition du node n°79*/
const myNode79 = object.addFuseOperation();
myNode79.leftArg.set(myNode77);
myNode79.rightArg.set(myNode78);
myNode79.isVisible = false;

/* définition du node n°80*/
const myNode80 = object.addCylinder();
myNode80.point1.set(3.602,-0.701,0.2311);
myNode80.point2.set(3.602,-0.701,1.9679);
myNode80.radius.set(0.992);
myNode80.innerRotation.center.set(0,0,0);
myNode80.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode80.innerRotation.angle.set(179.9999999997983);
myNode80.isVisible = false;

/* définition du node n°81*/
const myNode81 = object.addCylinder();
myNode81.point1.set(-1.515,-0.702,-4.9989);
myNode81.point2.set(-1.515,-0.702,-4.7280999999999995);
myNode81.radius.set(0.453);
myNode81.innerRotation.center.set(0,0,0);
myNode81.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode81.innerRotation.angle.set(89.99978954085029);
myNode81.isVisible = false;

/* définition du node n°82*/
const myNode82 = object.addFuseOperation();
myNode82.leftArg.set(myNode80);
myNode82.rightArg.set(myNode81);
myNode82.isVisible = false;

/* définition du node n°83*/
const myNode83 = object.addCommonOperation();
myNode83.leftArg.set(myNode79);
myNode83.rightArg.set(myNode82);
myNode83.isVisible = false;

/* définition du node n°84*/
const myNode84 = object.addBox();
myNode84.point1.set(-3.4349,-1.4389,-1.9679);
myNode84.point2.set(-2.7840999999999996,3.6449,-1.1000999999999999);
myNode84.innerRotation.center.set(0,0,0);
myNode84.innerRotation.axis.set(0.0,0.0,0.0);
myNode84.innerRotation.angle.set(0.0);
myNode84.innerTranslation.vector.set(0,0,0);
myNode84.isVisible = false;

/* définition du node n°85*/
const myNode85 = object.addBox();
myNode85.point1.set(-4.4029,-1.7129,-1.9679);
myNode85.point2.set(-4.1581,-1.4411,-0.7281);
myNode85.innerRotation.center.set(0,0,0);
myNode85.innerRotation.axis.set(0.0,0.0,0.0);
myNode85.innerRotation.angle.set(0.0);
myNode85.innerTranslation.vector.set(0,0,0);
myNode85.isVisible = false;

/* définition du node n°86*/
const myNode86 = object.addBox();
myNode86.point1.set(-4.1549,3.3491,-1.4709);
myNode86.point2.set(-3.4360999999999997,3.6449,1.5698999999999999);
myNode86.innerRotation.center.set(0,0,0);
myNode86.innerRotation.axis.set(0.0,0.0,0.0);
myNode86.innerRotation.angle.set(0.0);
myNode86.innerTranslation.vector.set(0,0,0);
myNode86.isVisible = false;

/* définition du node n°87*/
const myNode87_1 = myNode76.clone();
myNode87_1.isVisible = false;
const myNode87_2 = object.addFuseOperation();
myNode87_2.leftArg.set(myNode87_1);
myNode87_2.rightArg.set(myNode83);
myNode87_2.isVisible = false;
const myNode87_3 = object.addFuseOperation();
myNode87_3.leftArg.set(myNode87_2);
myNode87_3.rightArg.set(myNode84);
myNode87_3.isVisible = false;
const myNode87_4 = object.addFuseOperation();
myNode87_4.leftArg.set(myNode87_3);
myNode87_4.rightArg.set(myNode85);
myNode87_4.isVisible = false;
myNode87 = object.addFuseOperation();
myNode87.leftArg.set(myNode87_4);
myNode87.rightArg.set(myNode86);
myNode87.isVisible = false;
myNode87.isVisible = false;

/* définition du node n°88*/
const myNode88 = object.addBox();
myNode88.point1.set(-4.40345,-1.71345,-1.96845);
myNode88.point2.set(-3.4365500000000004,0.2724500000000001,-0.7275500000000001);
myNode88.innerRotation.center.set(0,0,0);
myNode88.innerRotation.axis.set(0.0,0.0,0.0);
myNode88.innerRotation.angle.set(0.0);
myNode88.innerTranslation.vector.set(0,0,0);
myNode88.isVisible = false;

/* définition du node n°89*/
const myNode89 = object.addCylinder();
myNode89.point1.set(-3.436,-1.714,-1.969);
myNode89.point2.set(-3.436,-1.714,-1.472);
myNode89.radius.set(0.285);
myNode89.innerRotation.center.set(0,0,0);
myNode89.innerRotation.axis.set(0.0,0.0,0.0);
myNode89.innerRotation.angle.set(0.0);
myNode89.isVisible = false;

/* définition du node n°90*/
const myNode90 = object.addCutOperation();
myNode90.leftArg.set(myNode88);
myNode90.rightArg.set(myNode89);
myNode90.isVisible = false;

/* définition du node n°91*/
const myNode91 = object.addCylinder();
myNode91.point1.set(-4.157,-1.687,-1.472);
myNode91.point2.set(-4.157,-1.687,18.099999999999998);
myNode91.radius.set(0.246);
myNode91.innerRotation.center.set(0,0,0);
myNode91.innerRotation.axis.set(0.0,0.0,0.0);
myNode91.innerRotation.angle.set(0.0);
myNode91.isVisible = false;

/* définition du node n°92*/
const myNode92 = object.addBox();
myNode92.point1.set(-4.156,-1.714,-1.472);
myNode92.point2.set(-3.4349999999999996,0.27300000000000013,1.5710000000000002);
myNode92.innerRotation.center.set(0,0,0);
myNode92.innerRotation.axis.set(0.0,0.0,0.0);
myNode92.innerRotation.angle.set(0.0);
myNode92.innerTranslation.vector.set(0,0,0);
myNode92.isVisible = false;

/* définition du node n°93*/
const myNode93 = object.addFuseOperation();
myNode93.leftArg.set(myNode91);
myNode93.rightArg.set(myNode92);
myNode93.isVisible = false;

/* définition du node n°94*/
const myNode94 = object.addCutOperation();
myNode94.leftArg.set(myNode90);
myNode94.rightArg.set(myNode93);
myNode94.isVisible = false;

/* définition du node n°95*/
const myNode95 = object.addCylinder();
myNode95.point1.set(3.606,-0.701,0.23055);
myNode95.point2.set(3.606,-0.701,1.96845);
myNode95.radius.set(0.747);
myNode95.innerRotation.center.set(0,0,0);
myNode95.innerRotation.axis.set(4.168249100214226e-06,3.141592653580742,4.168249100214226e-06);
myNode95.innerRotation.angle.set(179.9999999997983);
myNode95.isVisible = false;

/* définition du node n°96*/
const myNode96 = object.addFuseOperation();
myNode96.leftArg.set(myNode94);
myNode96.rightArg.set(myNode95);
myNode96.isVisible = false;

/* définition du node n°97*/
const myNode97 = object.addCutOperation();
myNode97.leftArg.set(myNode87);
myNode97.rightArg.set(myNode96);
myNode97.isVisible = false;

/* définition du node n°98*/
const myNode98 = object.addBox();
myNode98.point1.set(3.4661,2.9761,-1.4709);
myNode98.point2.set(4.1509,3.6449000000000003,1.5698999999999999);
myNode98.innerRotation.center.set(0,0,0);
myNode98.innerRotation.axis.set(0.0,0.0,0.0);
myNode98.innerRotation.angle.set(0.0);
myNode98.innerTranslation.vector.set(0,0,0);
myNode98.isVisible = false;

/* définition du node n°99*/
const myNode99 = object.addCylinder();
myNode99.point1.set(4.164,3.407,-1.4709);
myNode99.point2.set(4.164,3.407,1.5698999999999999);
myNode99.radius.set(0.236);
myNode99.innerRotation.center.set(0,0,0);
myNode99.innerRotation.axis.set(0.0,0.0,0.0);
myNode99.innerRotation.angle.set(0.0);
myNode99.isVisible = false;

/* définition du node n°100*/
const myNode100 = object.addBox();
myNode100.point1.set(-2.7819,0.0371,-1.4709);
myNode100.point2.set(3.4629,3.6449000000000003,1.5698999999999999);
myNode100.innerRotation.center.set(0,0,0);
myNode100.innerRotation.axis.set(0.0,0.0,0.0);
myNode100.innerRotation.angle.set(0.0);
myNode100.innerTranslation.vector.set(0,0,0);
myNode100.isVisible = false;

/* définition du node n°101*/
const myNode101 = object.addCylinder();
myNode101.point1.set(-1.561,-0.001,0.03655);
myNode101.point2.set(-1.561,-0.001,4.78745);
myNode101.radius.set(1.958);
myNode101.innerRotation.center.set(0,0,0);
myNode101.innerRotation.axis.set(-1.2091961203694672,1.2091973532731866,1.2092005619911987);
myNode101.innerRotation.angle.set(119.9998447624254);
myNode101.isVisible = false;

/* définition du node n°102*/
const myNode102 = object.addCutOperation();
myNode102.leftArg.set(myNode100);
myNode102.rightArg.set(myNode101);
myNode102.isVisible = false;

/* définition du node n°103*/
const myNode103 = object.addBox();
myNode103.point1.set(3.7091,0.2741,-1.4709);
myNode103.point2.set(4.4029,3.3468999999999998,1.5698999999999999);
myNode103.innerRotation.center.set(0,0,0);
myNode103.innerRotation.axis.set(0.0,0.0,0.0);
myNode103.innerRotation.angle.set(0.0);
myNode103.innerTranslation.vector.set(0,0,0);
myNode103.isVisible = false;

/* définition du node n°104*/
const myNode104_1 = myNode98.clone();
myNode104_1.isVisible = false;
const myNode104_2 = object.addFuseOperation();
myNode104_2.leftArg.set(myNode104_1);
myNode104_2.rightArg.set(myNode99);
myNode104_2.isVisible = false;
const myNode104_3 = object.addFuseOperation();
myNode104_3.leftArg.set(myNode104_2);
myNode104_3.rightArg.set(myNode102);
myNode104_3.isVisible = false;
myNode104 = object.addFuseOperation();
myNode104.leftArg.set(myNode104_3);
myNode104.rightArg.set(myNode103);
myNode104.isVisible = false;
myNode104.isVisible = false;

/* définition du node n°105*/
const myNode105 = object.addBox();
myNode105.point1.set(-2.78245,0.03655,-1.47145);
myNode105.point2.set(3.46345,2.97445,1.5704500000000001);
myNode105.innerRotation.center.set(0,0,0);
myNode105.innerRotation.axis.set(0.0,0.0,0.0);
myNode105.innerRotation.angle.set(0.0);
myNode105.innerTranslation.vector.set(0,0,0);
myNode105.isVisible = false;

/* définition du node n°106*/
const myNode106 = object.addCutOperation();
myNode106.leftArg.set(myNode104);
myNode106.rightArg.set(myNode105);
myNode106.isVisible = false;

/* définition du node n°107*/
const myNode107 = object.addBox();
myNode107.point1.set(-3.7069,-4.3899,-1.4709);
myNode107.point2.set(18.0989,-2.9391,-1.1001);
myNode107.innerRotation.center.set(0,0,0);
myNode107.innerRotation.axis.set(0.0,0.0,0.0);
myNode107.innerRotation.angle.set(0.0);
myNode107.innerTranslation.vector.set(0,0,0);
myNode107.isVisible = false;

/* définition du node n°108*/
const myNode108 = object.addCylinder();
myNode108.point1.set(-1.483,-0.114,-18.0989);
myNode108.point2.set(-1.483,-0.114,18.0989);
myNode108.radius.set(2.733);
myNode108.innerRotation.center.set(0,0,0);
myNode108.innerRotation.axis.set(1.18359229880969,1.2044359286746318,-1.2044359286746318);
myNode108.innerRotation.angle.set(118.84175815446184);
myNode108.isVisible = false;

/* définition du node n°109*/
const myNode109 = object.addCommonOperation();
myNode109.leftArg.set(myNode107);
myNode109.rightArg.set(myNode108);
myNode109.isVisible = false;

/* définition du node n°110*/
const myNode110 = object.addBox();
myNode110.point1.set(2.7841,-4.7879,-1.9679);
myNode110.point2.set(4.9989,3.3469000000000007,18.0989);
myNode110.innerRotation.center.set(0,0,0);
myNode110.innerRotation.axis.set(0.0,0.0,0.0);
myNode110.innerRotation.angle.set(0.0);
myNode110.innerTranslation.vector.set(0,0,0);
myNode110.isVisible = false;

/* définition du node n°111*/
const myNode111 = object.addBox();
myNode111.point1.set(2.78355,-4.39045,-1.09845);
myNode111.point2.set(3.70745,-1.7135500000000006,1.5714500000000002);
myNode111.innerRotation.center.set(0,0,0);
myNode111.innerRotation.axis.set(0.0,0.0,0.0);
myNode111.innerRotation.angle.set(0.0);
myNode111.innerTranslation.vector.set(0,0,0);
myNode111.isVisible = false;

/* définition du node n°112*/
const myNode112 = object.addCutOperation();
myNode112.leftArg.set(myNode110);
myNode112.rightArg.set(myNode111);
myNode112.isVisible = false;

/* définition du node n°113*/
const myNode113 = object.addBox();
myNode113.point1.set(-2.78245,-4.78845,-1.96845);
myNode113.point2.set(4.99945,18.099449999999997,18.09945);
myNode113.innerRotation.center.set(0,0,0);
myNode113.innerRotation.axis.set(0.0,0.0,0.0);
myNode113.innerRotation.angle.set(0.0);
myNode113.innerTranslation.vector.set(0,0,0);
myNode113.isVisible = false;

/* définition du node n°114*/
const myNode114 = object.addBox();
myNode114.point1.set(-18.1,-4.391,-1.969);
myNode114.point2.set(3.7079999999999984,-1.713,-0.22999999999999998);
myNode114.innerRotation.center.set(0,0,0);
myNode114.innerRotation.axis.set(0.0,0.0,0.0);
myNode114.innerRotation.angle.set(0.0);
myNode114.innerTranslation.vector.set(0,0,0);
myNode114.isVisible = false;

/* définition du node n°115*/
const myNode115 = object.addCutOperation();
myNode115.leftArg.set(myNode113);
myNode115.rightArg.set(myNode114);
myNode115.isVisible = false;

/* définition du node n°116*/
const myNode116 = object.addCylinder();
myNode116.point1.set(4.171,-4.554,-1.472);
myNode116.point2.set(4.171,-4.554,1.5710000000000002);
myNode116.radius.set(0.228);
myNode116.innerRotation.center.set(0,0,0);
myNode116.innerRotation.axis.set(0.0,0.0,0.0);
myNode116.innerRotation.angle.set(0.0);
myNode116.isVisible = false;

/* définition du node n°117*/
const myNode117 = object.addCylinder();
myNode117.point1.set(3.452,-4.528,-18.1);
myNode117.point2.set(3.452,-4.528,1.570999999999998);
myNode117.radius.set(0.261);
myNode117.innerRotation.center.set(0,0,0);
myNode117.innerRotation.axis.set(0.0,0.0,0.0);
myNode117.innerRotation.angle.set(0.0);
myNode117.isVisible = false;

/* définition du node n°118*/
const myNode118 = object.addFuseOperation();
myNode118.leftArg.set(myNode116);
myNode118.rightArg.set(myNode117);
myNode118.isVisible = false;

/* définition du node n°119*/
const myNode119 = object.addCutOperation();
myNode119.leftArg.set(myNode115);
myNode119.rightArg.set(myNode118);
myNode119.isVisible = false;

/* définition du node n°120*/
const myNode120 = object.addBox();
myNode120.point1.set(3.465,-4.789,-1.472);
myNode120.point2.set(4.152,-1.4399999999999995,-0.22999999999999998);
myNode120.innerRotation.center.set(0,0,0);
myNode120.innerRotation.axis.set(0.0,0.0,0.0);
myNode120.innerRotation.angle.set(0.0);
myNode120.innerTranslation.vector.set(0,0,0);
myNode120.isVisible = false;

/* définition du node n°121*/
const myNode121 = object.addBox();
myNode121.point1.set(3.708,-4.789,-0.23);
myNode121.point2.set(4.151,-1.4399999999999995,1.571);
myNode121.innerRotation.center.set(0,0,0);
myNode121.innerRotation.axis.set(0.0,0.0,0.0);
myNode121.innerRotation.angle.set(0.0);
myNode121.innerTranslation.vector.set(0,0,0);
myNode121.isVisible = false;

/* définition du node n°122*/
const myNode122 = object.addCylinder();
myNode122.point1.set(-1.515,-0.702,4.727);
myNode122.point2.set(-1.515,-0.702,18.1);
myNode122.radius.set(0.453);
myNode122.innerRotation.center.set(0,0,0);
myNode122.innerRotation.axis.set(-7.65541309174553e-12,1.5707926535897931,-7.65541309174553e-12);
myNode122.innerRotation.angle.set(89.99978954085029);
myNode122.isVisible = false;

/* définition du node n°123*/
const myNode123 = object.addCylinder();
myNode123.point1.set(4.148,-1.694,-1.472);
myNode123.point2.set(4.148,-1.694,1.5710000000000002);
myNode123.radius.set(0.256);
myNode123.innerRotation.center.set(0,0,0);
myNode123.innerRotation.axis.set(0.0,0.0,0.0);
myNode123.innerRotation.angle.set(0.0);
myNode123.isVisible = false;

/* définition du node n°124*/
const myNode124_1 = myNode120.clone();
myNode124_1.isVisible = false;
const myNode124_2 = object.addFuseOperation();
myNode124_2.leftArg.set(myNode124_1);
myNode124_2.rightArg.set(myNode121);
myNode124_2.isVisible = false;
const myNode124_3 = object.addFuseOperation();
myNode124_3.leftArg.set(myNode124_2);
myNode124_3.rightArg.set(myNode122);
myNode124_3.isVisible = false;
myNode124 = object.addFuseOperation();
myNode124.leftArg.set(myNode124_3);
myNode124.rightArg.set(myNode123);
myNode124.isVisible = false;
myNode124.isVisible = false;

/* définition du node n°125*/
const myNode125 = object.addCutOperation();
myNode125.leftArg.set(myNode119);
myNode125.rightArg.set(myNode124);
myNode125.isVisible = false;

/* définition du node n°126*/
const myNode126 = object.addCutOperation();
myNode126.leftArg.set(myNode112);
myNode126.rightArg.set(myNode125);
myNode126.isVisible = false;

/* définition du node n°127*/
const myNode127 = object.addCylinder();
myNode127.point1.set(-3.47,-4.552,-1.9679);
myNode127.point2.set(-3.47,-4.552,-1.1000999999999999);
myNode127.radius.set(0.233);
myNode127.innerRotation.center.set(0,0,0);
myNode127.innerRotation.axis.set(0.0,0.0,0.0);
myNode127.innerRotation.angle.set(0.0);
myNode127.isVisible = false;

/* définition du node n°128*/
const myNode128_1 = myNode1.clone();
myNode128_1.isVisible = false;
const myNode128_2 = object.addFuseOperation();
myNode128_2.leftArg.set(myNode128_1);
myNode128_2.rightArg.set(myNode22);
myNode128_2.isVisible = false;
const myNode128_3 = object.addFuseOperation();
myNode128_3.leftArg.set(myNode128_2);
myNode128_3.rightArg.set(myNode25);
myNode128_3.isVisible = false;
const myNode128_4 = object.addFuseOperation();
myNode128_4.leftArg.set(myNode128_3);
myNode128_4.rightArg.set(myNode32);
myNode128_4.isVisible = false;
const myNode128_5 = object.addFuseOperation();
myNode128_5.leftArg.set(myNode128_4);
myNode128_5.rightArg.set(myNode53);
myNode128_5.isVisible = false;
const myNode128_6 = object.addFuseOperation();
myNode128_6.leftArg.set(myNode128_5);
myNode128_6.rightArg.set(myNode54);
myNode128_6.isVisible = false;
const myNode128_7 = object.addFuseOperation();
myNode128_7.leftArg.set(myNode128_6);
myNode128_7.rightArg.set(myNode61);
myNode128_7.isVisible = false;
const myNode128_8 = object.addFuseOperation();
myNode128_8.leftArg.set(myNode128_7);
myNode128_8.rightArg.set(myNode74);
myNode128_8.isVisible = false;
const myNode128_9 = object.addFuseOperation();
myNode128_9.leftArg.set(myNode128_8);
myNode128_9.rightArg.set(myNode75);
myNode128_9.isVisible = false;
const myNode128_10 = object.addFuseOperation();
myNode128_10.leftArg.set(myNode128_9);
myNode128_10.rightArg.set(myNode97);
myNode128_10.isVisible = false;
const myNode128_11 = object.addFuseOperation();
myNode128_11.leftArg.set(myNode128_10);
myNode128_11.rightArg.set(myNode106);
myNode128_11.isVisible = false;
const myNode128_12 = object.addFuseOperation();
myNode128_12.leftArg.set(myNode128_11);
myNode128_12.rightArg.set(myNode109);
myNode128_12.isVisible = false;
const myNode128_13 = object.addFuseOperation();
myNode128_13.leftArg.set(myNode128_12);
myNode128_13.rightArg.set(myNode126);
myNode128_13.isVisible = false;
myNode128 = object.addFuseOperation();
myNode128.leftArg.set(myNode128_13);
myNode128.rightArg.set(myNode127);
myNode128.isVisible = false;
myNode128.isVisible = false;

/* définition du node n°129*/
const myNode129 = object.addCommonOperation();
myNode129.leftArg.set(myNode0);
myNode129.rightArg.set(myNode128);
myNode129.isVisible = true;


/*END Geometry Object Definition*/