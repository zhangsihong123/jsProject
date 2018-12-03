//JavaScript对象

/**
 * 特性
 * 1、JavaScript中的所有事物都是对象：字符串、数字、数组、日期，等等
 * 2、对象是拥有属性和方法的数据
 * 
 * 属相和方法
 * 1、属性是与对象相关的值
 * 2、方法是能够在对象上执行的动作
 * 
 * 示例：汽车就是现实生活中的对象
 *  */
car.name = 'Aston Matin'
car.model = 500
car.weight = '850kg'
car.color = white

car.start()
car.drive()
car.brake()//刹车

//JavaScript中的对象
/**
 * 1、在JavaScript中对象是数据(变量),拥有属性和方法。
 * 2、当您这样声明一个JavaScript变量时
 */
var txt ='hello'
//实际上你已经创建了一个对象，字符串对象拥有内建属性length。对于上面的对象来说length的值是5
txt.length //--> 5
//方法：
txt.indexOf();
txt.replace();
txt.search();

//创建JavaScript对象
person = new Object;
person.firstname = "Bill";
person.lastname = "Gates";
person.age = 56;
person.eyecolor = "bule";

//访问对象的属性
//objectName.propertyName
var message = "hello world!";
var l = message.length;

//访问对象的方法
//objectName.methodName()
var m = message.toUpperCase();