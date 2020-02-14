//ajax函数
function ajax(options) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (options.type == "GET") {
        xhr.open(options.type, options.url + options.data, options.async);
        xhr.send()
    } else if (options.type == "POST") {
        xhr.open(options.type, options.url, options.type);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(options.data);
    }
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = xhr.responseText;
                options.success(data);
            } else options.error()
        }
    }
}
function $(Nid) {
    return document.getElementsByClassName(Nid);
}
//导航栏下拉框
let headerBanner8ul = document.getElementsByClassName('headerBanner8ul')
let headerBanner1 = document.getElementsByClassName('headerBanner1')
let headerBanner2ul = document.getElementsByClassName('headerBanner2ul')

function on(obj1, num1, obj2, num2) {
    obj1[num1].addEventListener('mouseover', function () {
        $('headNext')[0].style.transform='translateY(0)';
        obj2[num2].style.display = 'inline'
        
    })
    obj2[num2].addEventListener('mouseover', function () {
        $('headNext')[0].style.transform='translateY(0)';
        obj2[num2].style.display = 'inline'
    })
    obj1[num1].addEventListener('mouseout', function () {
        $('headNext')[0].style.transform='translateY(-2.78rem)';
        obj2[num2].style.display = 'none'
    })
    obj2[num2].addEventListener('mouseout', function () {
        $('headNext')[0].style.transform='translateY(-2.78rem)';
        obj2[num2].style.display = 'none'
    })
}
on(headerBanner1, 1, headerBanner2ul, 0)
on(headerBanner1, 2, headerBanner2ul, 1)
on(headerBanner1, 3, headerBanner2ul, 2)
on(headerBanner1, 4, headerBanner2ul, 3)
on(headerBanner1, 5, headerBanner2ul, 4)
on(headerBanner1, 7, headerBanner8ul, 0)

//轮播图

// ajax({
//     url: 'https://www.easy-mock.com/mock/5e3e8bfa0d15c76d78fb0c72/youshe/',
//     type: "GET",
//     async: true,
//     data: 'lunbotu',
//     success: (data) =>  {
//         data = JSON.parse(data)
//         console.log(data) 
//         console.log(data.pictures[0])
//         for (let i = 0; i < data.pictures.length; i++) {
//        itemimgs[i].src = data.pictures[i]
//       }
//       itemimgs[itemimgs.length-1].src = data.pictures[0]
//     },
//     error: () => {alert('失败')
//     }
// })
let itemimgs = document.getElementsByClassName('itemimg')
let list = document.getElementsByClassName('list')
let img = document.getElementById('img')
let items = document.getElementsByClassName('item');
let goPrebtn = document.getElementById('goPre');
let goNextbtn = document.getElementById('goNext');
let container1 = document.getElementById('containerid')
let pointList = document.getElementById('pointListid')
let points = document.getElementsByClassName('point')

let time = 0;
let circle = 0
let count = 0;
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.marginLeft = (obj.offsetLeft + step) + 'px';

    }, 15);
}
let index;
for (let i = 0; i < points.length; i++) {
    points[i].setAttribute('index', i)
    points[i].addEventListener('click', function () {
        for (let i = 0; i < points.length; i++) {
            points[i].className = 'point'
        }
        this.className = 'point active';
        index = this.getAttribute('index')
        count = index;
        circle = index
        let focuswidth = img.offsetWidth//只能四舍五入为整数..害 这可咋办
        animate(items[0], -focuswidth * (index))
})
}
for(let i = 0;i<points.length;i++){
}
//右键
goNextbtn.addEventListener('click', function () {
    if (count == 3) {
        img.style.marginLeft = 0;
        count = 0;
    }
    count++;
    circle++;
    if (circle == 3) {
        circle = 0;
    }
    let focuswidth = img.offsetWidth
    animate(img, -count * focuswidth)
    circlechange()
})
//左键
goPrebtn.addEventListener('click', function () {
    let focuswidth = img.offsetWidth
    if (count == 0) {
        count = items.length - 1;
        img.style.marginLeft = -count * focuswidth;

    }
    count--;
    circle--;
    if (circle < 0) {
        circle = points.length - 1;
    }
    animate(img, -count * focuswidth)
    circlechange()
})

function circlechange() {
    for (let i = 0; i < points.length; i++) {
        points[i].className = 'point'
    }
    points[circle].className = 'point active'
    
}
let timer = setInterval(() => {
        goNextbtn.click()
    }, 2000);
//小圆圈
container1.addEventListener('mouseover', function () {
    goPrebtn.style.display = 'inline'
    goNextbtn.style.display = 'inline'
    clearInterval(timer)
})
container1.addEventListener('mouseout', function () {
    goPrebtn.style.display = 'none'
    goNextbtn.style.display = 'none'
    timer = setInterval(() => {
        goNextbtn.click()
    }, 2000);
})
goNextbtn.addEventListener('mouseover', function () {
    goNextbtn.style.opacity = 0.2
})
goNextbtn.addEventListener('mouseout', function () {
    goNextbtn.style.opacity = 0.1
})
goPrebtn.addEventListener('mouseover', function () {
    goPrebtn.style.opacity = 0.2
})
goPrebtn.addEventListener('mouseout', function () {
    goPrebtn.style.opacity = 0.1
})

//第二个轮播图 因为第一个不能实现有转换的效果 所以换了一种方法做第二个类似轮播图 最后还是把第一个轮播图改了
let container1btnpre = document.getElementsByClassName('container-1btnpre');
let container1btnnext = document.getElementsByClassName('container-1btnnext');
let containerb31 = document.getElementById('containerb-3-1')
let containerb32 = document.getElementById('containerb-3-2');
let containerbb = document.getElementById('containerbb')
let left = 0;
container1btnnext[0].addEventListener('click', function () {
    interval(containerb31);

})
// var interval = null
container1btnpre[0].addEventListener('click', function () {
    interval(containerb31);
})

function interval(obj) {
    if (left == -240) {
        var int = setInterval(() => {
            if (obj.style.marginLeft == '0px') {
                clearInterval(int)
            } else {
                left += 8;
                containerb31.style.marginLeft = left + 'px';
            }


        }, 1)
    };
    if (left == 0) {
        var int = setInterval(() => {
            if (obj.style.marginLeft == '-240px') {
                clearInterval(int)
            } else {
                left -= 8;
                containerb31.style.marginLeft = left + 'px';
            }


        }, 1)
    };
}

//banner
let left1 = 0;
let mainBannerRightlist = document.getElementById('mainBannerRightlist')
let mainBannerbtn = document.getElementById('mainBannerbtn');
let mainBannerRight = document.getElementsByClassName("mainBannerRight");
mainBannerbtn.addEventListener('click', function () {
    if (left1 == -400) {
        mainBannerbtn.innerHTML = '>'
        var int1 = setInterval(() => {
            if (mainBannerRightlist.style.marginLeft == '0px') {
                clearInterval(int1)
            } else {
                left1 += 40;
                mainBannerRightlist.style.marginLeft = left1 + 'px';
            }

        }, 10);
    } else {
        {
            var int = setInterval(() => {
                if (mainBannerRightlist.style.marginLeft == '-400px') {
                    clearInterval(int)
                } else {
                    left1 -= 40;
                    mainBannerRightlist.style.marginLeft = left1 + 'px';
                }


            }, 10)
        };
        mainBannerbtn.innerHTML = '<';
    }
})


//点击图片放大
let articleList = document.getElementsByClassName("articleList")
let articleListrightimg = document.getElementsByClassName('articleListrightimg')
for (let i = 0; i < articleList.length; i++) {
    articleList[i].addEventListener('mouseover', function () {
        articleListrightimg[i].style.transform = 'scale(1.1)'
        if (i != 13) {
            articleList[i].style.backgroundColor = 'rgba(248, 248, 248, 0.712)';
        }
    })
    articleList[i].addEventListener('mouseout', function () {
        articleListrightimg[i].style.transform = 'scale(1.0)';
        if (i != 13) {
            articleList[i].style.backgroundColor = 'white'
        }
    })
}
//细节大揭秘部分
let sectionContentlist = document.getElementsByClassName('sectionContentlist');
let sectionContenth3 = document.getElementsByClassName('sectionContenth3')
for (let i = 0; i < sectionContentlist.length; i++) {
    sectionContentlist[i].addEventListener('mouseover', function () {
        sectionContentlist[i].style.marginTop = '0px';
        sectionContenth3[i].style.color = '#ff5c00'
    })
    sectionContentlist[i].addEventListener('mouseout', function () {
        sectionContentlist[i].style.marginTop = '5px';
        sectionContenth3[i].style.color = 'black'

    })
}

//金主爸爸
let daddyConcentimg = document.getElementById('daddyConcentimg')
daddyConcentimg.addEventListener('mouseover', function () {
    daddyConcentimg.style.transform = 'scale(1.1)'
})
daddyConcentimg.addEventListener('mouseout', function () {
    daddyConcentimg.style.transform = 'scale(1.0)'
})

//优设专题
let partSpecialconcent23 = document.getElementsByClassName('partSpecialconcent2-3');
let partSpecialconcent1img = document.getElementsByClassName('partSpecialconcent1img');
let partSpecialconcent = document.getElementsByClassName('partSpecialconcent');
for (let i = 0; i < partSpecialconcent.length; i++) {
    partSpecialconcent[i].addEventListener('mouseover', function () {
        partSpecialconcent1img[i].style.filter = 'brightness(1)';
        partSpecialconcent[i].style.boxShadow = '5px 5px 5px 5px #86868641';
        partSpecialconcent23[i].style.backgroundColor = '#ff5c00'
    })
    partSpecialconcent[i].addEventListener('mouseout', function () {
        partSpecialconcent1img[i].style.filter = 'brightness(0.7)';
        partSpecialconcent[i].style.boxShadow = 'none';
        partSpecialconcent23[i].style.backgroundColor = 'white'
    })
}

//变背景色
let hotBox = document.getElementsByClassName('hotBox');
for (let i = 0; i < hotBox.length; i++) {
    hotBox[i].addEventListener('mouseover', function () {
        hotBox[i].style.backgroundColor = '#ff5c00';
    })
    hotBox[i].addEventListener('mouseout', function () {
        hotBox[i].style.backgroundColor = '#e6e6e659';
    })
}

//热门文章集合
let hotarticleBox = document.getElementsByClassName('hotarticleBox');
for (let i = 0; i < hotarticleBox.length; i++) {
    let hotarticleBox1 = hotarticleBox[i].children[0];
    let hotarticleBox2 = hotarticleBox[i].children[1];
    hotarticleBox[i].addEventListener('mouseover', function () {
        hotarticleBox1.style.cssText = 'border:solid 1px #ff5c00;color: #ff5c00;background-color:white;';
        hotarticleBox2.style.color = '#ff5c00'
    })
    if (i > 4 && i < 9) {

        hotarticleBox[i].addEventListener('mouseout', function () {
            hotarticleBox1.style.cssText = 'color:white ;background-color:#ff5c00;';
            hotarticleBox2.style.color = 'black'
        })
    } else {
        hotarticleBox[i].addEventListener('mouseout', function () {
            hotarticleBox1.style.cssText = 'border:solid 1px #c4c4c4;color: rgb(179, 179, 179);';
            hotarticleBox2.style.color = 'black'
        })
    }
}

//side1
let side1Main3 = document.getElementsByClassName('side1Main3');
let side1d = document.getElementsByClassName('side1d');
side1Main3[0].addEventListener('mouseover', function () {
    side1d[0].style.display = 'inline';
    side1Main3[0].style.backgroundColor = '#d85205'
})
side1Main3[0].addEventListener('mouseout', function () {
    side1d[0].style.display = 'none';
    side1Main3[0].style.backgroundColor = '#ff5c00'
})

//side2
//获得实时时间
function getTime(){
    let Week, Weekday;
    let date =  new Date();
    
    Week = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    Weekday = date.getDay();
    
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    
    document.getElementsByClassName("side2Titletime")[0].innerHTML = year + "年" + month + "月" + day + "日" + Week[Weekday];

};
getTime()
//获得新闻内容
let side2Contentboxnews = document.getElementsByClassName('side2Contentboxnews')
ajax({
    url: 'https://www.easy-mock.com/mock/5e3e8bfa0d15c76d78fb0c72/youshe/',
    type: "GET",
    async: true,
    data: 'news',
    success: (data) =>  {
        data = JSON.parse(data)
        console.log(data) 
        for (let i = 0; i < data.news.length; i++) {
            side2Contentboxnews[i].innerHTML = data.news[i]
      }
    },
    error: () => {alert('失败')
    }
})
let side2Contentbox = document.getElementsByClassName('side2Contentbox');
let side2Foot = document.getElementsByClassName('side2Foot');
for (let i = 0; i < side2Foot.length; i++) {
    side2Foot[i].addEventListener('mouseover', function () {
        side2Foot[i].style.cssText = 'background-color:#ff5c00;color:white'
    })
    side2Foot[i].addEventListener('mouseout', function () {
        side2Foot[i].style.cssText = 'background-color:#f3f3f3;color:c4c4c4'

    })
}
for (let i = 0; i < side2Contentbox.length; i++) {
    side2Contentbox[i].addEventListener('mouseover', function () {
        side2Contentbox[i].style.color = '#ff5c00';
    })
    side2Contentbox[i].addEventListener('mouseout', function () {
        side2Contentbox[i].style.color = 'black';
    })
}

//side3
let side3Contentbox = document.getElementsByClassName('side3Contentbox');
let side3Contentbox1 = document.getElementsByClassName('side3Contentbox1')
let side3Contentbox32 = document.getElementsByClassName('side3Contentbox32')
for (let i = 0; i < side3Contentbox.length; i++) {
    side3Contentbox[i].addEventListener('mouseover', function () {
        side3Contentbox1[i].style.color = '#ff5c00';
        side3Contentbox32[i].style.color = '#ff5c00'
    })
    side3Contentbox[i].addEventListener('mouseout', function () {
        side3Contentbox1[i].style.color = 'black';
        side3Contentbox32[i].style.color = 'black'
    })
}

//side4
let side4Top4 = document.getElementsByClassName('side4Top4')
let side4Top13 = document.getElementsByClassName('side4Top13')
let side4Top = document.getElementsByClassName('side4Top');
let side4Top12 = document.getElementsByClassName('side4Top12');
for (let i = 0; i < side4Top12.length; i++) {
    side4Top[i].addEventListener('mouseover', function () {
        side4Top13[i].style.display = 'inline';
        side4Top12[i].style.filter = 'brightness(0.7)'
        side4Top4[i].style.color = '#ff5c00'
    })
    side4Top[i].addEventListener('mouseout', function () {
        side4Top13[i].style.display = 'none';
        side4Top12[i].style.filter = 'brightness(1.0)'
        side4Top4[i].style.color = 'black'
    })
}

//side5
let side5Box = document.getElementsByClassName('side5Box')
let side5Box1 = document.getElementsByClassName('side5Box1')
let side5Box3_2 = document.getElementsByClassName('side5Box3_2');
for (let i = 0; i < side5Box3_2.length; i++) {
    side5Box[i].addEventListener('mouseover', function () {
        side5Box1[i].style.color = '#ff5c00'
        side5Box3_2[i].style.cssText = 'background-color:#ff5c00;color:white'
    })
    side5Box[i].addEventListener('mouseout', function () {
        side5Box1[i].style.color = 'black'
        side5Box3_2[i].style.cssText = 'background-color:white;color:#ff5c00'
    })
}

//side6
let side6Boxl2 = document.getElementsByClassName('side6Boxl2')
let side6Boxr = document.getElementsByClassName('side6Boxr')
let side6Boxr1 = document.getElementsByClassName('side6Boxr1')
let side6Boxr3 = document.getElementsByClassName('side6Boxr3')
for (let i = 0; i < side6Boxr.length; i++) {
    side6Boxr[i].addEventListener('mouseover', function () {

        side6Boxr1[i].style.color = '#ff5c00'
        side6Boxr3[i].style.cssText = 'background-color:#ff5c00;color:white'
    })
    side6Boxr[i].addEventListener('mouseout', function () {
        side6Boxr1[i].style.color = 'black'
        side6Boxr3[i].style.cssText = 'background-color:white;color:#ff5c00'
    })
    side6Boxl2[i].addEventListener('mouseover', function () {
        side6Boxl2[i].style.transform = 'scale(1.1)';
    })
    side6Boxl2[i].addEventListener('mouseout', function () {
        side6Boxl2[i].style.transform = 'scale(1.0)';
    })
}

//foot1
let foot1Content2lh4 = document.getElementsByClassName('foot1Content2lh4')
let foot1 = document.getElementsByClassName('foot1');
let foot1Content2l = document.getElementById('foot1Content2l');
foot1[0].addEventListener('mouseover', function () {
    foot1Content2lh4[0].style.display = 'inline'
    foot1Content2l.style.marginLeft = '-50px';

})
foot1[0].addEventListener('mouseout', function () {
    foot1Content2l.style.marginLeft = '0px'
    foot1Content2lh4[0].style.display = 'none'
})

//变亮
let filter = document.getElementsByClassName('filter')
for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener('mouseover', function () {
        filter[i].style.filter = 'brightness(1.0)'
    })
    filter[i].addEventListener('mouseout', function () {
        filter[i].style.filter = 'brightness(0.7)'
    })
}

//foot3
let foot3 = document.getElementsByClassName('foot3')
let rainbow = document.getElementsByClassName('rainbow')
foot3[0].addEventListener('mouseover', function () {
    setInterval(() => {
        rainbow[0].marginLeft = '100px'

    })
}, 100)

//变白
let turnWhite = document.getElementsByClassName('turnWhite')
for (let i = 0; i < turnWhite.length; i++) {
    turnWhite[i].addEventListener('mouseover', function () {
        turnWhite[i].style.color = 'white'
    })
    turnWhite[i].addEventListener('mouseout', function () {
        turnWhite[i].style.color = '#92929291'
    })
}

//sideBar
let btn11 = document.getElementById('btn11')
let btn13 = document.getElementById('btn13')
let icon1 = document.getElementsByClassName('icon1')
let btn11c = document.getElementsByClassName('btn11c')
btn11.addEventListener('mouseover', function () {
    icon1[0].style.display = 'none'
    btn11c[0].style.display = 'inline'
})
btn11.addEventListener('mouseout', function () {
    icon1[0].style.display = 'inline'
    btn11c[0].style.display = 'none'
})
btn13.addEventListener('click', function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})
