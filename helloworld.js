var app = new THING.App({
    // 引用场景
    url: 'http://服务器IP:端口号/MMDScene/场景名',  // 场景地址
    skyBox: 'BlueSky', // 天空盒
	resourceLibraryUrl: "./" 
});

app.on('load', function () {
    // 创建模型
    let obj = app.create({
        type: 'Thing',
        name: '宇航员',
        url: './file/models/7bfb3321557a40fead822d7285ac5324/0/gltf/', 
        position: [0, 0, 0],
        angle: 45
    });
    
    obj.playAnimation({
        name: '_defaultAnim_',
        loopType: THING.LoopType.Repeat,
      });

    let stylesObj = {fontColor: '#ff7f00',fontSize: 32}

    createText('宇航员','HelloWorld', stylesObj, [0, 3, 0]);
});


// 为物体创建3D文本
function createText(name, text, style, localPosition) {
    if(!app.query(name) || !app.query(name)[0]) {
        return
    }

    var obj  = app.query(name)[0];
    var textRegion = app.create({
        type: 'TextRegion',
        parent: obj,
        localPosition: localPosition,
        text: text,
        style: style
    });
    return textRegion
}