$(document).ready(function () {
    AOS.init();
    $('.tutorial__list').slick({
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slider__button next"><i class="fa-solid fa-chevron-right"></i></button>',
        nextArrow:'<button class="slider__button previous"><i class="fa-solid fa-chevron-left"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

function countNum(n, arr){
    let count=0
    arr.forEach(function(item){
        if (item==n)
            count++
    })
    return count
}

function isBeautifulNum(N){
    const arr=N.toString().split('')
    // arr.forEach(function(item){
    //     if (item!=countNum(item)){
    //         return 0
    //     }
    // })
    for (let i=0; i<arr.length; i++){
        if (arr[i]!=countNum(arr[i], arr))
            return 0
    }
    return 1
}

function beautifulNum(N){
    let result=N+1
    while (true){
        let status=false;
        const arr=result.toString().split('')

        for (let i=0; i<arr.length; i++){
            if (arr[i]!=countNum(arr[i],arr)){
                status=false
                break
            }
            status=true
        }

        if (status) return result
        else result++
    }
}

console.log(beautifulNum(3123442342))
console.log(isBeautifulNum(2))
