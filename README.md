### English

- #### Install

  npm install log-console-color

- #### Introduce

  import { ColorConsoleLog , config } from 'log-console-color'

- #### Use

  1. ##### Example use

     ```js
     const log1 = new ColorConsoleLog({ clear: true });
     log1("hello world"); //log1 Prints "hello world" in the default color (red) after clearing all console output.
     
     const log2 = new ColorConsoleLog({ styles: {"color": "blue"}});
     log2("color blue"); //log2 does not clear console output and simply prints "color blue" in the color of blue.
     
     const log3 = new ColorConsoleLog();
     log3("print1","print2","print3"); //log3 prints "print1","print2","print3" using the default configuration options.
     ```

  2. ##### Usage of total configuration

     ```js
     config.switch = false; //All instances are not printed to the console
     config.styles = {
         "color": "blue"
     } //The default console print color is blue for all instances
     config.identify = "==>"; //The default console print delimiter for all instances is '==>'
     
     //... And so on
     ```

- #### Configuration options

  ```js
  //The total configuration options are the same as the instance configuration options
  {
    switch: true, //Whether the instance console prints to the console. The default is true
    styles: {
      "color": "red", //The console output color is red by default
      "font-size": "12px", //The default console text size is 12px
        //... Other custom styles
    },
    type: true, //Select whether the first output is a type or a value, the default is true, and the output is a type
    identify: "---> ", //Sets the delimiter, default '---> '
    startNumber: num, //Set the count; the default is false. Start at 1 and add up each time
    msg: false, //When msg is set to true, it means that the first output is customized, and the default is false
    clear: false, //When set to true, it will automatically clear all console output records before printing the current record
  }
  ```

- #### Description of total configuration option permissions and instance option configuration permissions

  Just two points:

  1. The default option configuration for all instances inherits the total configuration options.
  2. The option configuration permissions of all instances are higher than the total configuration option permissions.

  An example：

  ```js
  config.switch = false; //All instances are not printed to the console (e.g., production)
  
  const log1 = new ColorConsoleLog();
  log1("hello world"); //log1 does not print "hello world"
  
  const log2 = new ColorConsoleLog();
  log2("color blue"); //log2 does not print "color blue"
  
  const log3 = new ColorConsoleLog({ switch: true });
  log3("print1","print2","print3"); //log3 prints "print1","print2","print3"(e.g., log3 prints in production).
  ```



### 中文

- #### 安装

  npm install log-console-color

- #### 引入

  import { ColorConsoleLog , config } from 'log-console-color'

- #### 使用

  1. ##### 实例使用

     ```js
     const log1 = new ColorConsoleLog({ clear: true });
     log1("hello world"); //log1清除控制台所有输出记录后打印默认颜色（红色）的“hello world”
     
     const log2 = new ColorConsoleLog({ styles: {"color": "blue"}});
     log2("color blue"); //log2不会清除控制台的输出记录，直接打印蓝色颜色的“color blue”
     
     const log3 = new ColorConsoleLog();
     log3("print1","print2","print3"); //log3使用默认配置选项分别打印输出"print1","print2","print3"
     ```

  2. ##### 总配置的使用

     ```js
     config.switch = false; //所有实例不会在控制台中打印输出
     config.styles = {
         "color": "blue"
     } //所有实例控制台默认打印输出颜色是蓝色
     config.identify = "==>"; //所有实例控制台默认打印输出分隔符是'==>'
     
     //... 等等
     ```

- #### 配置选项

  ```js
  //总配置选项和实例配置选项相同
  {
    switch: true, //实例控制台是否打印输出，默认true，打印输出到控制台
    styles: {
      "color": "red", //控制台输出颜色默认为红色
      "font-size": "12px", //控制台文字大小默认为12px
        //... 其他自定义样式
    },
    type: true, //选择打印首输出是类型或者是值，默认true,输出是类型
    identify: "---> ", //设置分隔符，默认是'---> '
    startNumber: num, //设置次数，默认false从1开始，每次累计加一
    msg: false, //设置msg为true时表示打印首输出提示自定义,默认false
    clear: false, //设置为true时自动清除控制台所有输出记录，然后再输出本次记录，默认false
  }
  ```

- #### 总配置选项权限和实例选项配置权限说明

  就两个点：

  1. 所有实例的默认选项配置继承总配置选项；
  2. 所有实例的选项配置权限是高于总配置选项权限的；

  举例说明：

  ```js
  config.switch = false; //所有实例不会在控制台中打印输出(比如生产环境)
  
  const log1 = new ColorConsoleLog();
  log1("hello world"); //log1不会打印“hello world”
  
  const log2 = new ColorConsoleLog();
  log2("color blue"); //log2不会打印“color blue”
  
  const log3 = new ColorConsoleLog({ switch: true });
  log3("print1","print2","print3"); //log3会打印print1","print2","print3"(比如生产环境需要log3打印)
  ```

