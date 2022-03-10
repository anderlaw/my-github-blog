最近俄乌战争占据了各大新闻版面，开源社区也开始表达自己的立场：**支持和平、反对战争**。`github`、`Vue作者尤雨溪`等平台或开源作者都作了回应。这次战争也从侧面印证了我们当前的世界充满了从未有过的不确定性，普世价值面临着巨大的考验，人类文明将走向何方？

我想起了16年美国大选，川普的特立独行、标新立异让人大跌眼镜，很多人厌倦了虚伪政客一贯的彬彬有礼、绅士翩翩、台上一套背后一套的嘴脸，认为川普可以拯救美国，一个著名的`battle`视频有这样一个令人印象深刻的场景：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5eb23aebfc2426787ad637f78620f4b~tplv-k3u1fbpfcp-watermark.image?)

破碎的美国国旗在川普的身后重新组装起来，暗示他自己（川普）可以把分裂的美国社会再次凝聚起来，让美国再次伟大。川普当选了，不仅美国更加分裂，整个世界局势也更加的动荡不安。

其实做开发的大多单纯而善良，这里我不想扯太多的政治，想通过实现一下上面的效果：**实现一张图片打碎后渐进拼接组合**，一个寓意着和平、团结、希望的图案，祝福！

这是最终效果图：
![qssyl-37xix.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dad34a7655b6466c9955704e0ca9502c~tplv-k3u1fbpfcp-watermark.image?)

## 功能设计
我们要实现这样一个东西，主要考虑几下几点：
- 如何实现立体效果
- 如何将一张完整的图片切成一个个的小块
- 如何处理小块的起点、终点位置并设置运动轨迹

### 立体效果
其实就是借助的css3属性`transfrom-style:preserve-3d`结合`transform`。通过给父容器元素设置`preserve-3d`激活3d效果，再进行子元素的x、y轴、z轴平移、反转实现的。

具体细节不再赘述，可以参考[这篇文章](https://blog.csdn.net/weixin_44486539/article/details/104147027)。


### 图片切块
将一张完整的图片切成一个个的小片，有一些问题需要思考：
- 如何获取图片的原始尺寸、保证图片不会超出容器？借助`imgElement.naturalWidth/naturalHeight`,设置合理的比例尺，完成图片的等比例缩放
- 切片的形状如何定义？三角形？多边形？不，必须是矩形，因为我打算用`DOM`节点来做形状，不想搞太复杂
- 切片尺寸如何定义？随机生成？太复杂，必须是均分的。参数可配置即可
- 如何实现切片呢？利用`canvasCtx.drawImage`

okay,细节敲定，开始撸代码！
先计算切片的剪切参数:`dx、dy、dw、dh`,dx、dy表示图片的剪切起点，dw、dh表示图片的剪切大小。

```js
//计算每片的宽高，向下取整
const slicePixelXLength = Math.floor(this._containerWidth / this.columnCount)
const slicePixelYLength = Math.floor(this._containerHeight / this.rowCount)

//边界参数组
const boundaryHorizontalValues = (new Array(this.columnCount).join('-').split('-')).map((_, index) => slicePixelXLength * index);
const boundaryVerticalValues = (new Array(this.rowCount).join('-').split('-')).map((_, index) => slicePixelYLength * index)

//每个切片参数组成的数组
const sliceArr = []

boundaryVerticalValues.forEach((itemY, indexY) => {
    boundaryHorizontalValues.forEach((itemX, indexX) => {
        let dx, dy, dw, dh;
        dx = itemX;
        dy = itemY;
        dw = slicePixelXLength;
        dh = slicePixelYLength

        if (indexX === boundaryHorizontalValues.length - 1) {
            //the last one
            dw = this._containerWidth - indexX * slicePixelXLength
        }
        if (indexY === boundaryVerticalValues.length - 1) {
            //the last one
            dh = this._containerHeight - indexY * slicePixelYLength
        }

        sliceArr.push({
            dx,
            dy,
            dw,
            dh
        })
    })
})
```
得到切片的参数后就可以拿到一个个的切后的图片了：
```js
const base64Arr = [];
sliceArr.forEach(item => {
    canvas.width = item.dw * this.ratio
    canvas.height = item.dh * this.ratio
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
    canvasCtx.drawImage(this.imgEle, item.dx / this.ratio, item.dy / this.ratio, item.dw / this.ratio, item.dh / this.ratio, 0, 0, canvas.width, canvas.height);
    base64Arr.push(canvas.toDataURL())
})
```

### 计算、设置切块的轨迹
其实我们上面的到的 sliceArr里切片的`dx,dy`属性就是切片相对于原始图片的位置，自然也就是运动轨迹的终点。所以我们还需要计算起点。

其实起点的位置我们不需要太精确，只需要位于容器的最底部即可,从看不见的位置飞上来到达终点：`imgBox.style.top = this._containerHeight + imgboxSize[0] / 2 +'px'`，这里我们取了外围容器的高度加盒子尺寸一个边的一半（其实不太精确，有时形状可能会露头，不过没啥大问题）。

上面设置的还只是2d平面的，还需要考虑3d平面的`transform`,:
```js
const randomDegree = () => Math.floor(Math.random() * 360)
const randomSignal = () => Math.random() > 0.5 ? '-' : '+'

//initial position：搞个随机位置点作为起点
imgBox.style.transform = `rotateX(${randomSignal()}${randomDegree()}deg) rotateY(${randomSignal()}${randomDegree()}deg)`
```
终点自不必说了，还原就行了，角度都是0。

拿一个切片为例：
```js
const imgBox = document.createElement('div');
//设置盒子的大小
const imgboxSize = [this.sliceArr[index].dw, this.sliceArr[index].dh]
imgBox.style.width = imgboxSize[0] + 'px'
imgBox.style.height = imgboxSize[1] + 'px'
//定位
imgBox.style.position = 'absolute';
imgBox.style.transformStyle = 'preserve-3d';
//定义轨迹属性
imgBox.style.transition = 'transform 1.5s ease-in, left 1.5s ease-in, top 1.5s ease-in';
//get random degree
const randomDegree = () => Math.floor(Math.random() * 360)
const randomSignal = () => Math.random() > 0.5 ? '-' : '+'

//initial position
imgBox.style.top = this._containerHeight + imgboxSize[0] / 2 + 'px'
imgBox.style.transform = `rotateX(${randomSignal()}${randomDegree()}deg) rotateY(${randomSignal()}${randomDegree()}deg)`

//开启运动（一定要在nextTick里设置transition的终点才能触发运动）
setTimeout(() => {
    imgBox.style.left = this.sliceArr[index].dx + 'px'
    imgBox.style.top = this.sliceArr[index].dy + 'px'
    imgBox.style.transform = 'rotateX(0deg) rotateY(0deg)'
}, 100)
```

## 最后

具体代码可以在这个[仓库](https://github.com/anderlaw/image-broke-assemble)下找到，我将上述过程封装成了一个类里面，无需任何的样式，支持一些参数的配置，仅需几行代码加一张图片即可实现：
```js
const imgTransformer = new ImageTransformer('#img-container')
//配置，可选
imgTransformer.config({
    containerWidth: 450,
    effect: 'grow',
    columnCount: 6,
    rowCount: 6
})
//启动:如果因某种原因导致图片跨域不能访问，你可以考虑将其转换为base64的形式
imgTransformer.initImgData(base64OrUrl, () => {
    imgTransformer.execute()
})
```
再来一组效果吧：

![20220309080801-7c011ad592.[gif-2-mp4.com].gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ebc81607bc39478ea5f8627603dd32bf~tplv-k3u1fbpfcp-watermark.image?)

距离上次发文 [为战胜焦虑，我写了个App](https://juejin.cn/post/7070874868308246559)已经有近一周了，
感谢里评论区各位网友的热心建议，当时焦虑已经有了明显的改善，但最近似乎又卷土重来了，看来与焦虑的斗争注定是一场拉锯战，没有那么简单。

