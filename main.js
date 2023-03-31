var models = [
    {
        name: 'Araba 1',
        image: 'img/1.jpg',
        link: 'img/1.jpg'
    },
    {
        name: 'Araba 2',
        image: 'img/2.jpg',
        link: 'img/2.jpg'
    },
    {
        name: 'Araba 3',
        image: 'img/3.jpg',
        link: 'img/3.jpg'
    },
    {
        name: 'Araba 4',
        image: 'img/4.jpg',
        link: 'img/4.jpg'
    },
    {
        name: 'Araba 5',
        image: 'img/5.jpg',
        link: 'img/5.jpg'
    }
]

var index = 0;
var slaytCount = models.length;
var interval;

var settings = {
    duration: '1100',
    random: false
};

init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});
document.querySelector('.fa-arrow-right').addEventListener('click', function () {
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

function init(settings) {
    var prev;
    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev);
            prev = index;
        } else {
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    }, settings.duration);

}



function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }

    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);

    document.querySelector('.card-link').setAttribute('href', models[index].link);
}


